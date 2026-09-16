export type Block =
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "callout"; label?: string; text: string }
  | { type: "stats"; items: [string, string][] }
  | { type: "table"; caption?: string; headers: string[]; rows: string[][] }
  | { type: "steps"; items: { title: string; text: string }[] }
  | { type: "bars"; caption?: string; note?: string; items: { label: string; value: number; display: string }[] }
  | { type: "faq"; items: { q: string; a: string }[] };

export type Section = {
  id: string;
  heading: string;
  blocks: Block[];
};

export type BlogPost = {
  title: string;
  /** Short title for <title>/OG. Keep under ~50 chars so the SERP does not truncate it. */
  seoTitle?: string;
  slug: string;
  category: string;
  read: string;
  date: string;
  /** Set when a post is materially revised, so schema can emit a real dateModified. */
  updated?: string;
  author: string;
  role: string;
  excerpt: string;
  /** Meta description. Keep under 160 chars; deck/excerpt are too long for the SERP. */
  metaDescription?: string;
  /** Long-form deck shown under the H1. */
  deck?: string;
  /** Caption for the hero figure. */
  figure?: string;
  /** Answer-first summary box rendered above the article body. */
  takeaways?: string[];
  /** Paragraphs rendered before the first H2. */
  intro?: string[];
  sections?: Section[];
  /** Slugs of related posts shown in "Keep reading". */
  related?: string[];
  /**
   * External sources backing the claims and figures in the post.
   *
   * Rendered as a visible "Sources" list AND emitted as schema.org `citation`.
   * An unsourced statistic is not quotable: answer engines weight a claim by
   * whether it can be traced, so a `stats` block with no entry here is a
   * citation the article will not earn.
   */
  sources?: { title: string; url: string; publisher?: string; date?: string }[];
};

export { posts } from "./blog-posts";
