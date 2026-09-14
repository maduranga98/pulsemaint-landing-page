/**
 * Shared shape + validation for the "book a demo" form.
 *
 * Kept free of any firebase-functions import so it stays trivially testable and
 * so the field rules live in exactly one place - the client mirrors these limits
 * for instant feedback, but this file is the authority.
 */

export const MAX_MACHINES = 100_000;

export const FIELD_LIMITS = {
  fullName: 120,
  email: 254,
  phone: 40,
  companyName: 160,
  country: 80,
  preferredTime: 5,
  timezone: 60,
  notes: 2_000,
} as const;

export type BookingRequest = {
  fullName: string;
  email: string;
  phone: string;
  companyName: string;
  country: string;
  machineCount: number;
  preferredDate: string;
  preferredTime: string;
  timezone: string;
  notes: string;
};

/** Deliberately permissive: the only real authority on an address is a delivered mail. */
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const DATE_RE = /^\d{4}-\d{2}-\d{2}$/;
const TIME_RE = /^([01]\d|2[0-3]):([0-5]\d)$/;
/** Control characters: stripped so nothing can inject header-like lines downstream. */
const CONTROL_RE = /[\p{Cc}\p{Cf}]/gu;

function asString(value: unknown, max: number): string {
  if (typeof value !== "string") return "";
  return value.replace(CONTROL_RE, " ").trim().slice(0, max);
}

/** A calendar date is only valid if round-tripping it yields the same string. */
function isRealDate(value: string): boolean {
  if (!DATE_RE.test(value)) return false;
  const parsed = new Date(`${value}T00:00:00Z`);
  return !Number.isNaN(parsed.getTime()) && parsed.toISOString().slice(0, 10) === value;
}

export function validateBooking(
  raw: unknown
): { ok: true; data: BookingRequest } | { ok: false; errors: Record<string, string> } {
  const body = (typeof raw === "object" && raw !== null ? raw : {}) as Record<string, unknown>;
  const errors: Record<string, string> = {};

  const fullName = asString(body.fullName, FIELD_LIMITS.fullName);
  const email = asString(body.email, FIELD_LIMITS.email).toLowerCase();
  const phone = asString(body.phone, FIELD_LIMITS.phone);
  const companyName = asString(body.companyName, FIELD_LIMITS.companyName);
  const country = asString(body.country, FIELD_LIMITS.country);
  const preferredDate = asString(body.preferredDate, 10);
  const preferredTime = asString(body.preferredTime, FIELD_LIMITS.preferredTime);
  const timezone = asString(body.timezone, FIELD_LIMITS.timezone);
  const notes = asString(body.notes, FIELD_LIMITS.notes);

  const rawCount = typeof body.machineCount === "string" ? body.machineCount.trim() : body.machineCount;
  const machineCount = Number(rawCount);

  if (fullName.length < 2) errors.fullName = "Tell us who we are meeting.";
  if (!EMAIL_RE.test(email)) errors.email = "Enter a valid work email.";
  if (companyName.length < 2) errors.companyName = "Company name is required.";
  if (country.length < 2) errors.country = "Select your country.";
  if (!Number.isInteger(machineCount) || machineCount < 1 || machineCount > MAX_MACHINES) {
    errors.machineCount = `Enter a machine count between 1 and ${MAX_MACHINES.toLocaleString("en-US")}.`;
  }
  if (!isRealDate(preferredDate)) errors.preferredDate = "Pick a preferred date.";
  if (!TIME_RE.test(preferredTime)) errors.preferredTime = "Pick a preferred time.";

  if (Object.keys(errors).length > 0) return { ok: false, errors };

  return {
    ok: true,
    data: {
      fullName,
      email,
      phone,
      companyName,
      country,
      machineCount,
      preferredDate,
      preferredTime,
      timezone,
      notes,
    },
  };
}
