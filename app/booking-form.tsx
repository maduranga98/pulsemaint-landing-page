"use client";

import { cloneElement, useCallback, useId, useMemo, useRef, useState, useSyncExternalStore } from "react";
import { COUNTRIES } from "./countries";
import { TIMEZONE_GROUPS, TIMEZONE_VALUES } from "./timezones";

/** Hosting rewrites this path to the `bookDemo` Cloud Function (see firebase.json). */
const ENDPOINT = "/api/book-demo";

const MAX_MACHINES = 100_000;
const MAX_NOTES = 2_000;
/** How far ahead a visitor may book, in days. */
const BOOKING_HORIZON_DAYS = 120;

/** 30-minute slots across a working day; the label carries the 12-hour reading. */
const TIME_SLOTS = Array.from({ length: 21 }, (_, index) => {
  const minutes = 8 * 60 + index * 30;
  const hour = Math.floor(minutes / 60);
  const minute = minutes % 60;
  const value = `${String(hour).padStart(2, "0")}:${String(minute).padStart(2, "0")}`;
  const suffix = hour < 12 ? "AM" : "PM";
  const twelve = hour % 12 === 0 ? 12 : hour % 12;
  return { value, label: `${twelve}:${String(minute).padStart(2, "0")} ${suffix}` };
});

type Fields = {
  fullName: string;
  email: string;
  phone: string;
  companyName: string;
  country: string;
  machineCount: string;
  preferredDate: string;
  preferredTime: string;
  timezone: string;
  notes: string;
};

const EMPTY: Fields = {
  fullName: "",
  email: "",
  phone: "",
  companyName: "",
  country: "",
  machineCount: "",
  preferredDate: "",
  preferredTime: "10:00",
  timezone: "",
  notes: "",
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/** Mirrors the Cloud Function's rules so a mistake is caught before the round trip. */
function validate(values: Fields): Partial<Record<keyof Fields, string>> {
  const errors: Partial<Record<keyof Fields, string>> = {};
  const machines = Number(values.machineCount);

  if (values.fullName.trim().length < 2) errors.fullName = "Tell us who we are meeting.";
  if (!EMAIL_RE.test(values.email.trim())) errors.email = "Enter a valid work email.";
  if (values.companyName.trim().length < 2) errors.companyName = "Company name is required.";
  if (!values.country) errors.country = "Select your country.";
  if (!Number.isInteger(machines) || machines < 1 || machines > MAX_MACHINES) {
    errors.machineCount = `Enter a number between 1 and ${MAX_MACHINES.toLocaleString("en-US")}.`;
  }
  if (!values.preferredDate) errors.preferredDate = "Pick a preferred date.";
  if (!values.preferredTime) errors.preferredTime = "Pick a preferred time.";
  if (values.timezone && !TIMEZONE_VALUES.has(values.timezone)) errors.timezone = "Pick a time zone.";

  return errors;
}

function toDateInput(date: Date): string {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
}

/**
 * Everything the form needs from the visitor's own environment: the bookable
 * date window and the zone their clock is in.
 *
 * The page is statically exported, so neither can come from render - the build
 * machine's clock and ICU data would be baked into the HTML and then disagree
 * with the browser on hydration. useSyncExternalStore hands the server a
 * neutral snapshot and the client the real one, with no post-mount setState and
 * no mismatch. Snapshots are cached because they must be referentially stable
 * across reads.
 */
type ClientEnv = { ready: boolean; min: string; max: string; zone: string };

const SERVER_ENV: ClientEnv = { ready: false, min: "", max: "", zone: "UTC" };
const subscribeToNothing = () => () => {};
let cachedEnv: ClientEnv | null = null;

function readClientEnv(): ClientEnv {
  if (!cachedEnv) {
    const today = new Date();
    const horizon = new Date(today);
    horizon.setDate(horizon.getDate() + BOOKING_HORIZON_DAYS);
    const detected = Intl.DateTimeFormat().resolvedOptions().timeZone ?? "";
    cachedEnv = {
      ready: true,
      min: toDateInput(today),
      max: toDateInput(horizon),
      // An unlisted zone (an alias the browser reports but our generated list
      // does not carry) falls back to UTC rather than a blank select.
      zone: TIMEZONE_VALUES.has(detected) ? detected : "UTC",
    };
  }
  return cachedEnv;
}

function readServerEnv(): ClientEnv {
  return SERVER_ENV;
}

/**
 * "UTC+05:30" for a zone on a given date - the offset, not the zone name,
 * because that is what makes two zones comparable at a glance. Date-dependent
 * on purpose: half the world's offsets move with DST.
 */
function offsetLabel(zone: string, date: string): string {
  try {
    const at = new Date(`${date || toDateInput(new Date())}T12:00:00Z`);
    const formatted = new Intl.DateTimeFormat("en-US", { timeZone: zone, timeZoneName: "longOffset" })
      .formatToParts(at)
      .find((part) => part.type === "timeZoneName")?.value;
    return formatted === "GMT" ? "UTC+00:00" : (formatted ?? "").replace("GMT", "UTC");
  } catch {
    return "";
  }
}

/**
 * Minutes a zone is ahead of UTC at a given instant. Formatting the instant in
 * the zone and reading the wall clock back is the only way to get this without
 * shipping a tz database.
 */
function zoneOffsetMinutes(zone: string, at: Date): number {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: zone,
    hourCycle: "h23",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  }).formatToParts(at);
  const read = (type: string) => Number(parts.find((part) => part.type === type)?.value ?? "0");
  const asUtc = Date.UTC(read("year"), read("month") - 1, read("day"), read("hour"), read("minute"));
  // Both sides are minute-resolution, so the difference is the offset exactly.
  return (asUtc - Math.floor(at.getTime() / 60_000) * 60_000) / 60_000;
}

/** The visitor's wall-clock slot read back as UTC, e.g. "05:00". */
function utcReading(date: string, time: string, zone: string): string {
  try {
    const naive = Date.parse(`${date}T${time}:00Z`);
    if (Number.isNaN(naive)) return "";
    // Two passes: the first offset may be the wrong side of a DST change, and
    // re-reading it at the corrected instant settles it.
    let instant = naive - zoneOffsetMinutes(zone, new Date(naive)) * 60_000;
    instant = naive - zoneOffsetMinutes(zone, new Date(instant)) * 60_000;
    return new Date(instant).toISOString().slice(11, 16);
  } catch {
    return "";
  }
}

/** "Fri 2 Oct, 10:30 AM in Asia/Colombo (UTC+05:30) - 05:00 UTC on our side." */
function describeSlot(date: string, time: string, zone: string): string {
  if (!date || !time) return "";
  const offset = zone === "UTC" ? "" : offsetLabel(zone, date);
  const utc = utcReading(date, time, zone);
  return `${time} in ${zone}${offset ? ` (${offset})` : ""}${utc ? ` - ${utc} UTC on our side` : ""}.`;
}

const fieldClass =
  "w-full rounded-lg border border-white/10 bg-navy-950/60 px-3.5 py-2.5 text-[15px] text-ink outline-none transition placeholder:text-ink-mute focus:border-pulse/60 focus:ring-2 focus:ring-pulse/20";
const labelClass = "mb-1.5 block font-mono text-[11px] uppercase tracking-[0.12em] text-ink-mute";

export function BookingForm() {
  const formId = useId();
  const [values, setValues] = useState<Fields>(EMPTY);
  const [errors, setErrors] = useState<Partial<Record<keyof Fields, string>>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [message, setMessage] = useState("");
  const honeypot = useRef<HTMLInputElement>(null);

  const env = useSyncExternalStore(subscribeToNothing, readClientEnv, readServerEnv);
  // Blank until the visitor picks one: their own zone is the default, but the
  // meeting may well be for a plant in another one.
  const zone = values.timezone || env.zone;

  const setField = useCallback(
    (key: keyof Fields) => (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
      const { value } = event.target;
      setValues((current) => ({ ...current, [key]: value }));
      // Clear only the field being corrected; leave the rest of the summary intact.
      setErrors((current) => (current[key] ? { ...current, [key]: undefined } : current));
    },
    []
  );

  const countryOptions = useMemo(
    () => COUNTRIES.map((country) => <option key={country} value={country}>{country}</option>),
    []
  );

  const timezoneOptions = useMemo(
    () =>
      TIMEZONE_GROUPS.map(([region, zones]) => (
        <optgroup key={region} label={region}>
          {zones.map(([value, label]) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </optgroup>
      )),
    []
  );

  // Only meaningful once the browser has told us the real zone; before that the
  // server snapshot would print a UTC reading nobody asked for.
  const slotSummary = env.ready ? describeSlot(values.preferredDate, values.preferredTime, zone) : "";

  const submit = useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      if (status === "sending") return;

      const found = validate(values);
      if (Object.keys(found).length > 0) {
        setErrors(found);
        setStatus("error");
        setMessage("Please check the highlighted fields.");
        return;
      }

      setStatus("sending");
      setMessage("");

      try {
        const response = await fetch(ENDPOINT, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ...values,
            machineCount: Number(values.machineCount),
            timezone: zone,
            website: honeypot.current?.value ?? "",
          }),
        });
        const payload = (await response.json().catch(() => ({}))) as {
          ok?: boolean;
          message?: string;
          errors?: Partial<Record<keyof Fields, string>>;
        };

        if (!response.ok || !payload.ok) {
          setErrors(payload.errors ?? {});
          setStatus("error");
          setMessage(payload.message ?? "Something went wrong. Please try again or email support@firmicore.com.");
          return;
        }

        setValues(EMPTY);
        setErrors({});
        setStatus("sent");
      } catch {
        setStatus("error");
        setMessage("Network error. Please try again or email support@firmicore.com.");
      }
    },
    [status, values, zone]
  );

  if (status === "sent") {
    return (
      <div className="rounded-2xl border border-uptime/30 bg-navy-950/70 p-8 text-center sm:p-10">
        <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full border border-uptime/40 text-lg text-uptime">
          ✓
        </div>
        <h3 className="mt-5 font-sora text-xl font-bold text-ink">Your demo is booked</h3>
        <p className="mx-auto mt-3 max-w-md text-[15px] leading-relaxed text-ink-dim">
          Your meeting link is on its way to your inbox. Nothing else to confirm &mdash; just join at your slot
          time.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 rounded-lg border border-white/15 px-5 py-2.5 text-sm font-medium text-ink transition hover:border-pulse/50 hover:text-pulse"
        >
          Book another demo
        </button>
      </div>
    );
  }

  const sending = status === "sending";

  return (
    <form onSubmit={submit} noValidate className="rounded-2xl border border-white/10 bg-navy-950/70 p-6 sm:p-8">
      <div className="grid gap-x-5 gap-y-4 sm:grid-cols-2">
        <Field id={`${formId}-name`} label="Full name" error={errors.fullName}>
          <input
            id={`${formId}-name`}
            name="fullName"
            value={values.fullName}
            onChange={setField("fullName")}
            autoComplete="name"
            maxLength={120}
            placeholder="Nimal Perera"
            className={fieldClass}
          />
        </Field>

        <Field id={`${formId}-company`} label="Company name" error={errors.companyName}>
          <input
            id={`${formId}-company`}
            name="companyName"
            value={values.companyName}
            onChange={setField("companyName")}
            autoComplete="organization"
            maxLength={160}
            placeholder="Acme Processing Ltd"
            className={fieldClass}
          />
        </Field>

        <Field id={`${formId}-email`} label="Work email" error={errors.email}>
          <input
            id={`${formId}-email`}
            name="email"
            type="email"
            inputMode="email"
            value={values.email}
            onChange={setField("email")}
            autoComplete="email"
            maxLength={254}
            placeholder="you@company.com"
            className={fieldClass}
          />
        </Field>

        <Field id={`${formId}-phone`} label="Phone (optional)" error={errors.phone}>
          <input
            id={`${formId}-phone`}
            name="phone"
            type="tel"
            inputMode="tel"
            value={values.phone}
            onChange={setField("phone")}
            autoComplete="tel"
            maxLength={40}
            placeholder="+94 71 999 8500"
            className={fieldClass}
          />
        </Field>

        <Field id={`${formId}-country`} label="Country" error={errors.country}>
          <select
            id={`${formId}-country`}
            name="country"
            value={values.country}
            onChange={setField("country")}
            autoComplete="country-name"
            className={`${fieldClass} select-field appearance-none`}
          >
            <option value="">Select a country</option>
            {countryOptions}
          </select>
        </Field>

        <Field id={`${formId}-machines`} label="Number of machines" error={errors.machineCount}>
          <input
            id={`${formId}-machines`}
            name="machineCount"
            type="number"
            inputMode="numeric"
            min={1}
            max={MAX_MACHINES}
            step={1}
            value={values.machineCount}
            onChange={setField("machineCount")}
            placeholder="120"
            className={fieldClass}
          />
        </Field>

        <Field id={`${formId}-date`} label="Preferred date" error={errors.preferredDate}>
          <input
            id={`${formId}-date`}
            name="preferredDate"
            type="date"
            value={values.preferredDate}
            onChange={setField("preferredDate")}
            min={env.min || undefined}
            max={env.max || undefined}
            className={`${fieldClass} [color-scheme:dark]`}
          />
        </Field>

        <Field id={`${formId}-time`} label="Preferred time" error={errors.preferredTime}>
          <select
            id={`${formId}-time`}
            name="preferredTime"
            value={values.preferredTime}
            onChange={setField("preferredTime")}
            className={`${fieldClass} select-field appearance-none`}
          >
            {TIME_SLOTS.map((slot) => (
              <option key={slot.value} value={slot.value}>
                {slot.label}
              </option>
            ))}
          </select>
        </Field>

        <div className="sm:col-span-2">
          <Field id={`${formId}-timezone`} label="Time zone of that slot" error={errors.timezone}>
            <select
              id={`${formId}-timezone`}
              name="timezone"
              value={zone}
              onChange={setField("timezone")}
              className={`${fieldClass} select-field appearance-none`}
            >
              {timezoneOptions}
            </select>
          </Field>
          <p className="mt-1.5 text-[12.5px] leading-relaxed text-ink-mute">
            {slotSummary || "We default to your device's time zone. Change it if the demo is for another site."}
          </p>
        </div>

        <div className="sm:col-span-2">
          <Field id={`${formId}-notes`} label="What should we focus on? (optional)" error={errors.notes}>
            <textarea
              id={`${formId}-notes`}
              name="notes"
              rows={3}
              value={values.notes}
              onChange={setField("notes")}
              maxLength={MAX_NOTES}
              placeholder="Sites, lines, the modules you care about most."
              className={`${fieldClass} resize-y`}
            />
          </Field>
        </div>
      </div>

      {/* Honeypot: hidden from people and assistive tech, irresistible to bots. */}
      <div aria-hidden="true" className="absolute h-px w-px overflow-hidden opacity-0" style={{ left: "-9999px" }}>
        <label htmlFor={`${formId}-website`}>Website</label>
        <input id={`${formId}-website`} ref={honeypot} name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          disabled={sending}
          className="btn-glow shrink-0 whitespace-nowrap rounded-lg bg-power px-6 py-3 font-medium text-white transition disabled:cursor-not-allowed disabled:opacity-60"
        >
          {sending ? "Sending…" : "Request my demo"}
        </button>
        <p className="text-[12.5px] leading-relaxed text-ink-mute">
          Your meeting link arrives by email the moment you book. No spam, and your details stay with our team.
        </p>
      </div>

      <p
        role="status"
        aria-live="polite"
        className={`mt-4 text-sm ${status === "error" ? "text-crit" : "text-ink-dim"}`}
      >
        {message}
      </p>
    </form>
  );
}

/**
 * Label + control + error, with the error wired to the control via
 * aria-describedby so a screen reader announces the reason, not just "invalid".
 */
function Field({
  id,
  label,
  error,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  children: React.ReactElement<{ "aria-invalid"?: boolean; "aria-describedby"?: string }>;
}) {
  const errorId = `${id}-error`;
  const control = error
    ? cloneElement(children, { "aria-invalid": true, "aria-describedby": errorId })
    : children;

  return (
    <div>
      <label htmlFor={id} className={labelClass}>
        {label}
      </label>
      {control}
      {error ? (
        <p id={errorId} className="mt-1.5 text-[12.5px] text-crit">
          {error}
        </p>
      ) : null}
    </div>
  );
}
