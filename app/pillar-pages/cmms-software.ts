import type { PillarPageData } from "../pillar-types";
import { PRICING_TIERS, machineLimit } from "../site-data";

/**
 * Tier facts are read from PRICING_TIERS so a price or limit change reaches
 * this page without an edit here. Nothing below types a price or a limit.
 */
const entryTier = PRICING_TIERS.find((tier) => tier.priceUSD !== undefined) ?? PRICING_TIERS[0];
// Shift handover and the PM compliance dashboard are not on every tier, and the tier that adds them is read from the data too.
const gatedTier = PRICING_TIERS.find((tier) => tier.features.some((feature) => /PM compliance dashboard/i.test(feature)));
const tierLimits = PRICING_TIERS.map((tier) => `${tier.name} (${machineLimit(tier).toLowerCase()})`).join(", ");

export const page: PillarPageData = {
  slug: "cmms-software",
  path: "/cmms-software/",
  label: "CMMS software",
  title: "CMMS Software Guide: Features, Pricing and Fit",
  description:
    "A practical guide to choosing CMMS software: core features, pricing models and how to match a system to your plant size.",
  h1: "CMMS software:",
  h1Accent: "what it does and how to choose one.",
  lede: "A buyer's guide for plant managers and maintenance supervisors: the features that matter, how pricing models differ, and a checklist for shortlisting.",
  published: "2026-10-07",
  updated: "2026-10-07",
  answer:
    "CMMS software is a system that records every machine a plant maintains, the work orders raised against it, the preventive maintenance schedules that keep it running, and the spare parts used along the way. It gives maintenance teams one searchable history instead of notebooks and spreadsheets, so decisions rest on records rather than memory.",
  includeSoftwareSchema: true,
  sections: [
    {
      id: "what-cmms-software-does",
      heading: "What CMMS software does",
      blocks: [
        {
          type: "p",
          text: "The full name is computerized maintenance management software, or system. Plants outside the US often write it as computerised maintenance management system, and both spellings appear on vendor sites. The category is the same either way. You will also hear it called a CMMS system, a CMMS program, or CMMS solutions, and those terms are interchangeable in practice. Different CMMS systems vary far more in how they are priced and how fast a technician can use them than in their headline feature lists.",
        },
        {
          type: "p",
          text: "The useful way to think about a CMMS is as a loop. Something breaks or comes due, the job is routed to a person, the person does it and records it, and the record changes what happens next time. Without the record, the loop restarts from memory on every shift. A simple test of whether the loop works: can you say which machine cost you the most downtime last quarter, without asking anyone to remember? The [CMMS glossary entry](/glossary/cmms/) and the longer guide, [What Is a CMMS?](/blog/what-is-a-cmms/), cover the definition in more depth.",
        },
        { type: "h3", text: "CMMS for manufacturing versus facilities" },
        {
          type: "p",
          text: "Facilities teams maintain buildings: heating and cooling, lifts, lighting, plumbing. Work usually arrives as requests from people who occupy the space, the asset list is long, and most assets are low criticality. A facilities CMMS leans on request portals, space records and vendor contracts.",
        },
        {
          type: "p",
          text: "Manufacturing teams maintain production machines, where a stoppage has a direct cost in output. That shifts what matters. CMMS for manufacturing needs fast breakdown reporting from the people standing at the machine, machine-level history, spare parts tied to specific equipment, shift handovers, and preventive schedules driven by running hours as well as dates. Many products serve both settings, so check which one the product was designed around by looking at what its default screens show.",
        },
      ],
    },
    {
      id: "core-features",
      heading: "Core features to expect in CMMS software",
      blocks: [
        {
          type: "p",
          text: "Vendors list dozens of features. Five carry the weight, and everything else depends on them being connected to each other.",
        },
        { type: "h3", text: "Work orders" },
        {
          type: "p",
          text: "A work order is the record of a job: which machine, who is assigned, what state it is in, what was done, how long it took and what was used. Breakdowns, preventive tasks and inspections should all become work orders so they can be tracked in one place. See the [work order guide](/work-order-software/) for how a job should move from request to close out.",
        },
        { type: "h3", text: "Preventive maintenance scheduling" },
        {
          type: "p",
          text: "Scheduling rules generate work before failure, either on the calendar (every 90 days) or on a meter (every 5,000 running hours). The test is not whether schedules can be created but whether overdue work is visible and whether completion is measured. [Preventive maintenance](/glossary/preventive-maintenance/) and [PM compliance](/glossary/pm-compliance/) explain the measures, and [What Is Preventive Maintenance?](/blog/what-is-preventive-maintenance/) covers building schedules technicians will actually finish.",
        },
        { type: "h3", text: "Asset registry" },
        {
          type: "p",
          text: "The [asset registry](/glossary/asset-registry/) is the list of what you maintain, ideally with a hierarchy of plant, line, machine and component. Every other record attaches to it, so an inconsistent machine list quietly damages every report. It is the dull part of implementation and the part most worth getting right first.",
        },
        { type: "h3", text: "Parts inventory" },
        {
          type: "p",
          text: "Stock levels, reorder points and consumption tied to the work order and the machine. Linking use to equipment turns stocking decisions from guesses into a reorder calculation. Look for an approval step between a technician's request and the store keeper's issue, because that is where unrecorded consumption usually starts. See [MRO inventory](/glossary/mro-inventory/) for the vocabulary.",
        },
        { type: "h3", text: "Reporting" },
        {
          type: "p",
          text: "Reports should come from the work order records, not from a separate spreadsheet. The core measures are [MTTR](/glossary/mttr/), [MTBF](/glossary/mtbf/), PM compliance and [downtime](/glossary/downtime/) by machine, plus [OEE](/glossary/oee/) where production data is available. If a vendor demo shows impressive dashboards but cannot show how a number is derived from a timestamp on a work order, treat the dashboard with caution.",
        },
        {
          type: "p",
          text: "Contractor management, shift handover, training records and safety workflows are common additions. They are worth having if you need them, but they sit on top of the five above.",
        },
      ],
    },
    {
      id: "pricing-models",
      heading: "How CMMS pricing works",
      blocks: [
        {
          type: "p",
          text: "CMMS pricing depends on what the vendor chooses to count. The four common models each suit a different plant, and none is better in every case.",
        },
        {
          type: "table",
          caption: "Common CMMS pricing models and what to check in each.",
          headers: ["Model", "What you pay for", "Cost grows with", "Tends to suit", "Check for"],
          rows: [
            ["Per user", "Each person with an account, billed monthly", "Headcount", "Small, fixed maintenance teams with few machines", "Seat caps that ration who can report; view-only users billed as full seats"],
            ["Per asset or machine", "Each machine in the registry", "Size of the asset register", "Plants where many people report faults and the fleet is moderate", "How a machine, line or component is counted"],
            ["Tiered", "A bundle of limits at a set price", "Crossing a tier boundary", "Teams that want a predictable bill", "Features such as preventive scheduling or API access held back for higher tiers"],
            ["Enterprise or quoted", "A negotiated contract", "Sites, integrations, support level", "Multi-site groups needing single sign-on or custom integrations", "Onboarding and integration services priced separately"],
          ],
        },
        {
          type: "p",
          text: "Per-user pricing is usually the cheaper route for a small, fixed team looking after a handful of machines. Per-machine pricing tends to win when many operators and supervisors need to report faults and the asset count is moderate, because adding a reporter does not change the bill. Whatever the model, ask about the costs outside the headline rate: annual-only billing, storage charges, paid onboarding and features gated by tier. The post on [per-machine versus per-user pricing](/blog/cmms-pricing-per-machine-vs-per-user/) works through the arithmetic with assumptions you can re-run for your own plant.",
        },
        { type: "h3", text: "Where Firmicore's pricing fits" },
        {
          type: "p",
          text: `Firmicore sizes plans by the machines you register. Each tier has a flat monthly price and states its machine limit with inventory, preventive maintenance and user limits alongside it, so the price is not a per-head charge. The current tiers, by machine limit, are ${tierLimits}. Plans start from ${entryTier.price}${entryTier.period} on ${entryTier.name}, and annual billing is discounted.${gatedTier ? ` Some modules, including shift handover and the PM compliance dashboard, start at the ${gatedTier.name} tier.` : ""} Figures are indicative, so check the [pricing page](/pricing/) and confirm with sales before you budget. If you have few machines and a very small team, per-user pricing from another vendor may cost less, and it is worth running both numbers.`,
        },
      ],
    },
    {
      id: "how-to-choose",
      heading: "How to choose CMMS software: a checklist",
      blocks: [
        {
          type: "p",
          text: "Feature tables mislead because most products tick the same boxes. These questions separate systems that get used from systems that get abandoned.",
        },
        {
          type: "ol",
          items: [
            "Can an operator report a breakdown from the machine in under a minute, on a shared device, without hunting for an asset number?",
            "Is preventive maintenance scheduling, calendar and meter based, included in the tier you would actually buy?",
            "Does a work order capture parts, time, root cause and sign-off, with timestamps created by the system rather than typed in?",
            "Can you import your existing machine list from a spreadsheet instead of retyping it?",
            "What does the pricing model count, and what happens to the bill if you add twenty reporters or thirty machines?",
            "Do reports show MTTR, MTBF, PM compliance and downtime per machine without an export to a spreadsheet?",
            "What does it need from your IT team: hosting, single sign-on, a VPN, an on-site database?",
            "Who does the setup, how long does it take, and is onboarding charged separately?",
            "Can you export all of your data if you leave?",
          ],
        },
        {
          type: "p",
          text: "Then test the shortlist where it will really be used. Try it in the worst-covered corner of the plant, with the person who has the least patience for software. Pilot on one line before committing the whole site. Our guide to [CMMS for small manufacturers](/blog/best-cmms-for-small-manufacturers/) applies this checklist to plants without an IT team, and the [MaintainX comparison](/blog/maintainx-alternative/) sets out where a per-user product is the better fit and where a per-machine one is.",
        },
      ],
    },
    {
      id: "implementation",
      heading: "CMMS implementation steps",
      blocks: [
        {
          type: "p",
          text: "Most failed rollouts fail on scope, not software. A plant tries to load every machine, every checklist and every user in week one. A smaller sequence works better.",
        },
        {
          type: "ol",
          items: [
            "Clean the machine list. One name per machine, a consistent hierarchy, and a decision about whether components are tracked separately.",
            "Choose a pilot line. Pick one with enough breakdowns to generate real records within weeks.",
            "Load preventive schedules for critical machines only. A short schedule that gets completed beats a complete one that does not.",
            "Set roles and access before go-live, so supervisors, technicians and store keepers each see their own work.",
            "Put identifiers on the machines and retire the paper log on the pilot line the same day. Running both in parallel teaches people that the software is optional.",
            "Review the first month of records weekly with the supervisors, and fix the data problems you find.",
            "Extend line by line once the pilot line's reports are being used in daily meetings.",
          ],
        },
        {
          type: "p",
          text: "For the floor-level side of this, including shared tablets and operators who do not have accounts, see the rollout section of the [maintenance management software guide](/maintenance-management-software/) and the post on [how to report a machine breakdown](/blog/how-to-report-a-machine-breakdown/).",
        },
      ],
    },
    {
      id: "when-you-need-eam",
      heading: "When you need EAM instead of a CMMS",
      blocks: [
        {
          type: "p",
          text: "[EAM](/glossary/eam/), or enterprise asset management, covers the whole [asset lifecycle](/glossary/asset-lifecycle-management/): purchase, depreciation, capital planning, maintenance and disposal, often across many sites. Maintenance is one module inside it. A CMMS is narrower and goes deeper on the maintenance work itself.",
        },
        {
          type: "p",
          text: "A CMMS is the right tool when the question is how to keep machines running and prove what was done. EAM becomes the better answer when the question is lifecycle cost and capital replacement across a large asset base, or when asset financials must live in the same system as maintenance. Very large multi-site enterprises that have already standardized on an ERP such as SAP often use that suite's maintenance module, and for them that is frequently the sensible choice. The [SAP Plant Maintenance comparison](/blog/sap-plant-maintenance-alternative/) sets out the trade-offs, and the [maintenance management software guide](/maintenance-management-software/) compares spreadsheets, ERP modules and dedicated systems side by side.",
        },
      ],
    },
    {
      id: "how-firmicore-handles-this",
      heading: "How Firmicore handles this",
      blocks: [
        {
          type: "p",
          text: "Firmicore is a CMMS for manufacturing and process plants. Every machine in the registry carries a QR code, and scanning it opens breakdown reporting for that specific machine, so floor staff can report without logging in to a desktop and without typing an asset number. Operators can also work through guided triage while they wait for a technician.",
        },
        {
          type: "p",
          text: "Work orders run from Draft to Closed with multi-technician checklists, time tracking, parts requests and a supervisor sign-off queue. Preventive maintenance runs on calendar or meter schedules with a compliance dashboard. Parts requests go through an approval workflow that includes the store keeper, and shift handover reports are compiled from open work orders and breakdowns. Email and in-app notifications keep people informed, and role-based access gives each of the nine role workspaces only what it needs.",
        },
        {
          type: "p",
          text: "Pricing is sized by machine count, as described above. See every module on the [features page](/features/), compare tiers on the [pricing page](/pricing/), or read how [QR reporting compares with paper logs](/blog/why-qr-reporting-beats-paper-logs/).",
        },
      ],
    },
  ],
  faq: [
    {
      q: "What is a CMMS?",
      a: "A CMMS is a computerized maintenance management system: software that records a plant's machines, the work orders raised against them, preventive maintenance schedules and spare parts use in one connected system. It replaces notebooks and spreadsheets with a searchable maintenance history.",
    },
    {
      q: "What does CMMS stand for?",
      a: "CMMS stands for computerized maintenance management system. UK and European writing often spells it computerised maintenance management system. Some vendors say computerized maintenance management software. All of them describe the same category of product.",
    },
    {
      q: "How much does CMMS software cost?",
      a: `It depends on what the vendor counts. Per-user plans charge for each account, per-machine plans charge for each registered machine, tiered plans bundle limits at a set price, and enterprise plans are quoted. Firmicore is sized by machines and starts from ${entryTier.price}${entryTier.period} on its ${entryTier.name} tier. Prices are indicative, so confirm with sales and ask any vendor about onboarding and annual-billing terms.`,
    },
    {
      q: "What is the difference between a CMMS and an ERP?",
      a: "An ERP is a company-wide system for finance, purchasing, inventory and operations, and some include a maintenance module. A CMMS is built only for maintenance: machines, work orders, preventive schedules and parts, with an interface designed for technicians and operators. Plants already standardized on an ERP sometimes use its module, and others add a dedicated CMMS.",
    },
    {
      q: "Do technicians and operators need a login?",
      a: "In Firmicore, technicians use an account so the system records who did the work and sees their own work orders. Floor operators who only need to report a breakdown can scan the machine's QR code on a shared floor tablet, with no desktop login and no persistent personal login.",
    },
    {
      q: "Is CMMS software only for large plants?",
      a: "No. The better test is whether you can answer which machine caused the most downtime last quarter without relying on memory. A plant with a handful of machines and one maintainer may be fine on a spreadsheet, but once several people raise and fix faults, a CMMS pays for itself in cleaner records.",
    },
  ],
  keepReading: [
    { label: "Maintenance management software", href: "/maintenance-management-software/" },
    { label: "Work order software", href: "/work-order-software/" },
    { label: "MaintainX alternative: per-machine CMMS", href: "/blog/maintainx-alternative/" },
    { label: "What Is a CMMS?", href: "/blog/what-is-a-cmms/" },
    { label: "Per-machine versus per-user pricing", href: "/blog/cmms-pricing-per-machine-vs-per-user/" },
    { label: "CMMS for regulated manufacturing", href: "/blog/cmms-for-regulated-manufacturing/" },
    { label: "CMMS glossary entry", href: "/glossary/cmms/" },
  ],
  ctaHeading: "See how Firmicore fits your plant.",
  ctaBody: "Book a short walkthrough sized against your machine count, or compare plans first.",
};
