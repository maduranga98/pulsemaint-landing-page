import type { Metadata } from "next";
import { OG_IMAGE_ALT, OG_IMAGE_HEIGHT, OG_IMAGE_WIDTH, SITE_NAME, SITE_URL, ogImageUrl } from "./site-data";

/**
 * Metadata for a standalone marketing page.
 *
 * Each page used to restate the canonical, Open Graph and Twitter blocks by
 * hand. The reasons they look the way they do are the same everywhere:
 *  - `path` must carry its trailing slash: `trailingSlash: true` serves it
 *    there and 301s the unslashed form.
 *  - A child `openGraph` replaces the root layout's wholesale rather than
 *    merging into it, so the site-wide card is restated here.
 *  - `title.absolute` skips the "| Firmicore" template, because these titles
 *    already lead with the brand name.
 */
export function pageMetadata({
  title,
  description,
  path,
  ogCard = "home",
}: {
  title: string;
  description: string;
  path: string;
  /** Social card name served from /og/<name>.png. Defaults to the site-wide card. */
  ogCard?: string;
}): Metadata {
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: `${SITE_URL}${path}`,
      siteName: SITE_NAME,
      locale: "en_US",
      type: "website",
      images: [
        { url: ogImageUrl(ogCard), width: OG_IMAGE_WIDTH, height: OG_IMAGE_HEIGHT, alt: OG_IMAGE_ALT, type: "image/png" },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [{ url: ogImageUrl(ogCard), alt: OG_IMAGE_ALT }],
    },
  };
}

/** BreadcrumbList for a page one level below the homepage. */
export function breadcrumbJsonLd(name: string, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: SITE_NAME, item: `${SITE_URL}/` },
      { "@type": "ListItem", position: 2, name, item: `${SITE_URL}${path}` },
    ],
  };
}

/** BreadcrumbList for a page any depth below the homepage. `trail` is every crumb after Home, in order. */
export function breadcrumbTrailJsonLd(trail: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: SITE_NAME, item: `${SITE_URL}/` },
      ...trail.map((crumb, index) => ({
        "@type": "ListItem",
        position: index + 2,
        name: crumb.name,
        item: `${SITE_URL}${crumb.path}`,
      })),
    ],
  };
}

/** Serialises JSON-LD for a <script>, escaping "<" so copy can never close the tag. */
export function jsonLdHtml(data: unknown): { __html: string } {
  return { __html: JSON.stringify(data).replace(/</g, "\\u003c") };
}
