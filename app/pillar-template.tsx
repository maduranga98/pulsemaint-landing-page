import type { Metadata } from "next";
import Link from "next/link";
import { ArticleBlock } from "./blog/[slug]/article-blocks";
import { Corners, Footer, Navbar, SectionLabel } from "./marketing-components";
import { breadcrumbJsonLd, jsonLdHtml, pageMetadata } from "./page-metadata";
import type { PillarBlock, PillarPageData } from "./pillar-types";
import { PILLAR_PAGES } from "./pillar-pages";
import { pricingOffers } from "./pricing-data";
import { RichText } from "./rich-text";
import { ONE_LINER, SITE_NAME, SITE_URL, ogImageUrl, OG_IMAGE_HEIGHT, OG_IMAGE_WIDTH } from "./site-data";

const ORGANIZATION = { "@type": "Organization", "@id": `${SITE_URL}/#organization`, name: SITE_NAME, url: `${SITE_URL}/` };

/** Same metadata helper as every other standalone page, plus the page's own social card. */
export function pillarMetadata(page: PillarPageData): Metadata {
  return pageMetadata({ title: page.title, description: page.description, path: page.path, ogCard: page.slug });
}

function jsonLdFor(page: PillarPageData) {
  const pageUrl = `${SITE_URL}${page.path}`;
  const nodes: Record<string, unknown>[] = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${pageUrl}#webpage`,
      url: pageUrl,
      name: page.title,
      description: page.description,
      isPartOf: { "@id": `${SITE_URL}/#website` },
      about: { "@id": `${SITE_URL}/#software` },
      author: ORGANIZATION,
      publisher: ORGANIZATION,
      datePublished: page.published,
      dateModified: page.updated,
      inLanguage: "en",
      primaryImageOfPage: { "@type": "ImageObject", url: ogImageUrl(page.slug), width: OG_IMAGE_WIDTH, height: OG_IMAGE_HEIGHT },
      // The answer-first paragraph is the passage worth reading aloud or quoting.
      speakable: { "@type": "SpeakableSpecification", cssSelector: ["#answer"] },
      hasPart: page.sections.map((section) => ({
        "@type": "WebPageElement",
        "@id": `${pageUrl}#${section.id}`,
        name: section.heading,
        url: `${pageUrl}#${section.id}`,
      })),
    },
    breadcrumbJsonLd(page.label, page.path),
  ];

  if (page.includeSoftwareSchema) {
    // Same entity and Offer generator as /pricing/, so prices can only come from PRICING_TIERS.
    nodes.push({
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "@id": `${SITE_URL}/#software`,
      name: SITE_NAME,
      url: `${SITE_URL}/`,
      applicationCategory: "BusinessApplication",
      applicationSubCategory: "Computerised Maintenance Management System (CMMS)",
      operatingSystem: "Web browser (desktop, mobile, shared tablet)",
      description: ONE_LINER,
      publisher: ORGANIZATION,
      offers: pricingOffers(pageUrl, pageUrl),
    });
  }

  nodes.push({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${pageUrl}#faq`,
    mainEntity: page.faq.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  });

  return nodes;
}

/**
 * Work order lifecycle as inline SVG. Brand colors only (Deep Navy, Power Blue,
 * Pulse Cyan), no imagery. Kept inside a horizontal scroller so the labels stay
 * legible at phone width instead of shrinking with the viewBox.
 */
function WorkOrderLifecycleDiagram({ caption }: { caption: string }) {
  const top = ["Request", "Triage", "Assign", "Parts"];
  const bottom = ["Execute", "Verify", "Close"];
  const colX = [0, 170, 340, 510];
  const stroke = "rgba(255,255,255,0.14)";

  return (
    <figure className="my-10">
      <div className="overflow-x-auto rounded-xl border border-white/8 bg-navy-800/30 p-4">
        <svg
          viewBox="0 0 640 190"
          role="img"
          aria-labelledby="wo-diagram-title wo-diagram-desc"
          className="min-w-[34rem]"
        >
          <title id="wo-diagram-title">Work order lifecycle</title>
          <desc id="wo-diagram-desc">
            Request, triage, assign, parts, execute, verify and close, ending in the machine history.
          </desc>
          <defs>
            <marker id="wo-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
              <path d="M0 0 10 5 0 10z" fill="#00C2FF" />
            </marker>
          </defs>

          {top.map((label, index) => (
            <g key={label}>
              <rect x={colX[index]} y="10" width="130" height="64" rx="10" fill="#0A1628" stroke={stroke} />
              <text x={colX[index] + 16} y="34" fontSize="11" fill="#00C2FF" fontFamily="monospace">
                {String(index + 1).padStart(2, "0")}
              </text>
              <text x={colX[index] + 16} y="58" fontSize="16" fontWeight="600" fill="#E6ECF5">
                {label}
              </text>
            </g>
          ))}
          {[0, 1, 2].map((index) => (
            <line key={index} x1={colX[index] + 132} y1="42" x2={colX[index + 1] - 3} y2="42" stroke="#00C2FF" strokeWidth="1.5" markerEnd="url(#wo-arrow)" />
          ))}

          {/* Wrap from Parts back to the start of the second row. */}
          <path d="M575 76 V98 H65 V112" fill="none" stroke="#00C2FF" strokeWidth="1.5" markerEnd="url(#wo-arrow)" />

          {bottom.map((label, index) => (
            <g key={label}>
              <rect x={colX[index]} y="116" width="130" height="64" rx="10" fill="#0A1628" stroke={stroke} />
              <text x={colX[index] + 16} y="140" fontSize="11" fill="#00C2FF" fontFamily="monospace">
                {String(index + 5).padStart(2, "0")}
              </text>
              <text x={colX[index] + 16} y="164" fontSize="16" fontWeight="600" fill="#E6ECF5">
                {label}
              </text>
            </g>
          ))}
          {[0, 1].map((index) => (
            <line key={index} x1={colX[index] + 132} y1="148" x2={colX[index + 1] - 3} y2="148" stroke="#00C2FF" strokeWidth="1.5" markerEnd="url(#wo-arrow)" />
          ))}
          <line x1="472" y1="148" x2="507" y2="148" stroke="#00C2FF" strokeWidth="1.5" markerEnd="url(#wo-arrow)" />

          <rect x="510" y="116" width="130" height="64" rx="10" fill="#1A56DB" />
          <text x="526" y="145" fontSize="16" fontWeight="600" fill="#FFFFFF">
            Machine
          </text>
          <text x="526" y="167" fontSize="16" fontWeight="600" fill="#FFFFFF">
            history
          </text>
        </svg>
      </div>
      <figcaption className="mt-3 font-mono text-[11px] leading-relaxed text-ink-mute">{caption}</figcaption>
    </figure>
  );
}

function PillarBlockView({ block }: { block: PillarBlock }) {
  if (block.type === "h3") return <h3>{block.text}</h3>;
  if (block.type === "diagram") return <WorkOrderLifecycleDiagram caption={block.caption} />;
  return <ArticleBlock block={block} />;
}

export function PillarPage({ page }: { page: PillarPageData }) {
  const toc = [...page.sections.map(({ id, heading }) => ({ id, heading })), { id: "faq", heading: "Frequently asked questions" }];
  const otherPillars = PILLAR_PAGES.filter((item) => item.slug !== page.slug);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdHtml(jsonLdFor(page))} />
      <Navbar />
      <main>
        <section className="relative overflow-hidden pt-28 pb-12 sm:pt-32 sm:pb-16">
          <div className="bp-grid absolute inset-0 opacity-40" />
          <div className="absolute inset-0 bg-[radial-gradient(800px_500px_at_85%_-10%,rgba(0,194,255,0.18),transparent_60%)]" />
          <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
            <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-2 font-mono text-[12px] text-ink-mute">
              <Link href="/" className="hover:text-pulse">{SITE_NAME}</Link>
              <span>/</span>
              <span className="text-pulse">{page.label}</span>
            </nav>
            <div className="max-w-3xl">
              <SectionLabel>Guide</SectionLabel>
              <h1 className="mt-5 font-sora text-[38px] font-bold leading-[1.06] sm:text-[52px]">
                {page.h1} <span className="text-pulse">{page.h1Accent}</span>
              </h1>
              <p className="mt-5 text-[17px] leading-relaxed text-ink-dim">{page.lede}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/#book-demo" className="btn-glow rounded-lg bg-power px-5 py-3 font-medium text-white">
                  Book a demo
                </Link>
                <Link href="/pricing/" className="rounded-lg border border-white/15 px-5 py-3 font-medium text-ink transition hover:border-pulse/50 hover:text-pulse">
                  See pricing
                </Link>
              </div>
              <p className="mt-6 font-mono text-[11px] text-ink-mute">
                Updated <time dateTime={page.updated}>{page.updated}</time> · By {SITE_NAME}
              </p>
            </div>
          </div>
        </section>

        <div className="mx-auto max-w-7xl px-5 pb-16 sm:px-8 lg:grid lg:grid-cols-12 lg:gap-10">
          <details className="mb-8 rounded-xl border border-white/8 bg-navy-800/40 p-4 lg:hidden">
            <summary className="cursor-pointer list-none font-mono text-[11px] uppercase tracking-[0.18em] text-ink-mute marker:hidden">
              On this page
            </summary>
            <nav aria-label="Table of contents" className="mt-3">
              {toc.map((item) => (
                <a key={item.id} href={`#${item.id}`} className="block border-l border-white/10 py-1.5 pl-3 text-sm text-ink-dim hover:border-pulse hover:text-pulse">
                  {item.heading}
                </a>
              ))}
            </nav>
          </details>

          <aside className="hidden lg:col-span-3 lg:block">
            <nav aria-label="Table of contents" className="sticky top-24 rounded-xl border border-white/8 bg-navy-800/40 p-5">
              <div className="mb-4 font-mono text-[11px] uppercase tracking-[0.18em] text-ink-mute">On this page</div>
              {toc.map((item) => (
                <a key={item.id} href={`#${item.id}`} className="block border-l border-white/10 py-1.5 pl-3 text-sm text-ink-dim hover:border-pulse hover:text-pulse">
                  {item.heading}
                </a>
              ))}
            </nav>
          </aside>

          <article className="article-prose min-w-0 lg:col-span-9">
            {page.sections.map((section, index) => (
              <section key={section.id}>
                <h2 id={section.id} className={index === 0 ? "mt-0!" : undefined}>{section.heading}</h2>
                {index === 0 ? (
                  <div className="mb-8 rounded-xl border border-pulse/35 bg-pulse/5 p-5">
                    <p id="answer" className="mb-0! text-[1.1rem]! leading-[1.65]! text-ink!">
                      <RichText text={page.answer} />
                    </p>
                  </div>
                ) : null}
                {section.blocks.map((block, blockIndex) => (
                  <PillarBlockView key={blockIndex} block={block} />
                ))}
              </section>
            ))}

            <section>
              <h2 id="faq">Frequently asked questions</h2>
              <div className="mt-6 flex flex-col gap-4">
                {page.faq.map((item) => (
                  <div key={item.q} className="relative rounded-xl border border-white/8 bg-navy-800/40 p-6">
                    <Corners />
                    <h3 className="mt-0! mb-2! text-[1.05rem]! leading-snug!">{item.q}</h3>
                    <p className="mb-0! text-[0.95rem]!">{item.a}</p>
                  </div>
                ))}
              </div>
            </section>

            <nav aria-label="Related pages" className="my-14 rounded-2xl border border-white/8 bg-navy-800/40 p-6">
              <div className="mb-4 font-mono text-[11px] uppercase tracking-[0.18em] text-ink-mute">Keep reading</div>
              <ul className="mb-0! mt-0! grid list-none gap-x-8 gap-y-1 pl-0! sm:grid-cols-2">
                {page.keepReading.map((link) => (
                  <li key={link.href} className="mb-0!">
                    <Link href={link.href} className="text-[15px] text-pulse hover:underline">
                      {link.label} →
                    </Link>
                  </li>
                ))}
                <li className="mb-0!">
                  <Link href="/features/" className="text-[15px] text-pulse hover:underline">
                    All Firmicore features →
                  </Link>
                </li>
              </ul>
            </nav>

            <section className="relative overflow-hidden rounded-2xl border border-pulse/30 bg-gradient-to-br from-pulse/10 via-navy-800/60 to-power/10 p-8">
              <SectionLabel>Next step</SectionLabel>
              <h2 className="mb-2! mt-3! text-[1.75rem]!">{page.ctaHeading}</h2>
              <p className="mb-0! max-w-lg">{page.ctaBody}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link href="/#book-demo" className="btn-glow rounded-lg bg-power px-5 py-3 font-medium text-white">
                  Book a demo
                </Link>
                <Link href="/pricing/" className="rounded-lg border border-white/15 px-5 py-3 font-medium text-ink transition hover:border-pulse/50 hover:text-pulse">
                  See pricing
                </Link>
              </div>
              <p className="mb-0! mt-6 text-sm">
                Also see{" "}
                {otherPillars.map((item, index) => (
                  <span key={item.slug}>
                    {index > 0 ? " and " : ""}
                    <Link href={item.path} className="text-pulse hover:underline">{item.label.toLowerCase()}</Link>
                  </span>
                ))}
                .
              </p>
            </section>
          </article>
        </div>
      </main>
      <Footer />
    </>
  );
}
