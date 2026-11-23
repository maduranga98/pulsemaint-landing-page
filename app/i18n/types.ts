/**
 * Localized landing pages.
 *
 * Each non-English market gets one native-language landing page at /<lang>/,
 * linked to the English homepage with hreflang in both directions. The copy is
 * plain data so the sitemap and the page share one list of locales.
 *
 * Copy rules match the English site: no prices or limits typed into the copy
 * (they are read from PRICING_TIERS), no customer names, no claims the English
 * homepage does not already make, and no dashes used as punctuation.
 */
export type LocaleCode = "ja" | "ko";

export type LocalizedHomeCopy = {
  /** BCP 47 code used for `lang`, hreflang and JSON-LD `inLanguage`. */
  lang: LocaleCode;
  /** Open Graph locale, e.g. "ja_JP". */
  ogLocale: string;
  /** Root-relative path with its trailing slash. */
  path: string;
  /** Name of the language in that language, for the language switcher. */
  nativeName: string;
  /** `<title>`. */
  title: string;
  /** Meta description. */
  description: string;
  hero: { eyebrow: string; h1: string; h1Accent: string; tagline: string; lede: string; primaryCta: string; secondaryCta: string };
  /** Answer-first definition, the sentence an assistant should quote. */
  whatIs: { label: string; heading: string; body: string };
  problems: { label: string; heading: string; items: [string, string][] };
  triage: { label: string; heading: string; body: string; points: [string, string][] };
  /** One entry per MODULES slug, in the same order. */
  modules: { label: string; heading: string; items: Record<string, [string, string]> };
  roles: { label: string; heading: string; items: [string, string][] };
  pricing: {
    label: string;
    heading: string;
    note: string;
    perMonth: string;
    custom: string;
    contractLimit: string;
    /** Formats a machine count, e.g. (15) => "15台まで". */
    machines: (count: string) => string;
    cta: string;
  };
  industries: { label: string; heading: string; items: string[] };
  faq: { label: string; heading: string; items: { q: string; a: string }[] };
  cta: { heading: string; body: string; button: string; englishLink: string };
  languageLabel: string;
  breadcrumbName: string;
};
