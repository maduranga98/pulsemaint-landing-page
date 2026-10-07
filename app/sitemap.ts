import type { MetadataRoute } from "next";
import { posts } from "./blog-data";
import { GLOSSARY, glossaryLastUpdated, termUrl } from "./glossary-data";
import { PILLAR_PAGES } from "./pillar-pages";
import { FEATURES_PAGE_UPDATED, PRICING_PAGE_UPDATED, SITE_URL as BASE_URL } from "./site-data";

export const dynamic = "force-static";

/**
 * `trailingSlash: true` in next.config.ts means every HTML route is served at a
 * slashed URL and Next redirects the unslashed form. Sitemap entries must match
 * the canonical exactly, or every URL Google fetches is a 301.
 */
function url(path: string): string {
  return `${BASE_URL}${path}`;
}

/** Newest post date, used as the lastmod for the pages that list posts. */
function latestPostDate(): Date {
  return posts.reduce((latest, post) => {
    const current = new Date(post.updated ?? post.date);
    return current > latest ? current : latest;
  }, new Date(0));
}

export default function sitemap(): MetadataRoute.Sitemap {
  const blogLastModified = latestPostDate();

  const staticRoutes: MetadataRoute.Sitemap = [
    // No lastModified on the homepage: `new Date()` would claim a fresh edit on
    // every deploy, and there is no build-time signal for when it actually changed.
    { url: url("/"), changeFrequency: "weekly", priority: 1 },
    { url: url("/features/"), lastModified: new Date(FEATURES_PAGE_UPDATED), changeFrequency: "monthly", priority: 0.9 },
    { url: url("/pricing/"), lastModified: new Date(PRICING_PAGE_UPDATED), changeFrequency: "monthly", priority: 0.9 },
    // The three pillar pages sit just under pricing and features: they are the
    // head-term landing pages, so they outrank any individual post.
    ...PILLAR_PAGES.map((pillar) => ({
      url: url(pillar.path),
      lastModified: new Date(pillar.updated),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),
    { url: url("/blog/"), lastModified: blogLastModified, changeFrequency: "weekly", priority: 0.8 },
    // The hub's lastmod is the newest `updated` on any term, a hand-maintained
    // date, so it moves only when a definition does.
    { url: url("/glossary/"), lastModified: new Date(glossaryLastUpdated()), changeFrequency: "monthly", priority: 0.7 },
    // The llms.txt pair is regenerated from `posts` on every build, so it is
    // as fresh as the newest article. Listing it here is the second discovery
    // path after the <link rel="alternate"> tags in the document head.
    { url: url("/llms.txt"), lastModified: blogLastModified, changeFrequency: "weekly", priority: 0.5 },
    { url: url("/llms-full.txt"), lastModified: blogLastModified, changeFrequency: "weekly", priority: 0.5 },
  ];

  const postRoutes: MetadataRoute.Sitemap = posts.map((post) => ({
    url: url(`/blog/${post.slug}/`),
    lastModified: new Date(post.updated ?? post.date),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const glossaryRoutes: MetadataRoute.Sitemap = GLOSSARY.map((entry) => ({
    url: termUrl(entry.slug),
    lastModified: new Date(entry.updated),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...postRoutes, ...glossaryRoutes];
}
