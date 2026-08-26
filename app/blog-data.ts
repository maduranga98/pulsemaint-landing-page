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
  slug: string;
  category: string;
  read: string;
  date: string;
  author: string;
  role: string;
  excerpt: string;
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
};

export { posts } from "./blog-posts";
