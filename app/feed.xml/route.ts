import { posts } from "../blog-posts";
import { SITE_NAME, SITE_URL } from "../site-data";

/**
 * /feed.xml - RSS 2.0 for the blog.
 *
 * Feeds remain a first-class discovery path for aggregators and for the
 * retrieval crawlers that poll for new content rather than re-crawling a
 * sitemap, so a feed is cheaper to keep current than a fresh crawl budget.
 */
export const dynamic = "force-static";

/** Escapes the five XML entities. Post copy contains & and quotes. */
function xml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export function GET(): Response {
  // Newest first: a feed ordered by the source array is ordered by filename.
  const ordered = [...posts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  const lastBuild = ordered.length ? new Date(ordered[0].updated ?? ordered[0].date).toUTCString() : new Date(0).toUTCString();

  const items = ordered
    .map((post) => {
      const url = `${SITE_URL}/blog/${post.slug}/`;
      return [
        "    <item>",
        `      <title>${xml(post.title)}</title>`,
        `      <link>${url}</link>`,
        // Permalink guid: the URL is stable and is what a reader dedupes on.
        `      <guid isPermaLink="true">${url}</guid>`,
        `      <pubDate>${new Date(post.date).toUTCString()}</pubDate>`,
        `      <category>${xml(post.category)}</category>`,
        `      <description>${xml(post.metaDescription ?? post.excerpt)}</description>`,
        "    </item>",
      ].join("\n");
    })
    .join("\n");

  const body = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">',
    "  <channel>",
    `    <title>${xml(SITE_NAME)} blog</title>`,
    `    <link>${SITE_URL}/blog/</link>`,
    `    <description>CMMS, plant reliability, and factory maintenance articles from ${xml(SITE_NAME)}.</description>`,
    "    <language>en</language>",
    `    <lastBuildDate>${lastBuild}</lastBuildDate>`,
    `    <atom:link href="${SITE_URL}/feed.xml" rel="self" type="application/rss+xml" />`,
    items,
    "  </channel>",
    "</rss>",
    "",
  ].join("\n");

  return new Response(body, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
