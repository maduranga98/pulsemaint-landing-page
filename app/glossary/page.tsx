import type { Metadata } from "next";
import Link from "next/link";
import { Corners, Footer, Navbar, SectionLabel } from "../marketing-components";
import {
  GLOSSARY,
  GLOSSARY_PATH,
  GLOSSARY_SET_ID,
  GLOSSARY_TITLE,
  GLOSSARY_URL,
  glossaryLastUpdated,
  termLetter,
  termPath,
  termUrl,
} from "../glossary-data";
import { breadcrumbTrailJsonLd, jsonLdHtml, pageMetadata } from "../page-metadata";
import { SITE_NAME, SITE_URL } from "../site-data";

const TITLE = `Maintenance & CMMS Glossary: ${GLOSSARY.length} Terms | ${SITE_NAME}`;
const DESCRIPTION =
  "Plain definitions of the maintenance terms plant teams use: OEE, MTBF, MTTR, CMMS, EAM, preventive maintenance, downtime and more, each on its own page.";

// Trailing slash required: `trailingSlash: true` serves this at /glossary/
// and 301s the unslashed form.
export const metadata: Metadata = pageMetadata({ title: TITLE, description: DESCRIPTION, path: GLOSSARY_PATH });

const ORGANIZATION_ID = `${SITE_URL}/#organization`;
const ALPHABET = Array.from({ length: 26 }, (_, index) => String.fromCharCode(65 + index));

/**
 * DefinedTermSet is the schema type answer engines resolve definitional queries
 * against. Every term it lists is a DefinedTerm on its own page, which points
 * back here through `inDefinedTermSet`.
 */
const definedTermSetJsonLd = {
  "@context": "https://schema.org",
  "@type": "DefinedTermSet",
  "@id": GLOSSARY_SET_ID,
  name: GLOSSARY_TITLE,
  description: DESCRIPTION,
  url: GLOSSARY_URL,
  inLanguage: "en",
  dateModified: glossaryLastUpdated(),
  author: { "@id": ORGANIZATION_ID },
  publisher: { "@id": ORGANIZATION_ID },
  hasDefinedTerm: GLOSSARY.map((entry) => ({
    "@type": "DefinedTerm",
    "@id": `${termUrl(entry.slug)}#term`,
    name: entry.term,
    termCode: entry.slug,
    description: entry.shortDefinition,
    url: termUrl(entry.slug),
    inDefinedTermSet: { "@id": GLOSSARY_SET_ID },
  })),
};

/**
 * Before the glossary had a page per term, every definition lived at
 * /glossary/#<slug>. A server cannot redirect a fragment, so this sends a
 * visitor arriving on an old anchor to the term's own page. Without script the
 * `id` on each entry below still scrolls to it, so an old link never dead-ends.
 */
const legacyAnchorScript = `(function(){var h=location.hash.slice(1);if(h&&${JSON.stringify(
  GLOSSARY.map((entry) => entry.slug),
)}.indexOf(h)>-1){location.replace("${GLOSSARY_PATH}"+h+"/")}})();`;

export default function GlossaryPage() {
  const byLetter = ALPHABET.map((letter) => ({ letter, entries: GLOSSARY.filter((entry) => termLetter(entry) === letter) }));
  const filled = byLetter.filter((group) => group.entries.length > 0);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdHtml([definedTermSetJsonLd, breadcrumbTrailJsonLd([{ name: "Glossary", path: GLOSSARY_PATH }])])}
      />
      <script dangerouslySetInnerHTML={{ __html: legacyAnchorScript }} />
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
                {GLOSSARY.length} terms used on a plant floor. Each has its own page with a one-sentence definition, the formula
                where there is one, and the caveat that makes the definition useful in practice. Written for maintenance
                teams and plant managers comparing systems, not for a certification exam.
              </p>
            </div>
          </div>
        </section>

        <nav aria-label="Glossary A to Z" className="mx-auto max-w-7xl px-5 pb-12 sm:px-8">
          <div className="rounded-xl border border-white/8 bg-navy-800/40 p-5">
            <div className="mb-4 font-mono text-[11px] uppercase tracking-[0.18em] text-ink-mute">Jump to a letter</div>
            <ul className="flex flex-wrap gap-2">
              {byLetter.map(({ letter, entries }) => (
                <li key={letter}>
                  {entries.length > 0 ? (
                    <a
                      href={`#letter-${letter.toLowerCase()}`}
                      className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/12 font-mono text-[13px] text-ink-dim transition hover:border-pulse/50 hover:text-pulse"
                    >
                      {letter}
                    </a>
                  ) : (
                    <span
                      aria-hidden="true"
                      className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/5 font-mono text-[13px] text-ink-mute/50"
                    >
                      {letter}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </nav>

        {filled.map(({ letter, entries }) => (
          <section key={letter} id={`letter-${letter.toLowerCase()}`} className="mx-auto max-w-7xl scroll-mt-24 px-5 pb-14 sm:px-8">
            <h2 className="mb-6 border-b border-white/8 pb-3 font-sora text-2xl font-bold text-ink">{letter}</h2>
            <ul className="grid gap-4 lg:grid-cols-2">
              {entries.map((entry) => (
                <li
                  key={entry.slug}
                  id={entry.slug}
                  className="lift relative scroll-mt-24 rounded-xl border border-white/8 bg-navy-800/40 p-6 hover:border-pulse/30"
                >
                  <Corners />
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="font-sora text-[18px] font-bold text-ink">
                      <Link href={termPath(entry.slug)} className="transition hover:text-pulse">
                        {entry.term}
                      </Link>
                    </h3>
                    <span className="shrink-0 font-mono text-[10px] uppercase tracking-wider text-ink-mute">{entry.group}</span>
                  </div>
                  <p className="mt-2.5 text-[14.5px] leading-relaxed text-ink-dim">{entry.shortDefinition}</p>
                  <Link href={termPath(entry.slug)} className="mt-4 inline-block text-[13px] font-medium text-pulse">
                    Read the definition →
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ))}

        <section className="mx-auto max-w-7xl border-t border-white/8 px-5 py-16 sm:px-8">
          <SectionLabel>Put the terms to work</SectionLabel>
          <h2 className="mt-4 max-w-2xl font-sora text-[30px] font-bold leading-tight sm:text-[38px]">
            Firmicore calculates several of these <span className="text-pulse">from your own records.</span>
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
