import nodemailer, { type Transporter } from "nodemailer";
import type { BookingRequest } from "./booking.js";

export const SMTP_HOST = "mail.spacemail.com";
export const SMTP_PORT = 465;
export const SMTP_USER = "support@firmicore.com";
/** Where booking requests land. Same mailbox as the sender unless overridden. */
export const BOOKING_RECIPIENT = process.env.BOOKING_RECIPIENT || SMTP_USER;

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

function formatDate(date: string, time: string, timezone: string): string {
  const parsed = new Date(`${date}T${time}:00Z`);
  const day = Number.isNaN(parsed.getTime())
    ? date
    : parsed.toLocaleDateString("en-GB", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
        timeZone: "UTC",
      });
  return `${day} at ${time}${timezone ? ` (${timezone})` : ""}`;
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
            <p style="margin:18px 0 0;color:#6A7790;font-size:13px;">Reply to this email if anything changes.</p>
          </td></tr>
          <tr><td style="padding:16px 24px;background:#F4F7FB;font:400 12px/1.6 -apple-system,Segoe UI,Roboto,sans-serif;color:#6A7790;">
            Firmicore &middot; a product of Lumora Ventures Pvt Ltd &middot; Kuliyapitiya, Sri Lanka
          </td></tr>
        </table>
      </div>`,
  };
}
