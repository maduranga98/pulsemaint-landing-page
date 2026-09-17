# Google Search Console indexing fix — firmicore.com

Runbook for clearing the Page Indexing issues reported for
`https://firmicore.com`. Every step below is a manual action in the Search
Console UI — follow them in order, top to bottom.

## Background

| GSC issue | URLs | Cause | Fix |
| --- | --- | --- | --- |
| Page with redirect | 3 | Domain/protocol canonicalisation from the Firebase custom-domain setup (`http://`, `www.`) → `https://firmicore.com/`. Healthy and expected. | Validate in GSC — no code change. |
| Page with redirect | 9 unslashed blog URLs | The stale crawl queue below, now actually crawled: Google fetched `/blog`, `/blog/cryotos-alternative`, … and got the correct 301 to the slashed form. Healthy and expected. | Validate in GSC — no code change. See [Unslashed blog URLs](#unslashed-blog-urls). |
| Discovered — currently not indexed | 18 | An old sitemap, submitted before `trailingSlash: true` was added, seeded Google's crawl queue with non-canonical URLs (`/blog`, `/blog/cryotos-alternative`, …). All show "Last crawled: N/A". | Resubmit the correct sitemap + request indexing on canonical URLs. |
| Social cards redirecting to nothing | 19 | Next's `opengraph-image.tsx` convention emits an extensionless card URL (`/blog/<slug>/opengraph-image`). Hosting appends a trailing slash to every extensionless path, so each card 301'd to a path with no file behind it. | **Fixed in code** — cards render at `/og/<slug>.png`. |

Code side: `firebase.json` declares `"trailingSlash": true`, so Firebase Hosting
is contractually guaranteed to 301-redirect `/blog` → `/blog/` rather than
relying on default behaviour, and `sitemap.xml` / `robots.txt` are served with a
5-minute `Cache-Control` so Google never re-fetches a stale copy from CDN cache.

That same rule is what broke the social cards, and why they moved off the
`opengraph-image` file convention. They now render from `app/og/[card]/route.tsx`
at `/og/<slug>.png` and `/og/home.png`, declared explicitly in each page's
`openGraph.images`. A child `openGraph` block replaces the root layout's rather
than merging into it, so every page that declares one restates the card.

Canonical URL form for this site is **with a trailing slash**. Always paste the
slashed form into GSC.

<a id="unslashed-blog-urls"></a>

### Unslashed blog URLs reported as "Page with redirect"

Nine URLs appear in this bucket:

```
/blog
/blog/how-to-report-a-machine-breakdown
/blog/guided-triage-for-shared-tablets
/blog/contractor-management-software-manufacturing
/blog/guided-operator-safety-triage
/blog/how-to-reduce-machine-downtime
/blog/cmms-pricing-per-machine-vs-per-user
/blog/cmms-for-regulated-manufacturing
/blog/cryotos-alternative
```

Each is the unslashed form of a page that is live and indexable at its slashed
URL. Hosting answers with a single 301 to the slashed form — the correct
response, and the reason GSC files these under "Page with redirect" rather than
under an error state. Nothing in the app emits them; they are leftovers from the
pre-`trailingSlash` sitemap, and they leave the report by recrawl, not by a
deploy. Work them with steps 2 and 3 below, then validate.

Don't try to make them stop redirecting. Serving both forms with a 200 splits
every page into two competing URLs, and dropping `trailingSlash` moves the
canonical form, putting all 20 currently-correct URLs into the redirect bucket
instead.

### The URL guard

`scripts/check-canonical-urls.mjs` runs as part of `npm run build` and fails the
build if `out/` contains any internal URL that is neither slashed nor a real file
with an extension — canonical tags, sitemap entries, `og:image`, JSON-LD and
llms.txt included. It covers both shapes behind the table above: an unslashed
page URL, and an extensionless asset URL.

Run it alone with `npm run check:urls` after a build.

---

## 1. Validate the redirect fix

1. Open **Search Console → Indexing → Pages** (Page indexing report).
2. Under "Why pages aren't indexed", click **Page with redirect**.
3. Confirm the three domain-canonicalisation URLs still resolve to
   `https://firmicore.com/`:
   - `http://www.firmicore.com/`
   - `https://www.firmicore.com/`
   - `http://firmicore.com/`
   (Optional spot check outside GSC: `curl -I http://firmicore.com/` should show
   a 301 with `Location: https://firmicore.com/`.)
4. Confirm each of the nine unslashed blog URLs is a single 301 to its slashed
   form and nothing else — one hop, no chain, no loop, landing on a 200:

   ```
   curl -sIL https://firmicore.com/blog/cryotos-alternative \
     | grep -iE '^(HTTP/|location:)'
   ```

   Expect exactly `HTTP/2 301`, `location: https://firmicore.com/blog/cryotos-alternative/`,
   then `HTTP/2 200`. Anything else — two hops, a `location` pointing at
   `.web.app`, or a 404 at the end — is a real fault; stop and diagnose it rather
   than validating.
5. Click **Validate Fix**.
6. Validation runs for up to ~2 weeks. Nothing further to do here — these
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
   stay listed with the 3 domain-canonicalisation URLs — which is harmless. The
   nine unslashed blog URLs should drop off as Google recrawls and settles on
   the slashed form it already has in the sitemap.
4. Spot-check one social card in a validator (for example
   [opengraph.xyz](https://www.opengraph.xyz/)) on
   `https://firmicore.com/blog/cryotos-alternative/`. The card should render at
   1200×630 from `https://firmicore.com/og/cryotos-alternative.png`. Facebook
   and LinkedIn cache aggressively, so re-scrape once in their own debuggers if
   an old card persists.
5. **Escalate if a URL comes back with a different status.** These would be real
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
- Don't add an `opengraph-image.tsx` / `twitter-image.tsx` file anywhere in
  `app/`. The convention's URL has no file extension, which is exactly the shape
  Hosting redirects. Add a card to `app/og/[card]/route.tsx` instead.
- Don't add middleware or `redirects()` in `next.config.ts` to try to influence
  indexing. `output: "export"` produces static files; the redirect already
  happens at the hosting layer, and GSC's queue is cleared by recrawling, not by
  app code.
- Don't resubmit the sitemap repeatedly. Once per change is enough; extra
  submissions don't speed up crawling.
