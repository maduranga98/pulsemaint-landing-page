import type { Metadata } from "next";
import Link from "next/link";
import { Corners, Footer, Navbar, SectionLabel } from "../marketing-components";
import { GLOSSARY, GLOSSARY_GROUPS, SITE_NAME, SITE_URL } from "../site-data";

const TITLE = "Maintenance & CMMS Glossary";
const DESCRIPTION =
  "Plain definitions of the maintenance terms plant teams actually use: CMMS, MTTR, MTBF, OEE, PM compliance, permit to work, backlog, and more.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  // Trailing slash required: `trailingSlash: true` serves this at /glossary/
  // and 301s the unslashed form.
  alternates: { canonical: "/glossary/" },
  openGraph: {
    title: `${TITLE} | ${SITE_NAME}`,
    description: DESCRIPTION,
    url: `${SITE_URL}/glossary/`,
    siteName: SITE_NAME,
    locale: "en_US",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: `${SITE_NAME} maintenance glossary` }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${TITLE} | ${SITE_NAME}`,
    description: DESCRIPTION,
    images: ["/og-image.png"],
  },
};

const PAGE_URL = `${SITE_URL}/glossary/`;

/**
 * DefinedTermSet is the schema type answer engines resolve definitional queries
 * against. Each term also gets a stable #slug anchor so a citation can point at
 * the single definition rather than at the page.
 */
const definedTermSetJsonLd = {
  "@context": "https://schema.org",
  "@type": "DefinedTermSet",
  "@id": `${PAGE_URL}#glossary`,
  name: `${SITE_NAME} maintenance and CMMS glossary`,
  description: DESCRIPTION,
  url: PAGE_URL,
  inLanguage: "en",
  publisher: { "@id": `${SITE_URL}/#organization` },
  hasDefinedTerm: GLOSSARY.map((entry) => ({
    "@type": "DefinedTerm",
    "@id": `${PAGE_URL}#${entry.slug}`,
    name: entry.term,
    termCode: entry.slug,
    description: entry.detail ? `${entry.definition} ${entry.detail}` : entry.definition,
    url: `${PAGE_URL}#${entry.slug}`,
    inDefinedTermSet: { "@id": `${PAGE_URL}#glossary` },
  })),
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: SITE_NAME, item: `${SITE_URL}/` },
    { "@type": "ListItem", position: 2, name: TITLE, item: PAGE_URL },
  ],
};

export default function GlossaryPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([definedTermSetJsonLd, breadcrumbJsonLd]).replace(/</g, "\\u003c"),
        }}
      />
      <Navbar />
      <main>
        <section className="relative overflow-hidden pt-28 pb-12 sm:pt-32 sm:pb-16">
          <div className="bp-grid absolute inset-0 opacity-40" />
          <div className="absolute inset-0 bg-[radial-gradient(800px_500px_at_85%_-10%,rgba(0,194,255,0.18),transparent_60%)]" />
          <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
            <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-2 font-mono text-[12px] text-ink-mute">
              <Link href="/" className="hover:text-pulse">{SITE_NAME}</Link>
              <span>/</span>
              <span className="text-pulse">Glossary</span>
            </nav>
            <div className="max-w-3xl">
              <SectionLabel>Reference</SectionLabel>
              <h1 className="mt-5 font-sora text-[42px] font-bold leading-[1.04] sm:text-[58px]">
                Maintenance &amp; CMMS <span className="text-pulse">glossary.</span>
              </h1>
              <p className="mt-5 text-[17px] leading-relaxed text-ink-dim">
                {GLOSSARY.length} terms used on a plant floor, each defined in one sentence, with the caveat that makes the
                definition useful in practice. Written for maintenance teams comparing systems, not for a certification exam.
              </p>
            </div>
          </div>
        </section>

        <nav aria-label="Glossary terms" className="mx-auto max-w-7xl px-5 pb-12 sm:px-8">
          <div className="rounded-xl border border-white/8 bg-navy-800/40 p-5">
            <div className="mb-4 font-mono text-[11px] uppercase tracking-[0.18em] text-ink-mute">Jump to a term</div>
            <ul className="flex flex-wrap gap-2">
              {GLOSSARY.map((entry) => (
                <li key={entry.slug}>
                  <a
                    href={`#${entry.slug}`}
                    className="inline-block rounded-full border border-white/12 px-3 py-1.5 text-[13px] text-ink-dim transition hover:border-pulse/50 hover:text-pulse"
                  >
                    {entry.term}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        {GLOSSARY_GROUPS.map((group) => {
          const entries = GLOSSARY.filter((entry) => entry.group === group);
          if (entries.length === 0) return null;

          return (
            <section key={group} className="mx-auto max-w-7xl px-5 pb-16 sm:px-8">
              <h2 className="mb-6 font-sora text-2xl font-bold text-ink">{group}</h2>
              <div className="grid gap-4 lg:grid-cols-2">
                {entries.map((entry) => (
                  <article
                    key={entry.slug}
                    id={entry.slug}
                    className="lift relative scroll-mt-24 rounded-xl border border-white/8 bg-navy-800/40 p-6 hover:border-pulse/30"
                  >
                    <Corners />
                    <h3 className="font-sora text-[18px] font-bold text-ink">{entry.term}</h3>
                    <p className="mt-2.5 text-[14.5px] leading-relaxed text-ink-dim">{entry.definition}</p>
                    {entry.detail ? (
                      <p className="mt-3 border-l border-pulse/30 pl-3 text-[13.5px] leading-relaxed text-ink-mute">
                        {entry.detail}
                      </p>
                    ) : null}
                    {entry.readMore ? (
                      <Link href={entry.readMore.href} className="mt-4 inline-block text-[13px] font-medium text-pulse">
                        {entry.readMore.label} →
                      </Link>
                    ) : null}
                  </article>
                ))}
              </div>
            </section>
          );
        })}

        <section className="mx-auto max-w-7xl border-t border-white/8 px-5 py-16 sm:px-8">
          <SectionLabel>Put the terms to work</SectionLabel>
          <h2 className="mt-4 max-w-2xl font-sora text-[30px] font-bold leading-tight sm:text-[38px]">
            Firmicore measures every one of these <span className="text-pulse">from day one.</span>
          </h2>
          <p className="mt-4 max-w-2xl leading-relaxed text-ink-dim">
            MTTR, PM compliance, machine health, and MOE are computed from the work your team already records, so the
            numbers come from the workflow rather than from a monthly spreadsheet exercise.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/#cta-final" className="btn-glow rounded-lg bg-power px-5 py-3 font-medium text-white">
              Book a demo
            </Link>
            <Link href="/blog/" className="rounded-lg border border-white/15 px-5 py-3 font-medium text-ink transition hover:border-pulse/50 hover:text-pulse">
              Read the guides
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
