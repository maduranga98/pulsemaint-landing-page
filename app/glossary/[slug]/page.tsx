import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  GLOSSARY,
  GLOSSARY_PATH,
  GLOSSARY_SET_ID,
  GLOSSARY_TITLE,
  GLOSSARY_URL,
  getTerm,
  termAlternateNames,
  termHeading,
  termPath,
  termTitle,
  termUrl,
} from "../../glossary-data";
import { resolveReading } from "../../glossary-links";
import { breadcrumbTrailJsonLd, jsonLdHtml, pageMetadata } from "../../page-metadata";
import { RichText } from "../../rich-text";
import { Corners, Footer, Navbar, SectionLabel, StatusPill } from "../../marketing-components";
import { SITE_NAME, SITE_URL } from "../../site-data";

type PageProps = {
  params: Promise<{ slug: string }>;
};

const ORGANIZATION_ID = `${SITE_URL}/#organization`;

export async function generateStaticParams() {
  return GLOSSARY.map((entry) => ({ slug: entry.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const entry = getTerm(slug);
  if (!entry) return {};

  return {
    // Trailing slash required: `trailingSlash: true` serves this route at
    // /glossary/<slug>/ and 301s the unslashed form.
    ...pageMetadata({ title: termTitle(entry), description: entry.metaDescription, path: termPath(slug) }),
    // The organization is the author and publisher of every glossary page.
    authors: [{ name: SITE_NAME, url: `${SITE_URL}/` }],
    publisher: SITE_NAME,
    robots: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large" },
    },
  };
}

function formatDate(iso: string): string {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-US", { timeZone: "UTC", year: "numeric", month: "long", day: "numeric" });
}

function FormulaCard({ formula }: { formula: NonNullable<ReturnType<typeof getTerm>>["formula"] }) {
  if (!formula) return null;
  return (
    <div className="relative my-10 rounded-xl border border-pulse/35 bg-pulse/5 p-6">
      <Corners />
      <div className="mb-3 font-mono text-[11px] uppercase tracking-[0.18em] text-pulse">{formula.label ?? "Formula"}</div>
      <p className="mb-0 font-sora text-xl font-semibold leading-snug text-ink sm:text-2xl">{formula.expression}</p>
      {formula.parts?.length ? (
        <dl className="mt-5 grid gap-3 border-t border-white/10 pt-5">
          {formula.parts.map((part) => (
            <div key={part.name}>
              <dt className="font-sora text-sm font-semibold text-ink">{part.name}</dt>
              <dd className="m-0 text-sm leading-relaxed text-ink-dim">{part.meaning}</dd>
            </div>
          ))}
        </dl>
      ) : null}
      {formula.note ? <p className="mb-0 mt-5 text-sm leading-relaxed text-ink-mute">{formula.note}</p> : null}
    </div>
  );
}

function ExampleCard({ example }: { example: NonNullable<ReturnType<typeof getTerm>>["example"] }) {
  if (!example) return null;
  return (
    <div className="my-10 rounded-xl border border-white/10 bg-navy-800/50 p-6">
      <div className="mb-3 flex flex-wrap items-center gap-3">
        <StatusPill tone="warn">Example</StatusPill>
        <span className="font-mono text-[11px] uppercase tracking-wider text-ink-mute">Hypothetical numbers</span>
      </div>
      <p className="mb-3 font-sora font-semibold text-ink">{example.title}</p>
      <ul className="mb-0 mt-0">
        {example.lines.map((line) => (
          <li key={line}>{line}</li>
        ))}
      </ul>
      <p className="mb-0 mt-4 font-sora text-lg font-semibold text-pulse">{example.result}</p>
    </div>
  );
}

export default async function GlossaryTermPage({ params }: PageProps) {
  const { slug } = await params;
  const entry = getTerm(slug);
  if (!entry) notFound();

  const url = termUrl(slug);
  const heading = termHeading(entry);
  const related = entry.relatedTerms.flatMap((relatedSlug) => getTerm(relatedSlug) ?? []);
  const reading = entry.relatedPosts.flatMap((item) => resolveReading(item) ?? []).slice(0, 3);
  const [first, ...rest] = entry.body;
  const alternateNames = termAlternateNames(entry);

  const jsonLd: Record<string, unknown>[] = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${url}#webpage`,
      url,
      name: termTitle(entry),
      description: entry.metaDescription,
      inLanguage: "en",
      dateModified: entry.updated,
      author: { "@id": ORGANIZATION_ID },
      publisher: { "@id": ORGANIZATION_ID },
      isPartOf: { "@id": GLOSSARY_SET_ID },
      mainEntity: { "@id": `${url}#term` },
    },
    {
      "@context": "https://schema.org",
      "@type": "DefinedTerm",
      "@id": `${url}#term`,
      name: entry.term,
      ...(alternateNames.length ? { alternateName: alternateNames } : {}),
      description: entry.shortDefinition,
      termCode: entry.slug,
      url,
      inDefinedTermSet: { "@type": "DefinedTermSet", "@id": GLOSSARY_SET_ID, name: GLOSSARY_TITLE, url: GLOSSARY_URL },
    },
    breadcrumbTrailJsonLd([
      { name: "Glossary", path: GLOSSARY_PATH },
      { name: entry.term, path: termPath(slug) },
    ]),
  ];

  if (entry.faq?.length) {
    jsonLd.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: entry.faq.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: { "@type": "Answer", text: item.a },
      })),
    });
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdHtml(jsonLd)} />
      <Navbar />
      <main>
        <header className="relative overflow-hidden pt-28 pb-10 sm:pt-32 sm:pb-12">
          <div className="bp-grid absolute inset-0 opacity-30" />
          <div className="absolute inset-0 bg-[radial-gradient(800px_500px_at_80%_-10%,rgba(0,194,255,0.18),transparent_60%)]" />
          <div className="relative mx-auto max-w-3xl px-5 sm:px-8">
            <nav aria-label="Breadcrumb" className="mb-8 flex flex-wrap items-center gap-2 font-mono text-[12px] text-ink-mute">
              <Link href="/" className="hover:text-pulse">{SITE_NAME}</Link>
              <span>/</span>
              <Link href={GLOSSARY_PATH} className="hover:text-pulse">Glossary</Link>
              <span>/</span>
              <span className="text-pulse">{entry.term}</span>
            </nav>
            <div className="mb-5 flex flex-wrap items-center gap-3">
              <SectionLabel>{entry.group}</SectionLabel>
              <span className="font-mono text-xs text-ink-mute">
                Updated <time dateTime={entry.updated}>{formatDate(entry.updated)}</time>
              </span>
            </div>
            <h1 className="font-sora text-[36px] font-bold leading-[1.05] sm:text-[52px]">{heading}</h1>
            <p
              id="definition"
              className="mt-6 border-l-2 border-pulse/50 pl-5 text-[19px] leading-[1.6] text-ink sm:text-[21px]"
            >
              {entry.shortDefinition}
            </p>
          </div>
        </header>

        <div className="mx-auto max-w-3xl px-5 pb-16 sm:px-8">
          <article className="article-prose">
            {first ? (
              <section>
                <h2>{first.heading}</h2>
                {first.paragraphs.map((text) => (
                  <p key={text}><RichText text={text} /></p>
                ))}
                {first.bullets?.length ? (
                  <ul>
                    {first.bullets.map((item) => (
                      <li key={item}><RichText text={item} /></li>
                    ))}
                  </ul>
                ) : null}
              </section>
            ) : null}

            <FormulaCard formula={entry.formula} />
            <ExampleCard example={entry.example} />

            {rest.map((section) => (
              <section key={section.heading}>
                <h2>{section.heading}</h2>
                {section.paragraphs.map((text) => (
                  <p key={text}><RichText text={text} /></p>
                ))}
                {section.bullets?.length ? (
                  <ul>
                    {section.bullets.map((item) => (
                      <li key={item}><RichText text={item} /></li>
                    ))}
                  </ul>
                ) : null}
              </section>
            ))}

            <section id="how-firmicore-relates">
              <h2>How Firmicore relates</h2>
              <p><RichText text={entry.firmicore} /></p>
            </section>

            {entry.faq?.length ? (
              <section id="faq">
                <h2>Frequently asked questions</h2>
                <div className="mt-6 flex flex-col gap-3">
                  {entry.faq.map((item) => (
                    <div key={item.q} className="rounded-xl border border-white/8 bg-navy-800/30 p-5">
                      <h3 className="mb-2 mt-0 font-sora text-base font-semibold text-ink">{item.q}</h3>
                      <p className="mb-0 text-sm leading-relaxed">{item.a}</p>
                    </div>
                  ))}
                </div>
              </section>
            ) : null}
          </article>
        </div>

        <section aria-labelledby="related-terms" className="mx-auto max-w-3xl border-t border-white/8 px-5 py-12 sm:px-8">
          <h2 id="related-terms" className="font-sora text-2xl font-semibold">Related terms</h2>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2">
            {related.map((item) => (
              <li key={item.slug}>
                <Link
                  href={termPath(item.slug)}
                  className="lift relative block h-full rounded-xl border border-white/8 bg-navy-800/40 p-4 hover:border-pulse/30"
                >
                  <span className="font-sora text-[15px] font-semibold text-ink">{item.term}</span>
                  <span className="mt-1.5 block text-[13px] leading-relaxed text-ink-dim">{item.shortDefinition}</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        {reading.length > 0 ? (
          <section aria-labelledby="related-reading" className="mx-auto max-w-3xl border-t border-white/8 px-5 py-12 sm:px-8">
            <h2 id="related-reading" className="font-sora text-2xl font-semibold">Related reading</h2>
            <ul className="mt-5 flex flex-col gap-2.5">
              {reading.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-[15px] font-medium text-pulse hover:underline">
                    {link.label} →
                  </Link>
                </li>
              ))}
            </ul>
            <p className="mb-0 mt-8 text-sm text-ink-dim">
              <Link href={GLOSSARY_PATH} className="text-pulse hover:underline">
                Browse all {GLOSSARY.length} glossary terms
              </Link>
            </p>
          </section>
        ) : null}
      </main>
      <Footer />
    </>
  );
}
