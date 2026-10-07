export const GLOSSARY_GROUPS = ["Systems", "Strategy", "Metrics", "Workflow", "Safety"] as const;

export type GlossaryGroup = (typeof GLOSSARY_GROUPS)[number];

/** One H2 on a term page. Inline `[text](/internal/path/)` links are rendered by RichText. */
export type GlossarySection = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
};

export type GlossaryFormula = {
  /** Card label, e.g. "Formula". */
  label?: string;
  expression: string;
  /** Each factor of the formula, defined. */
  parts?: { name: string; meaning: string }[];
  note?: string;
};

/** A worked example. Always rendered under an "Example" label: the numbers are hypothetical. */
export type GlossaryExample = {
  title: string;
  lines: string[];
  result: string;
};

/**
 * One glossary term. Each term is statically generated at /glossary/<slug>/.
 *
 * Body copy rules: US spelling, no statistics or benchmarks, formulas and
 * definitions only, and Firmicore claims limited to what the site already says.
 * `npm run check:glossary` enforces the mechanical ones.
 */
export type GlossaryTerm = {
  slug: string;
  /** Display name and the keyword the page targets, e.g. "MTBF". */
  term: string;
  /** Long form of an acronym. Rendered in the H1 and emitted as `alternateName`. */
  fullName?: string;
  /** Other names for the same thing, emitted as `alternateName`. */
  aliases?: string[];
  /** Overrides the H1, which is `Term: Full name` by default. */
  heading?: string;
  /** Overrides the generated `<title>`. Must still be 60 characters or fewer. */
  seoTitle?: string;
  /** 155 characters or fewer. */
  metaDescription: string;
  group: GlossaryGroup;
  /** One sentence, under 30 words, starting with the term. The snippet-ready answer. */
  shortDefinition: string;
  /**
   * Sections in render order. The first is the plain-language explanation and
   * the second is always "Why it matters in maintenance". The formula and the
   * example are inserted after the first section.
   */
  body: GlossarySection[];
  formula?: GlossaryFormula;
  example?: GlossaryExample;
  /** "How Firmicore relates": 2 to 3 sentences, limited to claims the site already makes. */
  firmicore: string;
  /** Slugs of other terms, 3 to 5. */
  relatedTerms: string[];
  /** Blog slugs, or a pillar path such as "/cmms-software/" (rendered only once that page exists). */
  relatedPosts: string[];
  faq?: { q: string; a: string }[];
  /** ISO date (YYYY-MM-DD) of the last substantive edit. Hand-maintained, never `new Date()`. */
  updated: string;
  /**
   * Phrases the blog auto-linker matches to this term. Defaults to `[term]`.
   * An all-caps phrase matches case-sensitively; anything else, case-insensitively.
   */
  autoLink?: string[];
};
