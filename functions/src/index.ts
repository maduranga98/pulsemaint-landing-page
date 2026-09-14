import { setGlobalOptions } from "firebase-functions/v2";
import { defineSecret } from "firebase-functions/params";
import { onRequest, type Request } from "firebase-functions/v2/https";
import { logger } from "firebase-functions";
import { validateBooking } from "./booking.js";
import { confirmationMail, getTransporter, internalMail } from "./mail.js";

/**
 * Password for support@firmicore.com on mail.spacemail.com.
 *
 * Set it once with:  firebase functions:secrets:set SMTP_PASSWORD
 * It is never committed and is only mounted into this one function.
 */
const SMTP_PASSWORD = defineSecret("SMTP_PASSWORD");

// us-central1 keeps the Hosting rewrite in firebase.json simple; the form is
// low-traffic, so one warm-ish instance is plenty and the cap bounds abuse cost.
setGlobalOptions({ region: "us-central1", maxInstances: 5 });

const ALLOWED_ORIGINS = [
  "https://firmicore.com",
  "https://www.firmicore.com",
  "https://pulsemaint-landing-page.web.app",
  "https://pulsemaint-landing-page.firebaseapp.com",
  "http://localhost:3000",
];

/**
 * Best-effort per-IP throttle.
 *
 * Instance-local, so it is a speed bump rather than a guarantee - with
 * maxInstances capped the blast radius is small either way, and the real
 * defence against scripted abuse is that nothing here is worth automating.
 */
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000;
const RATE_LIMIT_MAX = 5;
const hits = new Map<string, number[]>();

function rateLimited(ip: string): boolean {
  if (!ip) return false;
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((at) => now - at < RATE_LIMIT_WINDOW_MS);
  if (recent.length >= RATE_LIMIT_MAX) {
    hits.set(ip, recent);
    return true;
  }
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 5_000) hits.clear();
  return false;
}

function applyCors(req: Request, res: { set: (k: string, v: string) => void }): void {
  const origin = req.get("origin");
  if (origin && ALLOWED_ORIGINS.includes(origin)) {
    res.set("Access-Control-Allow-Origin", origin);
    res.set("Vary", "Origin");
  }
  res.set("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.set("Access-Control-Allow-Headers", "Content-Type");
  res.set("Access-Control-Max-Age", "3600");
}

function clientIp(req: Request): string {
  const forwarded = req.get("x-forwarded-for");
  return (forwarded ? forwarded.split(",")[0] : req.ip || "").trim();
}

export const bookDemo = onRequest({ secrets: [SMTP_PASSWORD], cors: false }, async (req, res) => {
  applyCors(req, res);

  if (req.method === "OPTIONS") {
    res.status(204).send("");
    return;
  }
  if (req.method !== "POST") {
    res.status(405).json({ ok: false, message: "Method not allowed." });
    return;
  }

  const ip = clientIp(req);
  if (rateLimited(ip)) {
    res.status(429).json({ ok: false, message: "Too many requests. Please try again later." });
    return;
  }

  const body = (typeof req.body === "string" ? safeParse(req.body) : req.body) as Record<string, unknown>;

  // Honeypot: a real browser never fills a visually hidden field. Answer 200 so
  // a bot cannot tell it was caught and retry with the field cleared.
  if (typeof body?.website === "string" && body.website.trim() !== "") {
    logger.info("Booking honeypot tripped", { ip });
    res.status(200).json({ ok: true });
    return;
  }

  const result = validateBooking(body);
  if (!result.ok) {
    res.status(400).json({ ok: false, message: "Please check the highlighted fields.", errors: result.errors });
    return;
  }

  const meta = {
    ip,
    userAgent: req.get("user-agent") ?? "",
    referer: req.get("referer") ?? "",
    submittedAt: new Date(),
  };

  try {
    const transporter = getTransporter(SMTP_PASSWORD.value());
    // The internal mail is the one that must land; a bounced confirmation must
    // not cost us the lead, so it is sent after and its failure is only logged.
    await transporter.sendMail(internalMail(result.data, meta));
    logger.info("Booking request delivered", {
      company: result.data.companyName,
      country: result.data.country,
      machines: result.data.machineCount,
    });

    try {
      await transporter.sendMail(confirmationMail(result.data));
    } catch (error) {
      logger.warn("Confirmation mail failed", { error: String(error) });
    }

    res.status(200).json({ ok: true });
  } catch (error) {
    logger.error("Booking mail failed", { error: String(error) });
    res.status(502).json({
      ok: false,
      message: "We could not send your request. Please email support@firmicore.com directly.",
    });
  }
});

function safeParse(value: string): Record<string, unknown> {
  try {
    const parsed = JSON.parse(value);
    return typeof parsed === "object" && parsed !== null ? (parsed as Record<string, unknown>) : {};
  } catch {
    return {};
  }
}
