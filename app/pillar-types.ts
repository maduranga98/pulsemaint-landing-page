import type { Block } from "./blog-data";

/**
 * Pillar pages reuse the blog's block vocabulary (paragraphs, lists, tables,
 * steps, callouts) and add two of their own: an H3 and an inline diagram.
 * Copy stays plain data so server files such as the sitemap and llms.txt can
 * read it without crossing a client boundary.
 *
 * Body copy rules: US spelling (the one exception is the single "computerised"
 * mention on /cmms-software/), no statistics or benchmarks, Firmicore claims
 * limited to what the site already says, no dashes used as punctuation.
 * `npm run check:pillars` enforces the mechanical ones.
 */
export type PillarBlock =
  | Block
  | { type: "h3"; text: string }
  | { type: "diagram"; name: "work-order-lifecycle"; caption: string };

export type PillarSection = {
  id: string;
  heading: string;
  blocks: PillarBlock[];
};

export type PillarPageData = {
  /** Route segment, also the OG card name. */
  slug: string;
  /** Root-relative path with its trailing slash. */
  path: string;
  /** Short label for the footer and breadcrumb. */
  label: string;
  /** `<title>`, 60 characters or fewer. */
  title: string;
  /** Meta description, 155 characters or fewer. */
  description: string;
  /** H1 lead text, followed by `h1Accent` in the brand accent color. */
  h1: string;
  h1Accent: string;
  /** One sentence value statement under the H1. */
  lede: string;
  /** ISO dates, hand-maintained. Never `new Date()`. */
  published: string;
  updated: string;
  /** 40 to 60 words, rendered directly under the first H2. */
  answer: string;
  /** The "How Firmicore handles this" section must carry the id `how-firmicore-handles-this`. */
  sections: PillarSection[];
  /** 5 to 6 buyer questions. Rendered visibly and mirrored in FAQPage JSON-LD. */
  faq: { q: string; a: string }[];
  /** Emit SoftwareApplication with one Offer per pricing tier. Only /cmms-software/ does. */
  includeSoftwareSchema?: boolean;
  /** "Keep reading" links under the article: other pillars, posts and glossary terms. */
  keepReading: { label: string; href: string }[];
  ctaHeading: string;
  ctaBody: string;
};
