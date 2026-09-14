# Booking function

The "Book a demo" form on the landing page posts to `POST /api/book-demo`, which
Firebase Hosting rewrites to the `bookDemo` Cloud Function (`us-central1`). The
site is a static export, so there is no Next.js server to send mail from - this
function is the whole backend.

## Mail

| Setting | Value |
| --- | --- |
| Host | `mail.spacemail.com` |
| Port | `465` (implicit TLS) |
| User / From | `support@firmicore.com` |
| To | `support@firmicore.com`, overridable with the `BOOKING_RECIPIENT` env var |

Two mails go out per submission: the booking details to the team (with the
prospect set as `Reply-To`), and a confirmation to the prospect. A failed
confirmation is logged but never fails the request - the lead is already saved.

## One-time setup: the SMTP password

The password is **not** in the repo. Store it as a Firebase secret:

```bash
firebase functions:secrets:set SMTP_PASSWORD   # paste the mailbox password
```

To rotate it, run the same command again and redeploy.

## Deploy

The GitHub Actions workflows deploy Hosting only, so deploy the function from a
machine with the Firebase CLI (once, and after any change under `functions/`):

```bash
npm --prefix functions ci
firebase deploy --only functions:bookDemo
```

Then deploy Hosting so the `/api/book-demo` rewrite goes live:

```bash
npm run build && firebase deploy --only hosting
```

Until the function is deployed the form returns a network error; everything else
on the page is unaffected.

## Local development

```bash
npm --prefix functions run build
firebase emulators:start --only functions,hosting
```

The emulator does not read production secrets; put `SMTP_PASSWORD=...` in
`functions/.secret.local` (git-ignored) to send real mail from the emulator.

## Behaviour worth knowing

- **Validation** lives in `src/booking.ts` and is the authority; the React form
  mirrors it only to give instant feedback.
- **Time zones**: the slot is stored and mailed with the IANA zone the visitor
  chose - defaulted to their device's, changeable, since the demo is often for a
  plant in another country. Both mails print the visitor's reading *and* the UTC
  instant, resolved through the runtime's tz database, so DST and half-hour
  offsets come out right. A zone the runtime's ICU rejects fails validation.
- **Honeypot**: a filled `website` field returns `200 OK` and sends nothing, so a
  bot cannot detect the trap.
- **Rate limit**: 5 submissions per IP per hour, per instance (`maxInstances` is
  5). Best effort, not a guarantee.
- **CORS** is restricted to the production domains plus `localhost:3000`.
- Every value is HTML-escaped before it reaches the mail body, and control
  characters are stripped during validation.
