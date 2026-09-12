# Google Search Console indexing fix — firmicore.com

Runbook for clearing the two Page Indexing issues currently reported for
`https://firmicore.com`. Every step below is a manual action in the Search
Console UI — follow them in order, top to bottom.

## Background

| GSC issue | URLs | Cause | Fix |
| --- | --- | --- | --- |
| Page with redirect | 3 | Domain/protocol canonicalisation from the Firebase custom-domain setup (`http://`, `www.`) → `https://firmicore.com/`. Healthy and expected. | Validate in GSC — no code change. |
| Discovered — currently not indexed | 18 | An old sitemap, submitted before `trailingSlash: true` was added, seeded Google's crawl queue with non-canonical URLs (`/blog`, `/blog/cryotos-alternative`, …). All show "Last crawled: N/A". | Resubmit the correct sitemap + request indexing on canonical URLs. |

Code side (already shipped in this PR): `firebase.json` now declares
`"trailingSlash": true`, so Firebase Hosting is contractually guaranteed to
301-redirect `/blog` → `/blog/` rather than relying on default behaviour, and
`sitemap.xml` / `robots.txt` are served with a 5-minute `Cache-Control` so
Google never re-fetches a stale copy from CDN cache.

Canonical URL form for this site is **with a trailing slash**. Always paste the
slashed form into GSC.

---

## 1. Validate the redirect fix (3 URLs)

1. Open **Search Console → Indexing → Pages** (Page indexing report).
2. Under "Why pages aren't indexed", click **Page with redirect**.
3. Confirm the three listed URLs still resolve to `https://firmicore.com/`:
   - `http://www.firmicore.com/`
   - `https://www.firmicore.com/`
   - `http://firmicore.com/`
   (Optional spot check outside GSC: `curl -I http://firmicore.com/` should show
   a 301 with `Location: https://firmicore.com/`.)
4. Click **Validate Fix**.
5. Validation runs for up to ~2 weeks. Nothing further to do here — these
   redirects are correct and intentional.

## 2. Resubmit the sitemap

1. Open **Search Console → Indexing → Sitemaps**.
2. If an entry for `sitemap.xml` already exists, open it and **Remove sitemap**
   (this clears the stale submission record; it does not remove the file).
3. In "Add a new sitemap", enter `sitemap.xml` so the full URL reads
   `https://firmicore.com/sitemap.xml`, then **Submit**.
4. Refresh after a few minutes and confirm:
   - Status: **Success**
   - Discovered pages: **20** — home, blog listing, glossary, and 17 posts
   - Click through to confirm the URLs listed carry trailing slashes.
5. If the count is wrong or URLs appear without trailing slashes, stop and
   re-check the deployed `https://firmicore.com/sitemap.xml` in a browser
   before continuing.

## 3. Request indexing on priority pages

GSC caps manual indexing requests per property per day, so work through this
list in order and spread it across days if you hit the cap.

1. Open **Search Console → URL Inspection** (top search bar).
2. Paste one canonical URL, press Enter, wait for the fetch to finish, then
   click **Request Indexing**.
3. Repeat for each URL below, in this order:

   - [ ] `https://firmicore.com/blog/`
   - [ ] `https://firmicore.com/blog/what-is-a-cmms/`
   - [ ] `https://firmicore.com/blog/cmms-pricing-per-machine-vs-per-user/`
   - [ ] `https://firmicore.com/blog/cryotos-alternative/`
   - [ ] `https://firmicore.com/blog/maintainx-alternative/`
   - [ ] `https://firmicore.com/blog/sap-plant-maintenance-alternative/`

4. Once the daily quota resets, do the remaining 12 posts and the glossary:

   - [ ] `https://firmicore.com/blog/best-cmms-for-small-manufacturers/`
   - [ ] `https://firmicore.com/blog/cmms-for-regulated-manufacturing/`
   - [ ] `https://firmicore.com/blog/contractor-management-software-manufacturing/`
   - [ ] `https://firmicore.com/blog/guided-operator-safety-triage/`
   - [ ] `https://firmicore.com/blog/guided-triage-for-shared-tablets/`
   - [ ] `https://firmicore.com/blog/how-to-reduce-machine-downtime/`
   - [ ] `https://firmicore.com/blog/how-to-report-a-machine-breakdown/`
   - [ ] `https://firmicore.com/blog/the-real-cost-of-unplanned-downtime/`
   - [ ] `https://firmicore.com/blog/what-is-mttr/`
   - [ ] `https://firmicore.com/blog/what-is-preventive-maintenance/`
   - [ ] `https://firmicore.com/blog/why-qr-reporting-beats-paper-logs/`
   - [ ] `https://firmicore.com/blog/work-order-software/`
   - [ ] `https://firmicore.com/glossary/`

   Do **not** paste the non-slash form (`https://firmicore.com/blog`) — URL
   Inspection will report it as a redirect, which is correct but wastes a
   request.

## 4. Re-check in 1–2 weeks

1. Open **Search Console → Indexing → Pages** again.
2. Expect the **Discovered — currently not indexed** count to fall toward 0 as
   Google recrawls and follows the 301s to the canonical slashed URLs.
3. Expect the **Page with redirect** issue to move to "Validation passed", or to
   stay listed with the 3 domain-canonicalisation URLs — which is harmless.
4. **Escalate if a URL comes back with a different status.** These would be real
   problems, not stale-queue leftovers, and need separate diagnosis:
   - **Crawled — currently not indexed** → Google fetched the page and chose not
     to index it. Usually a content-quality or thin-content signal.
   - **Excluded by 'noindex' tag** → a real meta-robots regression in the app.
   - **Alternate page with proper canonical tag** on a URL that should be
     canonical → an `alternates.canonical` mismatch.
   - **Not found (404)** → a slug was renamed or removed without a redirect.

   Note which URLs and which status, and raise it as a separate issue.

---

## What not to do

- Don't strip trailing slashes anywhere — `next.config.ts`, `app/sitemap.ts`,
  every `alternates.canonical`, and every internal `<Link href>` already agree on
  the slashed form. Changing one of them breaks the agreement.
- Don't add middleware or `redirects()` in `next.config.ts` to try to influence
  indexing. `output: "export"` produces static files; the redirect already
  happens at the hosting layer, and GSC's queue is cleared by recrawling, not by
  app code.
- Don't resubmit the sitemap repeatedly. Once per change is enough; extra
  submissions don't speed up crawling.
