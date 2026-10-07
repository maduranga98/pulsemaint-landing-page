/**
 * Internal link audit over the built export.
 *
 * Crawls ./out, lists every internal URL, and reports:
 *   - pages with fewer than MIN_INCOMING incoming internal links;
 *   - URLs in sitemap.xml that nothing links to (exit code 1).
 *
 * Links in the site chrome (the fixed nav and the footer) are ignored. They are
 * on every page, so counting them would make every URL look well linked and
 * hide exactly the orphans this exists to find. Self-links and links from the
 * same page count once, and a #fragment is dropped, so /#pricing is a link to /.
 *
 * Run after `next build`:  npm run check:links
 */
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join, relative } from "node:path";

const OUT = process.argv[2] ?? "out";
const HOST = "https://firmicore.com";
const MIN_INCOMING = 2;

function walk(dir: string): string[] {
  return readdirSync(dir).flatMap((entry) => {
    const path = join(dir, entry);
    return statSync(path).isDirectory() ? walk(path) : [path];
  });
}

/** out/blog/x/index.html -> /blog/x/ ; out/404.html is not a crawlable URL. */
function fileToUrl(file: string): string | null {
  const rel = relative(OUT, file).replace(/\\/g, "/");
  if (rel === "index.html") return "/";
  if (rel.endsWith("/index.html")) return `/${rel.slice(0, -"index.html".length)}`;
  return null;
}

/** Resolves an href found on `from` to a root-relative path, or null if external or not a page link. */
function normalise(href: string, from: string): string | null {
  if (/^(mailto:|tel:|javascript:|data:)/i.test(href)) return null;
  let url: URL;
  try {
    url = new URL(href, `${HOST}${from}`);
  } catch {
    return null;
  }
  if (url.origin !== HOST) return null;
  return url.pathname;
}

/** Error pages are built into the export but are not crawlable content. */
const NOT_CONTENT = new Set(["/_not-found/", "/404/"]);

const pages = new Map<string, string>();
for (const file of walk(OUT)) {
  const url = fileToUrl(file);
  if (url && !NOT_CONTENT.has(url) && file.endsWith(".html")) pages.set(url, readFileSync(file, "utf8"));
}

const incoming = new Map<string, Set<string>>();
for (const url of pages.keys()) incoming.set(url, new Set());

for (const [from, rawHtml] of pages) {
  // Drop site chrome before looking for links.
  const html = rawHtml.replace(/<header[^>]*nav-blur[\s\S]*?<\/header>/g, "").replace(/<footer[\s\S]*?<\/footer>/g, "");
  const hrefs = [...html.matchAll(/<(?:a|link)\s[^>]*?href="([^"]+)"/g)]
    .filter((match) => match[0].startsWith("<a") || /rel="alternate"/.test(match[0]))
    .map((match) => match[1]);
  for (const href of hrefs) {
    const target = normalise(href, from);
    if (!target || target === from) continue;
    if (!incoming.has(target)) incoming.set(target, new Set());
    incoming.get(target)!.add(from);
  }
}

const sitemapUrls = [...readFileSync(join(OUT, "sitemap.xml"), "utf8").matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) =>
  match[1].replace(HOST, ""),
);

const rows = [...incoming.entries()]
  .filter(([url]) => pages.has(url) || sitemapUrls.includes(url))
  .map(([url, from]) => ({ url, count: from.size }))
  .sort((a, b) => a.count - b.count || a.url.localeCompare(b.url));

console.log(`Internal URLs (${rows.length}), by incoming links from other pages, site chrome excluded:\n`);
for (const row of rows) console.log(`${String(row.count).padStart(4)}  ${row.url}`);

// Only HTML pages are judged on link count; llms.txt and friends are fetched, not browsed.
const weak = rows.filter((row) => pages.has(row.url) && row.count < MIN_INCOMING && row.url !== "/");
console.log(`\nPages with fewer than ${MIN_INCOMING} incoming internal links: ${weak.length}`);
for (const row of weak) console.log(`  ${row.count}  ${row.url}`);

const orphans = sitemapUrls.filter((url) => (incoming.get(url)?.size ?? 0) === 0 && url !== "/");
console.log(`\nSitemap URLs that nothing links to: ${orphans.length}`);
for (const url of orphans) console.log(`  ${url}`);

const missing = [...incoming.keys()].filter((url) => !pages.has(url) && !/\.[a-z0-9]{2,5}$/i.test(url));
if (missing.length) {
  console.log(`\nLinked internal URLs with no built page (broken links): ${missing.length}`);
  for (const url of missing) console.log(`  ${url}  <- ${[...incoming.get(url)!].join(", ")}`);
}

if (orphans.length || missing.length) process.exit(1);
