import type { MetadataRoute } from "next";
import { posts } from "./blog-data";

export const dynamic = "force-static";

const BASE_URL = "https://firmicore.com";

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
    { url: url("/blog/"), lastModified: blogLastModified, changeFrequency: "weekly", priority: 0.8 },
  ];

  const postRoutes: MetadataRoute.Sitemap = posts.map((post) => ({
    url: url(`/blog/${post.slug}/`),
    lastModified: new Date(post.updated ?? post.date),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...postRoutes];
}
