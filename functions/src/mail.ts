import nodemailer, { type Transporter } from "nodemailer";
import type { BookingRequest } from "./booking.js";

export const SMTP_HOST = "mail.spacemail.com";
export const SMTP_PORT = 465;
export const SMTP_USER = "support@firmicore.com";
/** Where booking requests land. Same mailbox as the sender unless overridden. */
export const BOOKING_RECIPIENT = process.env.BOOKING_RECIPIENT || SMTP_USER;

/**
 * The standing video room every demo runs in.
 *
 * Overridable so the room can be rotated without a code change; the value is
 * still escaped everywhere it is rendered, since an env var is one more thing
 * that can be wrong.
 */
export const MEETING_LINK = process.env.MEETING_LINK || "https://meet.google.com/gxw-qkoe-wqh";

/**
 * One transporter per warm instance.
 *
 * Port 465 is implicit TLS, so `secure` is true; the pool keeps the TLS
 * handshake out of the critical path for back-to-back submissions on the same
 * instance, which is what makes a submission feel instant rather than ~1s.
 */
let transporter: Transporter | undefined;

export function getTransporter(password: string): Transporter {
  if (!transporter) {
    transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: SMTP_PORT,
      secure: true,
      auth: { user: SMTP_USER, pass: password },
      pool: true,
      maxConnections: 3,
      maxMessages: 50,
      connectionTimeout: 15_000,
      greetingTimeout: 10_000,
      socketTimeout: 20_000,
    });
  }
  return transporter;
}

const HTML_ESCAPES: Record<string, string> = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
};

/** Every value below is attacker-controlled; nothing reaches the HTML unescaped. */
export function escapeHtml(value: string): string {
  return value.replace(/[&<>"']/g, (char) => HTML_ESCAPES[char]);
}

/**
 * Minutes a zone is ahead of UTC at a given instant: format the instant in the
 * zone, read the wall clock back, and take the difference.
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
  return (asUtc - Math.floor(at.getTime() / 60_000) * 60_000) / 60_000;
}

/** The instant a wall-clock slot in `zone` actually falls on. */
function resolveInstant(date: string, time: string, zone: string): Date | null {
  const naive = Date.parse(`${date}T${time}:00Z`);
  if (Number.isNaN(naive)) return null;
  try {
    // Two passes: the first offset can be the wrong side of a DST change, and
    // re-reading it at the corrected instant settles it.
    let instant = naive - zoneOffsetMinutes(zone, new Date(naive)) * 60_000;
    instant = naive - zoneOffsetMinutes(zone, new Date(instant)) * 60_000;
    return new Date(instant);
  } catch {
    return null;
  }
}

function offsetLabel(zone: string, at: Date): string {
  try {
    const name = new Intl.DateTimeFormat("en-US", { timeZone: zone, timeZoneName: "longOffset" })
      .formatToParts(at)
      .find((part) => part.type === "timeZoneName")?.value;
    return name === "GMT" ? "UTC+00:00" : (name ?? "").replace("GMT", "UTC");
  } catch {
    return "";
  }
}

/**
 * The requested slot, in the visitor's zone and in UTC.
 *
 * Both readings go in the mail on purpose: the visitor's is the one to confirm
 * back to them, and UTC is the one that survives being pasted into a calendar
 * by someone sitting in a different country.
 */
function formatDate(date: string, time: string, timezone: string): string {
  const zone = timezone || "UTC";
  const instant = resolveInstant(date, time, zone);

  const day = instant
    ? instant.toLocaleDateString("en-GB", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
        timeZone: zone,
      })
    : date;

  // "UTC, UTC+00:00" says the same thing twice.
  const offset = instant && zone !== "UTC" ? offsetLabel(zone, instant) : "";
  const local = `${day} at ${time} (${zone}${offset ? `, ${offset}` : ""})`;
  if (!instant) return local;

  const utc = instant.toISOString().replace("T", " ").slice(0, 16);
  return `${local} = ${utc} UTC`;
}

type Meta = { ip: string; userAgent: string; referer: string; submittedAt: Date };

function rows(data: BookingRequest, meta: Meta): [string, string][] {
  return [
    ["Company", data.companyName],
    ["Country", data.country],
    ["Contact", data.fullName],
    ["Email", data.email],
    ["Phone", data.phone || "-"],
    ["Machines", data.machineCount.toLocaleString("en-US")],
    ["Preferred slot", formatDate(data.preferredDate, data.preferredTime, data.timezone)],
    ["Meeting link", MEETING_LINK],
    ["Notes", data.notes || "-"],
    ["Submitted", meta.submittedAt.toISOString()],
    ["Source IP", meta.ip || "-"],
    ["Referer", meta.referer || "-"],
    ["User agent", meta.userAgent || "-"],
  ];
}

const BRAND = "#00C2FF";
const INK = "#0A1628";

function tableHtml(data: BookingRequest, meta: Meta): string {
  return rows(data, meta)
    .map(
      ([label, value]) => `
        <tr>
          <th align="left" style="padding:10px 16px;border-bottom:1px solid #E6ECF5;font:600 12px/1.4 -apple-system,Segoe UI,Roboto,sans-serif;letter-spacing:.06em;text-transform:uppercase;color:#6A7790;width:34%;vertical-align:top;">${escapeHtml(
            label
          )}</th>
          <td style="padding:10px 16px;border-bottom:1px solid #E6ECF5;font:400 14px/1.6 -apple-system,Segoe UI,Roboto,sans-serif;color:${INK};">${escapeHtml(
            value
          )}</td>
        </tr>`
    )
    .join("");
}

export function internalMail(data: BookingRequest, meta: Meta) {
  const text = rows(data, meta)
    .map(([label, value]) => `${label}: ${value}`)
    .join("\n");

  return {
    from: `"Firmicore Bookings" <${SMTP_USER}>`,
    to: BOOKING_RECIPIENT,
    replyTo: `"${data.fullName.replace(/"/g, "")}" <${data.email}>`,
    subject: `Demo request - ${data.companyName} (${data.machineCount} machines, ${data.country})`,
    text,
    html: `
      <div style="background:#F4F7FB;padding:28px 12px;">
        <table role="presentation" cellpadding="0" cellspacing="0" style="max-width:620px;margin:0 auto;width:100%;background:#FFFFFF;border:1px solid #E6ECF5;border-radius:14px;overflow:hidden;">
          <tr>
            <td style="background:${INK};padding:22px 24px;">
              <div style="font:700 17px/1.2 -apple-system,Segoe UI,Roboto,sans-serif;color:#FFFFFF;">New demo booking</div>
              <div style="margin-top:6px;font:400 13px/1.5 -apple-system,Segoe UI,Roboto,sans-serif;color:${BRAND};">${escapeHtml(
                data.companyName
              )} &middot; ${escapeHtml(data.country)}</div>
            </td>
          </tr>
          <tr><td><table role="presentation" cellpadding="0" cellspacing="0" width="100%">${tableHtml(
            data,
            meta
          )}</table></td></tr>
        </table>
      </div>`,
  };
}

export function confirmationMail(data: BookingRequest) {
  const slot = formatDate(data.preferredDate, data.preferredTime, data.timezone);
  const text = [
    `Hi ${data.fullName},`,
    "",
    "Thanks for booking a Firmicore demo. We have your request and will confirm the slot by email within one business day.",
    "",
    `Company: ${data.companyName}`,
    `Country: ${data.country}`,
    `Machines: ${data.machineCount.toLocaleString("en-US")}`,
    `Requested slot: ${slot}`,
    "",
    `Meeting link: ${MEETING_LINK}`,
    "Join from any browser at the confirmed time - no install needed.",
    "",
    "Reply to this email if anything changes.",
    "",
    "Firmicore - a product of Lumora Ventures Pvt Ltd",
  ].join("\n");

  return {
    from: `"Firmicore" <${SMTP_USER}>`,
    to: data.email,
    replyTo: SMTP_USER,
    subject: "Your Firmicore demo request",
    text,
    html: `
      <div style="background:#F4F7FB;padding:28px 12px;">
        <table role="presentation" cellpadding="0" cellspacing="0" style="max-width:560px;margin:0 auto;width:100%;background:#FFFFFF;border:1px solid #E6ECF5;border-radius:14px;overflow:hidden;">
          <tr><td style="background:${INK};padding:24px;">
            <div style="font:700 19px/1.2 -apple-system,Segoe UI,Roboto,sans-serif;color:#FFFFFF;">Demo request received</div>
            <div style="margin-top:6px;font:400 13px/1.5 -apple-system,Segoe UI,Roboto,sans-serif;color:${BRAND};">Strength at the core of every machine.</div>
          </td></tr>
          <tr><td style="padding:24px;font:400 15px/1.7 -apple-system,Segoe UI,Roboto,sans-serif;color:${INK};">
            <p style="margin:0 0 16px;">Hi ${escapeHtml(data.fullName)},</p>
            <p style="margin:0 0 16px;">Thanks for booking a Firmicore demo. We have your request and will confirm the slot by email within one business day.</p>
            <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="border:1px solid #E6ECF5;border-radius:10px;">
              ${[
                ["Company", data.companyName],
                ["Country", data.country],
                ["Machines", data.machineCount.toLocaleString("en-US")],
                ["Requested slot", slot],
              ]
                .map(
                  ([label, value]) => `<tr>
                    <th align="left" style="padding:9px 14px;font:600 11px/1.4 -apple-system,Segoe UI,Roboto,sans-serif;letter-spacing:.06em;text-transform:uppercase;color:#6A7790;width:38%;">${escapeHtml(
                      label
                    )}</th>
                    <td style="padding:9px 14px;font:400 14px/1.5 -apple-system,Segoe UI,Roboto,sans-serif;color:${INK};">${escapeHtml(
                      value
                    )}</td>
                  </tr>`
                )
                .join("")}
            </table>
            <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="margin-top:18px;border:1px solid #E6ECF5;border-radius:10px;background:#F9FBFE;">
              <tr><td style="padding:18px 14px;text-align:center;">
                <div style="font:600 11px/1.4 -apple-system,Segoe UI,Roboto,sans-serif;letter-spacing:.06em;text-transform:uppercase;color:#6A7790;">Meeting link</div>
                <a href="${escapeHtml(MEETING_LINK)}" style="display:inline-block;margin-top:12px;padding:12px 26px;border-radius:8px;background:${INK};color:#FFFFFF;font:600 14px/1 -apple-system,Segoe UI,Roboto,sans-serif;text-decoration:none;">Join the demo</a>
                <div style="margin-top:12px;font:400 13px/1.5 -apple-system,Segoe UI,Roboto,sans-serif;word-break:break-all;">
                  <a href="${escapeHtml(MEETING_LINK)}" style="color:#0A66C2;text-decoration:none;">${escapeHtml(
                    MEETING_LINK
                  )}</a>
                </div>
                <div style="margin-top:10px;font:400 12px/1.5 -apple-system,Segoe UI,Roboto,sans-serif;color:#6A7790;">Join from any browser at the confirmed time - no install needed.</div>
              </td></tr>
            </table>
            <p style="margin:18px 0 0;color:#6A7790;font-size:13px;">Reply to this email if anything changes.</p>
          </td></tr>
          <tr><td style="padding:16px 24px;background:#F4F7FB;font:400 12px/1.6 -apple-system,Segoe UI,Roboto,sans-serif;color:#6A7790;">
            Firmicore &middot; a product of Lumora Ventures Pvt Ltd &middot; Kuliyapitiya, Sri Lanka
          </td></tr>
        </table>
      </div>`,
  };
}
