#!/usr/bin/env node
/**
 * Fails the build if the export emits an internal URL that Hosting would
 * redirect.
 *
 * `next.config.ts` sets `trailingSlash: true` and `firebase.json` mirrors it, so
 * Hosting 301s every path that has neither a trailing slash nor a file
 * extension. Any such URL in a canonical tag, a sitemap entry, og:image, JSON-LD
 * or llms.txt points a crawler at a redirect instead of at the page, which is
 * how the site ended up with "page with redirect" rows in Search Console.
 *
 * Run after `next build`; reads ./out.
 */
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";

const OUT = "out";
const HOST = "https://firmicore.com";
const SCANNED = [".html", ".xml", ".txt"];

/** URLs that are prose rather than links, and so are not crawled as URLs. */
const IGNORED = new Set([`${HOST}/.`]);

function walk(dir) {
  return readdirSync(dir).flatMap((entry) => {
    const path = join(dir, entry);
    return statSync(path).isDirectory() ? walk(path) : [path];
  });
}

/** A path is canonical if it ends in a slash or names a file with an extension. */
function isCanonical(url) {
  const path = url.slice(HOST.length).split(/[?#]/)[0];
  return path.endsWith("/") || /\.[a-z0-9]{2,5}$/i.test(path);
}

const offenders = new Map();

for (const file of walk(OUT)) {
  if (!SCANNED.some((ext) => file.endsWith(ext))) continue;
  const matches = readFileSync(file, "utf8").match(/https:\/\/firmicore\.com[^"'\s<)\\]*/g) ?? [];
  for (const url of matches) {
    if (IGNORED.has(url) || isCanonical(url)) continue;
    if (!offenders.has(url)) offenders.set(url, new Set());
    offenders.get(url).add(file);
  }
}

if (offenders.size > 0) {
  console.error("Non-canonical internal URLs found in the export.\n");
  console.error("Hosting redirects these; emit the trailing-slash form instead.\n");
  for (const [url, files] of offenders) {
    console.error(`  ${url}`);
    for (const file of [...files].slice(0, 3)) console.error(`      ${file}`);
  }
  process.exit(1);
}

console.log("All internal URLs in ./out are canonical (trailing slash or file extension).");
