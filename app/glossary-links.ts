import { existsSync } from "node:fs";
import { join } from "node:path";
import { posts } from "./blog-posts";

/**
 * Pillar pages that glossary terms point at.
 *
 * They are built separately from the glossary, so a link is only emitted once
 * the route exists in the app directory. Add the page and the link appears on
 * the next build; until then the term page simply shows one fewer reading link
 * and no broken URL ships.
 */
const PILLARS: { path: string; label: string }[] = [
  { path: "/cmms-software/", label: "CMMS software" },
  { path: "/maintenance-management-software/", label: "Maintenance management software" },
  { path: "/work-order-software/", label: "Work order software" },
];

export type ReadingLink = { label: string; href: string };

function pillarExists(path: string): boolean {
  const segments = path.split("/").filter(Boolean);
  const dir = join(process.cwd(), "app", ...segments);
  return ["page.tsx", "page.ts", "page.jsx", "page.js", "page.mdx"].some((file) => existsSync(join(dir, file)));
}

/**
 * Turns a `relatedPosts` entry into a link. A value starting with "/" is a
 * pillar path; anything else is a blog slug. Returns null for a pillar that has
 * not been built yet, and for a blog slug that does not exist.
 */
export function resolveReading(entry: string): ReadingLink | null {
  if (entry.startsWith("/")) {
    const pillar = PILLARS.find((item) => item.path === entry);
    return pillar && pillarExists(pillar.path) ? { label: pillar.label, href: pillar.path } : null;
  }
  const post = posts.find((item) => item.slug === entry);
  return post ? { label: post.title, href: `/blog/${post.slug}/` } : null;
}
