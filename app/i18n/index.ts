import { SITE_URL } from "../site-data";
import { ja } from "./ja";
import { ko } from "./ko";
import type { LocalizedHomeCopy } from "./types";

export const LOCALES: LocalizedHomeCopy[] = [ja, ko];

/**
 * hreflang cluster for the homepage and its translations. Every page in the
 * cluster must emit the same full set, itself included, or Google ignores the
 * annotations. x-default points at the English homepage.
 */
export function homeLanguageAlternates(): Record<string, string> {
  return {
    en: "/",
    ...Object.fromEntries(LOCALES.map((locale) => [locale.lang, locale.path])),
    "x-default": "/",
  };
}

/** Same cluster with absolute URLs, for the sitemap's xhtml:link entries. */
export function homeLanguageAlternatesAbsolute(): Record<string, string> {
  return Object.fromEntries(Object.entries(homeLanguageAlternates()).map(([lang, path]) => [lang, `${SITE_URL}${path}`]));
}

/** Switcher entries: English plus every locale, in that order. */
export const LANGUAGE_LINKS: { label: string; href: string; lang: string }[] = [
  { label: "English", href: "/", lang: "en" },
  ...LOCALES.map((locale) => ({ label: locale.nativeName, href: locale.path, lang: locale.lang })),
];

export type { LocalizedHomeCopy, LocaleCode } from "./types";
