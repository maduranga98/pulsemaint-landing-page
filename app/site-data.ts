/**
 * Single source of truth for the facts that answer engines quote.
 *
 * AEO/GEO note: every fact below is rendered as visible page text AND emitted
 * as schema.org JSON-LD AND exposed in /llms.txt. Keeping one module means the
 * three surfaces can never drift, which is what makes a citation trustworthy.
 */

export const SITE_URL = "https://firmicore.com";
export const SITE_NAME = "Firmicore";
export const LEGAL_NAME = "Lumora Ventures Pvt Ltd";
export const CONTACT_EMAIL = "info@lumoraventures.com";
export const CONTACT_PHONE = "+94-71-999-8500";

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
    q: "Does Firmicore replace spreadsheets and WhatsApp groups?",
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

/**
 * Definitions for /glossary. Answer engines answer far more definitional
 * queries ("what is MTTR") than commercial ones, and a definition page that
 * cites its own product pages is the cheapest route into those answers.
 */
export type GlossaryTerm = {
  term: string;
  slug: string;
  group: string;
  /** One sentence, starting with the term. Kept quotable on its own. */
  definition: string;
  /** Second-order detail: the caveat or formula that makes the answer useful. */
  detail?: string;
  /** Internal link to the post that covers the term in depth. */
  readMore?: { label: string; href: string };
};

export const GLOSSARY: GlossaryTerm[] = [
  {
    term: "CMMS",
    slug: "cmms",
    group: "Systems",
    definition:
      "A CMMS (computerised maintenance management system) is software that records maintenance assets, work orders, preventive maintenance schedules, and spare-parts consumption in one connected system.",
    detail:
      "The test of whether a plant needs one is not headcount: it is whether questions like which machine failed most, what it cost, and whether PM was done can be answered without relying on someone's memory.",
    readMore: { label: "What is a CMMS?", href: "/blog/what-is-a-cmms/" },
  },
  {
    term: "EAM",
    slug: "eam",
    group: "Systems",
    definition:
      "An EAM (enterprise asset management) system covers the full asset lifecycle, including acquisition, depreciation, and disposal, where a CMMS covers maintenance operations only.",
    detail: "EAM is typically bought by asset-intensive enterprises that need the finance side of the asset, not just its repair history.",
  },
  {
    term: "Work order",
    slug: "work-order",
    group: "Workflow",
    definition:
      "A work order is the record of a single maintenance job: what is to be done, on which asset, by whom, with which parts, and what was found when it was done.",
    detail:
      "A work order without a sign-off step is a to-do list. The sign-off is what turns it into an audit trail.",
    readMore: { label: "Work order software", href: "/blog/work-order-software/" },
  },
  {
    term: "Preventive maintenance (PM)",
    slug: "preventive-maintenance",
    group: "Strategy",
    definition:
      "Preventive maintenance is work scheduled by elapsed time or by meter reading to prevent a failure, rather than work triggered by a failure that already happened.",
    detail: "Calendar-based PM is simpler to run; meter-based PM tracks actual usage and avoids servicing an idle machine on schedule.",
    readMore: { label: "What is preventive maintenance?", href: "/blog/what-is-preventive-maintenance/" },
  },
  {
    term: "Reactive maintenance",
    slug: "reactive-maintenance",
    group: "Strategy",
    definition:
      "Reactive maintenance, also called run-to-failure, is repair work that starts only after an asset has already failed.",
    detail: "It is not automatically wrong. It is wrong when it is the default for critical assets rather than a deliberate choice for cheap, non-critical ones.",
  },
  {
    term: "Condition-based maintenance",
    slug: "condition-based-maintenance",
    group: "Strategy",
    definition:
      "Condition-based maintenance triggers work from an observed asset condition, such as vibration, temperature, or a health score crossing a threshold, rather than from a fixed schedule.",
  },
  {
    term: "MTTR",
    slug: "mttr",
    group: "Metrics",
    definition:
      "MTTR (mean time to repair) is total downtime across incidents divided by the number of incidents, measured over a defined period and asset set.",
    detail:
      "The clock should start at failure, not at technician arrival. Starting it late is the most common way plants flatter the number without improving anything.",
    readMore: { label: "What is MTTR?", href: "/blog/what-is-mttr/" },
  },
  {
    term: "MTBF",
    slug: "mtbf",
    group: "Metrics",
    definition:
      "MTBF (mean time between failures) is total operating time divided by the number of failures, and measures reliability rather than recovery speed.",
    detail: "MTBF and MTTR answer different questions: MTBF asks how often an asset fails, MTTR asks how long it takes to get back.",
  },
  {
    term: "MTTA",
    slug: "mtta",
    group: "Metrics",
    definition:
      "MTTA (mean time to acknowledge) is the average time between a fault being reported and someone accepting responsibility for it.",
    detail: "A high MTTA with a low repair time means the problem is dispatch and alerting, not the technicians.",
  },
  {
    term: "Unplanned downtime",
    slug: "unplanned-downtime",
    group: "Metrics",
    definition:
      "Unplanned downtime is production time lost to a failure that was not scheduled, measured from the moment output stops to the moment it resumes.",
    detail:
      "The reported figure is almost always lower than the real one, because short stops, slow restarts, and scrap made during the ramp back up rarely get logged.",
    readMore: { label: "The real cost of unplanned downtime", href: "/blog/the-real-cost-of-unplanned-downtime/" },
  },
  {
    term: "OEE",
    slug: "oee",
    group: "Metrics",
    definition:
      "OEE (overall equipment effectiveness) is availability multiplied by performance multiplied by quality, expressed as a single percentage of perfect production.",
  },
  {
    term: "MOE",
    slug: "moe",
    group: "Metrics",
    definition:
      "MOE (Machine Overall Effectiveness) is the Firmicore composite score that blends availability, maintenance compliance, reliability, and machine health into one number per machine.",
    detail: "Where OEE is a production metric, MOE is a maintenance metric: it is designed to flag which machine the maintenance team should look at next.",
  },
  {
    term: "Machine health score",
    slug: "machine-health-score",
    group: "Metrics",
    definition:
      "A machine health score is a 0-100 rating derived from an asset's failure history, maintenance compliance, and open issues, used to rank risk across a fleet.",
  },
  {
    term: "PM compliance",
    slug: "pm-compliance",
    group: "Metrics",
    definition:
      "PM compliance is the percentage of preventive maintenance tasks completed within their scheduled window over a period.",
    detail: "Compliance measured without a window is meaningless, because a PM done two months late still counts as done.",
  },
  {
    term: "Maintenance backlog",
    slug: "maintenance-backlog",
    group: "Workflow",
    definition:
      "Maintenance backlog is the total volume of identified but incomplete work, usually expressed in crew-weeks rather than job count.",
    detail: "A backlog of zero is a warning sign, not a triumph: it usually means work is not being identified.",
  },
  {
    term: "Guided triage",
    slug: "guided-triage",
    group: "Workflow",
    definition:
      "Guided triage is a branching troubleshooting flow that walks an operator through safe diagnostic steps one question at a time, so a fault can be narrowed or made safe before a technician arrives.",
    detail:
      "On a plant floor it has to survive shared devices, gloves, poor light, and weak connectivity near the machines, so each step has to be a single screen that queues offline.",
    readMore: { label: "Guided operator safety triage", href: "/blog/guided-operator-safety-triage/" },
  },
  {
    term: "Shift handover",
    slug: "shift-handover",
    group: "Workflow",
    definition:
      "A shift handover is the structured transfer of open maintenance context from the outgoing crew to the incoming one: pending work orders, ongoing breakdowns, low stock, and machines to watch.",
    detail: "Handovers done verbally lose the items nobody thought to mention, which are reliably the items that cause the next incident.",
  },
  {
    term: "Permit to work",
    slug: "permit-to-work",
    group: "Safety",
    definition:
      "A permit to work is a documented authorisation that a specific high-risk job may proceed, listing the precautions taken and the person who accepted them.",
  },
  {
    term: "Near miss",
    slug: "near-miss",
    group: "Safety",
    definition:
      "A near miss is an incident that could have caused injury or damage but did not, recorded so the underlying condition can be fixed before it repeats with a worse outcome.",
  },
  {
    term: "Lockout/tagout (LOTO)",
    slug: "lockout-tagout",
    group: "Safety",
    definition:
      "Lockout/tagout is the practice of physically isolating and locking an energy source before maintenance work, with a tag identifying who applied the lock.",
    detail: "Isolation instructions only work when they name the actual isolation point for that asset; generic safety text is ignored because it is identical everywhere.",
  },
  {
    term: "Root cause",
    slug: "root-cause",
    group: "Workflow",
    definition:
      "A root cause is the underlying condition whose removal prevents a failure from recurring, as distinct from the visible symptom that stopped the machine.",
    detail: "Root-cause fields are only useful when the option list is short and specific to the plant; a free-text box produces a hundred spellings of the same cause.",
  },
  {
    term: "Asset registry",
    slug: "asset-registry",
    group: "Systems",
    definition:
      "An asset registry is the authoritative list of maintainable equipment, each entry carrying its identifier, location, documents, linked spare parts, and maintenance history.",
    detail: "Every other maintenance number in the plant inherits its accuracy from this list, which is why an incomplete registry quietly invalidates the reporting built on it.",
  },
  {
    term: "MRO inventory",
    slug: "mro-inventory",
    group: "Systems",
    definition:
      "MRO (maintenance, repair, and operations) inventory is the stock of spare parts and consumables held to support maintenance work rather than to be sold.",
    detail: "The cost of MRO stock is visible on a balance sheet; the cost of a stockout that idles a line is not, which is why MRO is chronically under-held.",
  },
  {
    term: "QR-triggered reporting",
    slug: "qr-triggered-reporting",
    group: "Workflow",
    definition:
      "QR-triggered reporting attaches a fault report to the correct asset by scanning a code fixed to the machine, removing the step where an operator has to identify the asset by number.",
    detail: "Misattributed reports are the main reason paper and chat-based logs cannot produce per-machine history, so removing the typing step is what makes the history usable.",
    readMore: { label: "Why QR reporting beats paper logs", href: "/blog/why-qr-reporting-beats-paper-logs/" },
  },
  {
    term: "Multi-tenancy",
    slug: "multi-tenancy",
    group: "Systems",
    definition:
      "Multi-tenancy is an architecture where one application instance serves many customer organisations while keeping each organisation's data fully isolated from the others.",
    detail: "Isolation has to be enforced on every read and write on the server, not by hiding data in the interface.",
  },
];

export const GLOSSARY_GROUPS = ["Systems", "Strategy", "Metrics", "Workflow", "Safety"] as const;
