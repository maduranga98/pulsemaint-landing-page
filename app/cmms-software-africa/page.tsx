import Link from "next/link";
import { Corners, Footer, Navbar, SectionLabel } from "../marketing-components";
import { breadcrumbJsonLd, jsonLdHtml, pageMetadata } from "../page-metadata";
import { RichText } from "../rich-text";
import { AFRICA_PAGE_UPDATED, CONTACT_EMAIL, PRICING_TIERS, SITE_NAME, SITE_URL, machineLimit } from "../site-data";

/**
 * Regional landing page for plants in Africa. English-language, so it sits in
 * the default hreflang cluster rather than getting its own. Copy follows the
 * pillar rules: US spelling, no statistics, no customer names, prices and
 * limits read from PRICING_TIERS, and Firmicore claims limited to what the
 * homepage already makes.
 */
const TITLE = "CMMS Software for Manufacturers in Africa | Firmicore";
const DESCRIPTION =
  "Mobile-first CMMS for factories in South Africa, Nigeria, Kenya, Ghana, Egypt and across Africa. Breakdowns, work orders, PM and spares in one system.";
const PATH = "/cmms-software-africa/";
const PAGE_URL = `${SITE_URL}${PATH}`;

export const metadata = pageMetadata({ title: TITLE, description: DESCRIPTION, path: PATH });

const COUNTRIES = [
  "South Africa",
  "Nigeria",
  "Kenya",
  "Ghana",
  "Egypt",
  "Ethiopia",
  "Tanzania",
  "Uganda",
  "Morocco",
  "Rwanda",
  "Zambia",
  "Botswana",
];

const realities: [string, string][] = [
  [
    "Connectivity drops near the machines",
    "Plant Wi-Fi and mobile coverage are usually weakest on the production floor, exactly where breakdowns are reported. A maintenance system has to accept a report on a shared tablet or an Android phone and sync it when the signal returns, or the floor goes back to paper.",
  ],
  [
    "Power interruptions reset the day",
    "When supply is interrupted, lines stop and restart, and every restart is a chance for a fault to go unrecorded. Logging each stoppage against the machine, with a timestamp and a cause, is what turns repeated restarts into a pattern you can act on.",
  ],
  [
    "Spare parts take time to arrive",
    "Imported spares can have long lead times, so a stockout on a critical part can stall a repair for weeks. Tying parts to the machines they fit, with reorder points and low-stock alerts, is how a store keeper sees the gap before the breakdown does.",
  ],
  [
    "Contractors carry much of the specialist work",
    "Many plants call in outside firms for electrical, hydraulic and OEM work. Without a record of who came, what they did and what they billed, the same fault gets paid for twice.",
  ],
  [
    "Crews speak more than one language",
    "A troubleshooting guide written only for the engineer does not help the operator who finds the fault. Instructions need to reach the person at the machine in a language they read every day.",
  ],
];

const fits: { title: string; body: string }[] = [
  {
    title: "Runs in the browser, on the phones you already have",
    body: "Firmicore is cloud-hosted on Firebase and runs in desktop and mobile browsers, including shared floor tablets. There are no on-site servers to buy, rack or patch, which also means no local IT project before go-live.",
  },
  {
    title: "QR breakdown reporting from the machine",
    body: "Every machine in the registry carries a QR code. Scanning it opens breakdown reporting for that asset, so the report lands on the right machine without anyone typing an asset number. See [how to report a machine breakdown](/blog/how-to-report-a-machine-breakdown/).",
  },
  {
    title: "Guided Triage in your crew's language",
    body: "Branching troubleshooting trees let an operator make a fault safe and gather the right facts before a technician arrives. Flows run in English, and you can request any other language your operators speak. Read more on [guided operator safety triage](/blog/guided-operator-safety-triage/).",
  },
  {
    title: "Spares, purchase orders and suppliers in one place",
    body: "The inventory module links parts to machines, runs a request and approval workflow, and raises purchase orders to suppliers, with low-stock alerts on the tiers that include them. See [spare parts inventory management](/blog/spare-parts-inventory-management/).",
  },
  {
    title: "Contractor jobs on the same record",
    body: "Register contractors, log the jobs they do against the machine, compare their invoices with the logged work, and rate them on speed, quality, professionalism and communication. See [contractor management software for manufacturing](/blog/contractor-management-software-manufacturing/).",
  },
  {
    title: "Reports your head office can read",
    body: "More than 15 report types export in one click to PDF, Excel or Google Sheets, so a group running several plants compares [MTTR](/glossary/mttr/), [downtime](/glossary/downtime/) and [PM compliance](/glossary/pm-compliance/) on the same definitions.",
  },
];

const paidTiers = PRICING_TIERS.filter((tier) => tier.priceUSD !== undefined);
const tierLine = paidTiers.map((tier) => `${tier.name} ${tier.price}/month (${machineLimit(tier).toLowerCase()})`).join(", ");

const faqs: { q: string; a: string }[] = [
  {
    q: "Which African countries can use Firmicore?",
    a: `Firmicore is a cloud CMMS sold online, so any plant with a browser and an internet connection can use it, including plants in ${COUNTRIES.slice(0, -1).join(", ")} and ${COUNTRIES[COUNTRIES.length - 1]}. There is nothing to install on site.`,
  },
  {
    q: "How much does Firmicore cost for a plant in Africa?",
    a: `Pricing is the same worldwide and listed in US dollars per company per month: ${tierLine}, and Enterprise is custom-quoted. Yearly billing is pay 10 months, get 12, and paid tiers start with a 14-day free trial with no card. Prices are indicative; confirm the figure and billing currency with sales.`,
  },
  {
    q: "Does Firmicore work when the internet connection is unreliable?",
    a: "Firmicore is built for floor devices where coverage is weakest near the machines, and Guided Triage steps are designed to queue offline and sync when the connection returns. Test it in the worst-covered corner of your plant during the trial rather than in the office.",
  },
  {
    q: "Do we need servers or an IT team to run it?",
    a: "No. Firmicore is cloud-hosted on Firebase, so there is no on-site infrastructure to rack, patch or maintain. Users sign in from desktop or mobile browsers, and each plant's data is isolated in its own tenant with role-based access control on every route and write.",
  },
  {
    q: "Can operators who do not read English use it?",
    a: "Guided Triage flows run in English, and you can request any other language your operators speak, so the troubleshooting steps reach the person at the machine in a language they use every day.",
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
    inLanguage: "en",
    isPartOf: { "@id": `${SITE_URL}/#website` },
    about: { "@id": `${SITE_URL}/#software` },
    dateModified: AFRICA_PAGE_UPDATED,
    spatialCoverage: { "@type": "Place", name: "Africa" },
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${PAGE_URL}#faq`,
    mainEntity: faqs.map((item) => ({ "@type": "Question", name: item.q, acceptedAnswer: { "@type": "Answer", text: item.a } })),
  },
  breadcrumbJsonLd("CMMS software in Africa", PATH),
];

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdHtml(jsonLd)} />
      <Navbar />
      <main>
        <section className="relative overflow-hidden pt-28 pb-16 sm:pt-32 sm:pb-20">
          <div className="bp-grid absolute inset-0 opacity-60" />
          <div className="relative mx-auto max-w-4xl px-5 sm:px-8">
            <nav aria-label="Breadcrumb" className="font-mono text-[12px] text-ink-mute">
              <Link href="/" className="hover:text-pulse">
                {SITE_NAME}
              </Link>{" "}
              / CMMS software in Africa
            </nav>
            <h1 className="mt-6 font-sora text-[34px] font-bold leading-[1.12] text-ink sm:text-[46px]">
              CMMS software for manufacturing plants <span className="text-pulse">across Africa.</span>
            </h1>
            <p className="mt-5 text-[17px] leading-relaxed text-ink-dim">
              A mobile-first maintenance system for factories in South Africa, Nigeria, Kenya, Ghana, Egypt and beyond: breakdown
              reporting from the machine, work orders, preventive maintenance, spare parts and contractors in one cloud record.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/#book-demo" className="btn-glow rounded-lg bg-power px-5 py-3 font-medium text-white">
                Book a demo
              </Link>
              <Link href="/pricing/" className="rounded-lg border border-white/15 px-5 py-3 font-medium text-ink transition hover:border-pulse/50 hover:text-pulse">
                See pricing
              </Link>
            </div>
          </div>
        </section>

        <section id="what-it-is" className="border-y border-white/8 bg-navy-950 py-16">
          <div className="mx-auto max-w-4xl px-5 sm:px-8">
            <SectionLabel>In one paragraph</SectionLabel>
            <h2 className="mt-4 font-sora text-[26px] font-bold sm:text-[32px]">What a CMMS does for a plant in Africa</h2>
            <p className="mt-5 text-[16px] leading-relaxed text-ink-dim">
              A CMMS (computerized maintenance management system) keeps one record of every machine a plant maintains, every breakdown and
              work order raised against it, the preventive maintenance that keeps it running and the spare parts used along the way.{" "}
              {SITE_NAME} is a cloud CMMS for manufacturing and process plants that runs in the browser on phones, tablets and desktops,
              so a plant in Lagos, Nairobi, Johannesburg or Accra can replace paper logbooks and spreadsheets without installing servers.
            </p>
          </div>
        </section>

        <section id="realities" className="py-16">
          <div className="mx-auto max-w-4xl px-5 sm:px-8">
            <SectionLabel tone="crit">On the floor</SectionLabel>
            <h2 className="mt-4 font-sora text-[26px] font-bold sm:text-[32px]">What maintenance software has to handle</h2>
            <div className="mt-8 grid gap-4">
              {realities.map(([title, body]) => (
                <div key={title} className="relative rounded-xl border border-white/8 bg-navy-800/40 p-5">
                  <Corners />
                  <h3 className="font-sora text-base font-semibold text-ink">{title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-ink-dim">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="how-firmicore-fits" className="border-y border-white/8 bg-navy-950 py-16">
          <div className="mx-auto max-w-4xl px-5 sm:px-8">
            <SectionLabel>How Firmicore fits</SectionLabel>
            <h2 className="mt-4 font-sora text-[26px] font-bold sm:text-[32px]">How Firmicore handles it</h2>
            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              {fits.map((item) => (
                <div key={item.title} className="rounded-xl border border-white/8 bg-navy-800/40 p-5">
                  <h3 className="font-sora text-base font-semibold text-ink">{item.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-ink-dim">
                    <RichText text={item.body} />
                  </p>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm text-ink-mute">
              The full module list is on the <Link href="/features/" className="text-pulse">features page</Link>, and the buyer&apos;s
              checklist is in the <Link href="/cmms-software/" className="text-pulse">CMMS software guide</Link>.
            </p>
          </div>
        </section>

        <section id="countries" className="py-16">
          <div className="mx-auto max-w-4xl px-5 sm:px-8">
            <SectionLabel tone="uptime">Where</SectionLabel>
            <h2 className="mt-4 font-sora text-[26px] font-bold sm:text-[32px]">Available to plants across the continent</h2>
            <p className="mt-5 text-[16px] leading-relaxed text-ink-dim">
              Firmicore is sold online with the same plans worldwide. Food and beverage, dairy, pharmaceuticals, packaging, textiles and
              chemicals plants are the typical fit.
            </p>
            <ul className="mt-6 flex flex-wrap gap-2.5">
              {COUNTRIES.map((country) => (
                <li key={country} className="rounded-full border border-white/10 px-3.5 py-1.5 text-sm text-ink-dim">
                  {country}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="faq" className="border-y border-white/8 bg-navy-950 py-16">
          <div className="mx-auto max-w-4xl px-5 sm:px-8">
            <SectionLabel>FAQ</SectionLabel>
            <h2 className="mt-4 font-sora text-[26px] font-bold sm:text-[32px]">Frequently asked questions</h2>
            <div className="mt-8 divide-y divide-white/8 border-y border-white/8">
              {faqs.map((item) => (
                <div key={item.q} className="py-5">
                  <h3 className="font-sora text-[16px] font-semibold text-ink">{item.q}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-ink-dim">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
            <h2 className="font-sora text-[26px] font-bold sm:text-[32px]">See it on your own machine list</h2>
            <p className="mt-4 text-[16px] leading-relaxed text-ink-dim">
              A 30-minute walkthrough on the workspace your team will use most, sized against your machine count. Questions first? Email{" "}
              <a href={`mailto:${CONTACT_EMAIL}`} className="text-pulse">
                {CONTACT_EMAIL}
              </a>
              .
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link href="/#book-demo" className="btn-glow rounded-lg bg-power px-5 py-3 font-medium text-white">
                Book a demo
              </Link>
              <Link href="/glossary/" className="rounded-lg border border-white/15 px-5 py-3 font-medium text-ink transition hover:border-pulse/50 hover:text-pulse">
                Maintenance glossary
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
