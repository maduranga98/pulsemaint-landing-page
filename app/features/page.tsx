import Link from "next/link";
import { Corners, Footer, Navbar, SectionLabel } from "../marketing-components";
import { breadcrumbJsonLd, jsonLdHtml, pageMetadata } from "../page-metadata";
import { FEATURES_PAGE_UPDATED, MODULES, SITE_NAME, SITE_URL } from "../site-data";

const TITLE = "Firmicore Features: Modules for Factory Teams";
const DESCRIPTION =
  "Explore Firmicore's modules for work orders, PM scheduling, parts inventory and shift handover, built for factory floors.";
const PATH = "/features/";
const PAGE_URL = `${SITE_URL}${PATH}`;

export const metadata = pageMetadata({ title: TITLE, description: DESCRIPTION, path: PATH });

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${PAGE_URL}#webpage`,
    url: PAGE_URL,
    name: TITLE,
    description: DESCRIPTION,
    isPartOf: { "@id": `${SITE_URL}/#website` },
    about: { "@id": `${SITE_URL}/#software` },
    dateModified: FEATURES_PAGE_UPDATED,
    inLanguage: "en",
  },
  breadcrumbJsonLd("Features", PATH),
  {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": `${PAGE_URL}#modules`,
    name: `${SITE_NAME} core modules`,
    numberOfItems: MODULES.length,
    itemListElement: MODULES.map(({ name, body, slug }, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name,
      description: body,
      url: `${PAGE_URL}#${slug}`,
    })),
  },
];

export default function FeaturesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdHtml(jsonLd)} />
      <Navbar />
      <main>
        <section className="relative overflow-hidden pt-28 pb-12 sm:pt-32 sm:pb-16">
          <div className="bp-grid absolute inset-0 opacity-40" />
          <div className="absolute inset-0 bg-[radial-gradient(800px_500px_at_85%_-10%,rgba(0,194,255,0.18),transparent_60%)]" />
          <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
            <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-2 font-mono text-[12px] text-ink-mute">
              <Link href="/" className="hover:text-pulse">{SITE_NAME}</Link>
              <span>/</span>
              <span className="text-pulse">Features</span>
            </nav>
            <div className="max-w-3xl">
              <SectionLabel>Core modules</SectionLabel>
              <h1 className="mt-5 font-sora text-[42px] font-bold leading-[1.04] sm:text-[58px]">
                Modules for factory teams, <span className="text-pulse">one connected system.</span>
              </h1>
              <p className="mt-5 text-[17px] leading-relaxed text-ink-dim">
                {MODULES.length} core modules cover the work a maintenance team does every shift, from the machine
                register to work orders, preventive maintenance, spare parts and shift handover. Each one links to the
                guide or definition that explains the idea behind it.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 pb-16 sm:px-8">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {MODULES.map(({ num, slug, name, body, link }) => (
              <article key={slug} id={slug} className="lift relative scroll-mt-24 rounded-xl border border-white/8 bg-navy-800/40 p-6 hover:border-pulse/30">
                <Corners />
                <div className="font-mono text-[12px] font-bold tracking-wide text-pulse">{num}</div>
                <h2 className="mt-3 font-sora text-[16.5px] font-bold text-ink">{name}</h2>
                <p className="mt-2 text-sm leading-relaxed text-ink-dim">{body}</p>
                <Link href={link.href} className="mt-4 inline-block text-[13px] font-medium text-pulse">
                  {link.label} →
                </Link>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl border-t border-white/8 px-5 py-16 sm:px-8">
          <SectionLabel>Next step</SectionLabel>
          <h2 className="mt-4 max-w-2xl font-sora text-[30px] font-bold leading-tight sm:text-[38px]">
            See which plan <span className="text-pulse">covers the modules you need.</span>
          </h2>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/pricing/" className="btn-glow rounded-lg bg-power px-5 py-3 font-medium text-white">
              See full pricing
            </Link>
            <Link href="/#book-demo" className="rounded-lg border border-white/15 px-5 py-3 font-medium text-ink transition hover:border-pulse/50 hover:text-pulse">
              Book a demo
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
