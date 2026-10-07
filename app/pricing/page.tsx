import Link from "next/link";
import { Corners, Footer, Navbar, SectionLabel } from "../marketing-components";
import { breadcrumbJsonLd, jsonLdHtml, pageMetadata } from "../page-metadata";
import { PricingCards } from "../pricing-cards";
import { pricingOffers } from "../pricing-data";
import { FAQS, ONE_LINER, PRICING_PAGE_UPDATED, PRICING_TIERS, SITE_NAME, SITE_URL, machineLimit } from "../site-data";

const TITLE = "Firmicore Pricing: Per-Machine CMMS Plans";
const DESCRIPTION =
  "See Firmicore pricing plans built around per-machine costs, not per-user seats. Compare tiers and what each includes.";
const PATH = "/pricing/";
const PAGE_URL = `${SITE_URL}${PATH}`;

export const metadata = pageMetadata({ title: TITLE, description: DESCRIPTION, path: PATH });

/**
 * Every answer here restates a fact that is already on the homepage (FAQS and
 * PRICING_TIERS); nothing new is claimed on this page. Limits are read from the
 * tier data rather than typed, so a price or limit change lands here too.
 */
const perMachineFaq = FAQS.find((item) => item.q === "Is Firmicore priced per machine or per user?");

const pricingFaqs: { q: string; a: string }[] = [
  ...(perMachineFaq ? [perMachineFaq] : []),
  {
    q: "How are machines counted?",
    a: `Firmicore counts the machines registered in your machine registry, the list that carries each machine's QR code, documents and history. Each tier states its machine limit: ${PRICING_TIERS.map((tier) => `${tier.name} ${machineLimit(tier).toLowerCase()}`).join(", ")}.`,
  },
  {
    q: "What happens at the machine limit?",
    a: `Each tier has a fixed machine limit, so a fleet larger than your tier allows needs the next tier up, and Enterprise has no machine limit. Limits and prices are indicative, so confirm with sales how a limit applies to your plant. The rollout is sized against your machine count before you commit.`,
  },
  {
    q: "How does the trial start?",
    a: "Basic, Workshop, and Factory Pro start with a trial that you begin from the Start trial button on the tier. Enterprise is quoted and provisioned through sales because it includes multi-site management, SSO/SAML, custom integrations, and an SLA.",
  },
];

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
    dateModified: PRICING_PAGE_UPDATED,
    inLanguage: "en",
  },
  breadcrumbJsonLd("Pricing", PATH),
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": `${SITE_URL}/#software`,
    name: SITE_NAME,
    url: `${SITE_URL}/`,
    applicationCategory: "BusinessApplication",
    applicationSubCategory: "Computerised Maintenance Management System (CMMS)",
    operatingSystem: "Web browser (desktop, mobile, shared tablet)",
    description: ONE_LINER,
    offers: pricingOffers(PAGE_URL, PAGE_URL),
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${PAGE_URL}#faq`,
    mainEntity: pricingFaqs.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  },
];

export default function PricingPage() {
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
              <span className="text-pulse">Pricing</span>
            </nav>
            <div className="max-w-3xl">
              <SectionLabel>Pricing</SectionLabel>
              <h1 className="mt-5 font-sora text-[42px] font-bold leading-[1.04] sm:text-[58px]">
                Pricing built around <span className="text-pulse">your machines.</span>
              </h1>
              <p className="mt-5 text-[17px] leading-relaxed text-ink-dim">
                Firmicore plans are sized by the machines you register first. Each tier states its machine limit, with
                inventory, preventive maintenance and user limits alongside it, so a plant with many operators but a
                modest asset fleet is not billed per head the way a purely per-user CMMS would bill it.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-ink-mute">
                All limits and prices are indicative: confirm exact figures with sales before quoting a customer.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 pb-16 sm:px-8">
          <PricingCards ctaHref="/#book-demo" />
          <p className="mt-6 text-sm text-ink-dim">
            Weighing the two models?{" "}
            <Link href="/blog/cmms-pricing-per-machine-vs-per-user/" className="text-pulse hover:underline">
              Per-machine versus per-user CMMS pricing, worked through
            </Link>
            . Want to see what each tier unlocks?{" "}
            <Link href="/features/" className="text-pulse hover:underline">
              Browse all Firmicore features
            </Link>
            .
          </p>
        </section>

        <section id="faq" className="relative overflow-hidden border-t border-white/8 py-16 sm:py-20">
          <div className="bp-grid-fine absolute inset-0 opacity-25" />
          <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
            <SectionLabel>Pricing questions</SectionLabel>
            <h2 className="mt-4 max-w-3xl font-sora text-[30px] font-bold leading-tight sm:text-[38px]">
              How plans, machines and trials <span className="text-pulse">work.</span>
            </h2>
            <div className="mt-10 grid gap-4 lg:grid-cols-2">
              {pricingFaqs.map((item) => (
                <article key={item.q} className="lift relative rounded-xl border border-white/8 bg-navy-800/40 p-6 hover:border-pulse/30">
                  <Corners />
                  <h3 className="font-sora text-[17px] font-semibold leading-snug text-ink">{item.q}</h3>
                  <p className="mt-2.5 text-[14.5px] leading-relaxed text-ink-dim">{item.a}</p>
                </article>
              ))}
            </div>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link href="/#book-demo" className="btn-glow rounded-lg bg-power px-5 py-3 font-medium text-white">
                Book a demo
              </Link>
              <Link href="/#faq" className="rounded-lg border border-white/15 px-5 py-3 font-medium text-ink transition hover:border-pulse/50 hover:text-pulse">
                More questions
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
