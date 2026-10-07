/**
 * Single source of truth for the facts that answer engines quote.
 *
 * AEO/GEO note: every fact below is rendered as visible page text AND emitted
 * as schema.org JSON-LD AND exposed in /llms.txt. Keeping one module means the
 * three surfaces can never drift, which is what makes a citation trustworthy.
 */

export const SITE_URL = "https://firmicore.com";

/**
 * Social card URLs.
 *
 * Built from an explicit `.png` route rather than Next's `opengraph-image` file
 * convention. That convention emits an extensionless URL, and Hosting runs with
 * `trailingSlash: true`, which appends a slash to any extensionless path - so
 * every card URL redirected to a path with no file behind it. Keep the `.png`.
 */
export const OG_IMAGE_WIDTH = 1200;
export const OG_IMAGE_HEIGHT = 630;
export const OG_IMAGE_ALT = "Firmicore - mobile-first CMMS for factory maintenance";

/** Card for `card`, which is a post slug or "home" for the site-wide card. */
export function ogImageUrl(card: string): string {
  return `${SITE_URL}/og/${card}.png`;
}
export const SITE_NAME = "Firmicore";
export const LEGAL_NAME = "Lumora Ventures Pvt Ltd";
export const CONTACT_EMAIL = "info@lumoraventures.com";
export const CONTACT_PHONE = "+94-71-999-8500";

/**
 * Official social profiles, emitted as the Organization's `sameAs` and rendered
 * as real footer links.
 *
 * `sameAs` is how the entity gets reconciled against a knowledge graph, and it
 * carries more weight when a crawler can corroborate it with an actual link on
 * the page, so the two surfaces read from this one list.
 *
 * Canonical host only: Facebook serves the same profile from web.facebook.com,
 * but emits www.facebook.com as og:url, and sameAs matching is string-based.
 *
 * `icon` keys the footer's inline SVG glyph; the markup stays in the component
 * so this module remains plain data that server files can import.
 */
export type SocialLink = { label: string; url: string; icon: "facebook" | "linkedin" };

export const SOCIAL_LINKS: SocialLink[] = [
  { label: "Facebook", url: "https://www.facebook.com/profile.php?id=61594147745569", icon: "facebook" },
  { label: "LinkedIn", url: "https://www.linkedin.com/company/firmicore/", icon: "linkedin" },
];

/**
 * Date the homepage facts (modules, roles, pricing, security model) were last
 * reviewed against the product. Bump it by hand when one of them changes.
 *
 * Deliberately a constant rather than `new Date()`: a build-time timestamp
 * would claim a fresh edit on every deploy, and a `dateModified` that is always
 * "today" is a freshness signal answer engines learn to discount.
 */
export const CONTENT_LAST_REVIEWED = "2026-09-16";

/**
 * Pricing tiers. Rendered as the pricing cards on the homepage AND emitted as
 * individual schema.org `Offer` nodes, so "what does the Workshop tier cost"
 * can be answered from structured data instead of parsed out of prose.
 */
export type PricingTier = {
  name: string;
  /** Display price, e.g. "$29" or "Contact Sales". */
  price: string;
  /** Numeric monthly price in USD. Omitted for quote-only tiers. */
  priceUSD?: number;
  period: string;
  annual: string;
  limits: string;
  features: string[];
  popular: boolean;
};

export const PRICING_TIERS: PricingTier[] = [
  {
    name: "Basic",
    price: "$29",
    priceUSD: 29,
    period: "/mo",
    annual: "$278/year, 20% off monthly",
    limits: "10 machines \u00b7 10 inventory items \u00b7 10 PM schedules \u00b7 5 users",
    features: ["Core maintenance only"],
    popular: false,
  },
  {
    name: "Workshop",
    price: "$59",
    priceUSD: 59,
    period: "/mo",
    annual: "$566/year, 20% off monthly",
    limits: "100 machines \u00b7 10,000 items \u00b7 unlimited PM \u00b7 20 users",
    features: ["Contractor management", "Shift handover, training & safety", "PM compliance dashboard", "Basic analytics"],
    popular: false,
  },
  {
    name: "Factory Pro",
    price: "$249",
    priceUSD: 249,
    period: "/mo",
    annual: "$2,390/year, 20% off monthly",
    limits: "1,500 machines \u00b7 unlimited inventory & PM \u00b7 100 users",
    features: ["Everything in Workshop", "MOE trend analytics", "Machine comparison"],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Contact Sales",
    period: "",
    annual: "",
    limits: "Unlimited machines, inventory, PM, users",
    features: [
      "TPM maturity roadmap & 5S scorecard",
      "Multi-site management",
      "Advanced reports hub",
      "SSO/SAML, custom integrations & API",
      "Dedicated support & SLA",
    ],
    popular: false,
  },
];

/** First segment of a tier's limits, e.g. "10 machines"; "Unlimited machines" for quote-only tiers. */
export function machineLimit(tier: PricingTier): string {
  const first = tier.limits.split(" \u00b7 ")[0];
  return /^unlimited/i.test(first) ? "Unlimited machines" : first;
}

/**
 * The twelve core modules. One list feeds the homepage grid, the homepage
 * ItemList JSON-LD and /features/, so the three can never drift. `link` is the
 * most relevant post or glossary term for the module.
 */
export type ModuleEntry = {
  num: string;
  slug: string;
  name: string;
  body: string;
  link: { label: string; href: string };
};

export const MODULES: ModuleEntry[] = [
  { num: "01", slug: "machine-registry", name: "Machine Registry", body: "Full asset register, QR codes, documents, spare-parts links, and an automatic 0-100 health score.", link: { label: "Asset registry, defined", href: "/glossary/asset-registry/" } },
  { num: "02", slug: "breakdown-management", name: "Breakdown Management", body: "Kanban board, severity/type/root-cause tracking, push/SMS/email/in-app alerts, QR-triggered reporting.", link: { label: "How to report a machine breakdown", href: "/blog/how-to-report-a-machine-breakdown/" } },
  { num: "03", slug: "work-orders", name: "Work Orders", body: "Full lifecycle from Draft to Closed, multi-technician checklists, time-segment tracking, parts requests, supervisor sign-off queue.", link: { label: "Work order software guide", href: "/blog/work-order-software/" } },
  { num: "04", slug: "preventive-maintenance", name: "Preventive Maintenance", body: "Calendar- or meter-based schedules, PM calendar view, compliance dashboard with per-machine/technician trends.", link: { label: "What is preventive maintenance?", href: "/blog/what-is-preventive-maintenance/" } },
  { num: "05", slug: "inventory-and-parts", name: "Inventory & Parts", body: "Categorized catalog, multi-stage approval workflow, stock movement log, purchase orders, supplier management, Excel import.", link: { label: "MRO inventory, defined", href: "/glossary/mro-inventory/" } },
  { num: "06", slug: "contractors", name: "Contractors", body: "Registry, job tracking, invoice comparison, four-dimension performance rating: speed, quality, professionalism, communication.", link: { label: "Contractor management software for manufacturing", href: "/blog/contractor-management-software-manufacturing/" } },
  { num: "07", slug: "shift-handovers", name: "Shift Handovers", body: "Auto-compiled structured reports: pending work orders, ongoing breakdowns, low-stock alerts, watch-machine flags.", link: { label: "Shift handover, defined", href: "/glossary/shift-handover/" } },
  { num: "08", slug: "training-and-certification", name: "Training & Certification", body: "Module libraries, quizzes, assignment tracking, trainee onboarding programme, auto-issued certificates.", link: { label: "CMMS for regulated manufacturing", href: "/blog/cmms-for-regulated-manufacturing/" } },
  { num: "09", slug: "guided-triage", name: "Guided Triage", body: "Multilingual (EN/SI/TA/BN) branching troubleshooting trees with a supervisor authoring tool.", link: { label: "Guided operator safety triage", href: "/blog/guided-operator-safety-triage/" } },
  { num: "10", slug: "safety-workspace", name: "Safety Workspace", body: "Incident/near-miss/hazard reporting, permit-to-work with precautions, safety training calendar, safety analytics.", link: { label: "Permit to work, defined", href: "/glossary/permit-to-work/" } },
  { num: "11", slug: "reports-and-analytics", name: "Reports & Analytics", body: "One-click PDF/Excel/Google Sheets exports across 15+ report types, cross-module KPI dashboard.", link: { label: "What is MTTR?", href: "/blog/what-is-mttr/" } },
  { num: "12", slug: "moe-dashboard", name: "MOE Dashboard", body: "Single composite Machine Overall Effectiveness score blending availability, maintenance compliance, reliability, and health, with critical-machine alerts.", link: { label: "MOE, defined", href: "/glossary/moe/" } },
];

/**
 * Hand-maintained last-modified dates for the standalone pages, for the same
 * reason as CONTENT_LAST_REVIEWED: a build-time `new Date()` would claim a
 * fresh edit on every deploy. Bump when the page's own content changes.
 */
export const PRICING_PAGE_UPDATED = "2026-10-07";
export const FEATURES_PAGE_UPDATED = "2026-10-07";

/**
 * The one-sentence definition. Answer engines lift the first declarative
 * sentence that starts with the entity name, so this leads with "Firmicore is".
 */
export const ONE_LINER =
  "Firmicore is a multi-tenant, mobile-first CMMS (computerised maintenance management system) for manufacturing and process plants, covering machine registry, breakdown tracking, work orders, preventive maintenance, spare parts, contractors, shift handovers, training, safety, and reporting in one system.";

/**
 * Key-value facts. Rendered as a two-column table on the homepage: a compact,
 * self-contained block is the shape retrieval systems chunk and quote cleanly.
 */
export const QUICK_FACTS: [string, string][] = [
  ["Product", "Firmicore, a multi-tenant CMMS for manufacturing and process plants"],
  ["Category", "Computerised maintenance management system (CMMS)"],
  ["Made by", `${LEGAL_NAME}, Kuliyapitiya, Sri Lanka`],
  ["Deployment", "Cloud-hosted on Firebase; no on-site servers"],
  ["Platform", "Web and mobile browsers, including shared floor tablets"],
  ["Pricing", "4 tiers: $29, $59 and $249 per month, plus Enterprise (contact sales); 20% off annual"],
  ["Feature modules", "20+, including 12 core modules"],
  ["Role workspaces", "9, from plant manager to trainee"],
  ["Triage languages", "English, Sinhala, Tamil, Bengali"],
  ["Typical industries", "Food & beverage, dairy, pharmaceuticals, packaging, textiles, chemicals"],
  ["Reporting", "15+ report types, exportable to PDF, Excel, and Google Sheets"],
  ["Time to first value", "Pilot on one line or site, then scale across sites"],
];

/**
 * Buyer-intent questions in the exact phrasing people type into an assistant.
 * Answers are self-contained: no "as mentioned above", no pronoun that needs
 * the surrounding page, because a quoted chunk arrives without its context.
 */
export const FAQS: { q: string; a: string }[] = [
  {
    q: "What is Firmicore?",
    a: ONE_LINER,
  },
  {
    q: "How much does Firmicore cost?",
    a: "Firmicore has four tiers. Basic is $29/month for 10 machines and 5 users, Workshop is $59/month for 100 machines and 20 users, Factory Pro is $249/month for 1,500 machines and 100 users, and Enterprise is quoted by sales for unlimited machines and users. Annual billing takes 20% off the monthly rate. Prices are indicative; confirm exact figures with sales before quoting a customer.",
  },
  {
    q: "Is Firmicore priced per machine or per user?",
    a: "Firmicore tiers are scaled by both registered machines and user seats, so a plant with many operators but a modest asset fleet is not billed per head the way a purely per-user CMMS would bill it. Each tier states its machine limit, inventory limit, preventive maintenance limit, and user limit.",
  },
  {
    q: "What makes Firmicore different from other CMMS products?",
    a: "Guided Triage. Firmicore ships branching, multilingual troubleshooting trees as a core workflow, so a floor operator can safely diagnose and react to a fault before a technician arrives, and supervisors can author the flows per machine without engineering help. Most CMMS products in this price class treat troubleshooting as an attached document rather than a guided workflow.",
  },
  {
    q: "What languages does Firmicore support?",
    a: "Guided Triage flows run in English, Sinhala, Tamil, and Bengali, which covers the operator languages common on South Asian and Southeast Asian plant floors.",
  },
  {
    q: "Who uses Firmicore?",
    a: "Manufacturing and process plants running mid-to-large equipment fleets: food and beverage, dairy, pharmaceuticals, packaging, textiles, and chemicals. Inside a plant, Firmicore has nine role-based workspaces for plant managers and admins, maintenance supervisors, technicians, store keepers, HR and training officers, safety officers, floor operators, and trainees.",
  },
  {
    q: "Can an operator report a breakdown without logging in to a desktop?",
    a: "Yes. Every machine in the registry carries a QR code, and scanning it opens breakdown reporting for that specific asset, so the report is attached to the right machine without anyone typing an asset number. This is designed for shared floor tablets where operators rotate and there is no persistent personal login.",
  },
  {
    q: "How is one plant's data kept separate from another's?",
    a: "Firmicore is multi-tenant by design: each tenant's data is isolated, and role-based access control is enforced on every route and every write, not just in the interface. The platform runs on Firebase Auth, Firestore, Storage, and Cloud Functions.",
  },
  {
    q: "How long does a Firmicore rollout take?",
    a: "The standard path is a 30-minute discovery call, a guided demo tailored to the role that will use it most, a pilot on one line or one site, then full deployment across sites with roles pre-configured. Plants go live in days rather than months because there is no on-site infrastructure to rack, patch, or maintain.",
  },
  {
    q: "Does Firmicore replace spreadsheets and messaging groups?",
    a: "That is the intended replacement. Firmicore consolidates the maintenance records that usually live in notebooks, Excel sheets, and messaging groups into one connected system, so machines, breakdowns, work orders, preventive maintenance, spares, contractors, handovers, training, and safety share the same real-time record and the same audit trail.",
  },
  {
    q: "What reports can Firmicore produce?",
    a: "More than 15 report types export in one click to PDF, Excel, or Google Sheets, alongside a cross-module KPI dashboard, a preventive maintenance compliance dashboard, and an MOE (Machine Overall Effectiveness) score that blends availability, maintenance compliance, reliability, and machine health into one composite per machine.",
  },
  {
    q: "Is there a free trial?",
    a: "Basic, Workshop, and Factory Pro start with a trial you can begin from the pricing section. Enterprise is quoted and provisioned through sales because it includes multi-site management, SSO/SAML, custom integrations, and an SLA.",
  },
];
