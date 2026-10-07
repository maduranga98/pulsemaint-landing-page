import { SITE_NAME, SITE_URL } from "./site-data";
import { GLOSSARY_GROUPS, type GlossaryTerm } from "./glossary-types";
import { terms } from "./glossary-terms";

export { GLOSSARY_GROUPS };
export type { GlossaryTerm };

/** Every term, A to Z by display name. Order is stable between builds. */
export const GLOSSARY: GlossaryTerm[] = [...terms].sort((a, b) => a.term.localeCompare(b.term, "en", { sensitivity: "base" }));

export const GLOSSARY_PATH = "/glossary/";
export const GLOSSARY_URL = `${SITE_URL}${GLOSSARY_PATH}`;
/** `@id` of the DefinedTermSet on the hub, referenced by every term's `inDefinedTermSet`. */
export const GLOSSARY_SET_ID = `${GLOSSARY_URL}#glossary`;
export const GLOSSARY_TITLE = "Maintenance and CMMS Glossary";

export function getTerm(slug: string): GlossaryTerm | undefined {
  return GLOSSARY.find((entry) => entry.slug === slug);
}

export const termPath = (slug: string): string => `${GLOSSARY_PATH}${slug}/`;
export const termUrl = (slug: string): string => `${SITE_URL}${termPath(slug)}`;

/** H1 text: "MTBF: Mean Time Between Failures", or just the term when there is no long form. */
export function termHeading(entry: GlossaryTerm): string {
  if (entry.heading) return entry.heading;
  return entry.fullName ? `${entry.term}: ${entry.fullName}` : entry.term;
}

/** Names other than the display term, for schema `alternateName`. */
export function termAlternateNames(entry: GlossaryTerm): string[] {
  return [entry.fullName, ...(entry.aliases ?? [])].filter((name): name is string => Boolean(name));
}

const TITLE_LIMIT = 60;

/**
 * `<title>`: "[Term]: Definition, Formula and Examples | Firmicore" where the
 * term has a formula, otherwise "[Term]: Definition and Examples | Firmicore".
 * Falls back to shorter forms until it fits in 60 characters.
 */
export function termTitle(entry: GlossaryTerm): string {
  if (entry.seoTitle) return entry.seoTitle;
  const candidates = entry.formula
    ? [
        `${entry.term}: Definition, Formula and Examples | ${SITE_NAME}`,
        `${entry.term}: Definition and Formula | ${SITE_NAME}`,
        `${entry.term}: Formula | ${SITE_NAME}`,
      ]
    : [`${entry.term}: Definition and Examples | ${SITE_NAME}`, `${entry.term}: Definition | ${SITE_NAME}`];
  return candidates.find((title) => title.length <= TITLE_LIMIT) ?? candidates[candidates.length - 1];
}

/** First letter used for the A to Z index. */
export function termLetter(entry: GlossaryTerm): string {
  return entry.term.charAt(0).toUpperCase();
}

/** Terms that list `postSlug` as related reading, for the "Related glossary terms" block on a post. */
export function termsRelatedToPost(postSlug: string): GlossaryTerm[] {
  return GLOSSARY.filter((entry) => entry.relatedPosts.includes(postSlug));
}

/** Newest `updated` across the glossary, used as the hub's lastmod. */
export function glossaryLastUpdated(): string {
  return GLOSSARY.reduce((latest, entry) => (entry.updated > latest ? entry.updated : latest), "0000-00-00");
}
