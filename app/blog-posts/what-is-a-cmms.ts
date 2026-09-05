import type { BlogPost } from "../blog-data";

export const post: BlogPost = {
  title: "What Is a CMMS? The Complete Guide for Manufacturing Teams",
  seoTitle: "What Is a CMMS? A Guide for Manufacturers",
  slug: "what-is-a-cmms",
  category: "Guides",
  read: "12 min",
  date: "July 17, 2026",
  author: "Tharindu Jayasekara",
  role: "Founder, Lumora Ventures",
  excerpt:
    "A computerised maintenance management system is the record of what your machines do, who fixes them, and what it costs. This is the complete guide for manufacturing teams.",
  metaDescription:
    "What a CMMS is, what its core modules do, how it differs from EAM and ERP maintenance modules, and how to evaluate one without being sold to.",
  deck: "Everything a manufacturing team needs to understand before evaluating maintenance software: what a CMMS is, what the core modules actually do, how it differs from EAM and ERP maintenance modules, and how to evaluate one without being sold to.",
  figure: "Fig. 01 - The four core CMMS modules and how data flows between them.",
  takeaways: [
    "CMMS stands for computerised maintenance management system: software that records assets, work orders, preventive maintenance schedules, and parts.",
    "The four core modules are the asset registry, work order management, preventive maintenance scheduling, and inventory - and they only produce value when connected.",
    "A CMMS is a maintenance operations tool. EAM extends across the whole asset lifecycle; an ERP maintenance module is a component of a corporate system of record.",
    "Pricing models differ fundamentally: per-user pricing scales with headcount, per-machine pricing scales with your asset register.",
    "The strongest signal that you need one is not company size - it is that nobody can answer which machine cost you the most downtime last quarter.",
  ],
  intro: [
    "This is the hub page for everything else we write about maintenance software. If you are new to the category, start here; the linked posts go deeper on each piece.",
  ],
  sections: [
    {
      id: "what-cmms-stands-for",
      heading: "What CMMS stands for and what it does",
      blocks: [
        {
          type: "p",
          text: "CMMS stands for computerised maintenance management system. It is software that keeps a structured record of the physical assets you maintain, the work done on them, the schedule of work planned, and the parts consumed doing it.",
        },
        {
          type: "p",
          text: "That definition sounds administrative, and the administrative framing is why so many implementations fail. The useful way to think about a CMMS is as an operating loop: something breaks or is due, the work gets routed to someone, the work gets done and recorded, and the record changes what happens next time. A CMMS that only files records is a filing cabinet with a subscription fee.",
        },
        {
          type: "callout",
          label: "The test that matters",
          text: "A CMMS is working if the answer to 'which machine failed most often last quarter, and what did it cost us' takes thirty seconds and does not require anyone's memory.",
        },
      ],
    },
    {
      id: "core-modules",
      heading: "Core CMMS modules explained",
      blocks: [
        {
          type: "steps",
          items: [
            {
              title: "Asset registry",
              text: "The list of what you maintain, with hierarchy: plant, line, machine, and component. Every other record attaches to this, which is why an inconsistent asset register poisons every report you will ever run. Get this right first, even if it is boring.",
            },
            {
              title: "Work order management",
              text: "The record of work: what needs doing, who it is assigned to, what state it is in, what was actually done, and how long it took. Breakdown reports, preventive tasks, and inspections all become work orders so they can be tracked in one place.",
            },
            {
              title: "Preventive maintenance scheduling",
              text: "Rules that generate work before failure - either calendar-based (every 90 days) or meter-based (every 5,000 running hours). The scheduling engine is what turns maintenance from reactive to planned.",
            },
            {
              title: "Inventory and spare parts",
              text: "Stock levels, reorder points, and consumption tied to specific work orders and machines. Because consumption is linked to assets, stocking decisions stop being guesses about what might be needed.",
            },
          ],
        },
        {
          type: "p",
          text: "Most vendors add reporting, contractor management, and mobile access on top. Those matter, but they are downstream: none of them produce reliable output unless the four modules above are connected and the asset registry is clean.",
        },
      ],
    },
    {
      id: "cmms-vs-eam-vs-erp",
      heading: "CMMS vs EAM vs ERP maintenance modules",
      blocks: [
        {
          type: "p",
          text: "These three categories overlap enough that vendors use the terms loosely. The practical difference is scope and design centre.",
        },
        {
          type: "table",
          caption: "Three categories, three different design centres.",
          headers: ["", "CMMS", "EAM", "ERP maintenance module"],
          rows: [
            ["Scope", "Maintenance operations", "Full asset lifecycle including acquisition and disposal", "Maintenance as one module in a corporate system of record"],
            ["Primary user", "Technicians, supervisors, operators", "Asset managers and reliability engineers", "Maintenance planners working inside the ERP"],
            ["Typical buyer", "Single plant or small group", "Asset-intensive enterprise", "Company already committed to the ERP suite"],
            ["Time to value", "Days to weeks", "Months", "Months, with integrator involvement"],
            ["Strength", "Floor-level speed and adoption", "Lifecycle cost and reliability analysis", "Native finance and procurement integration"],
          ],
        },
        {
          type: "p",
          text: "If your company already runs SAP for finance and procurement, the ERP-module option deserves genuine consideration and the trade-offs are covered in detail in our SAP Plant Maintenance comparison. If your problem is that nobody records breakdowns properly, none of the three fixes that by itself - but a CMMS is the only one designed around trying.",
        },
      ],
    },
    {
      id: "pricing-models",
      heading: "How CMMS pricing models differ",
      blocks: [
        {
          type: "p",
          text: "Pricing is not a commercial detail in this category. It shapes who is allowed to use the system, which shapes the quality of the data, which determines whether the software works at all.",
        },
        {
          type: "ul",
          items: [
            "Per-user pricing charges per named account per month. Cost scales with headcount. It is the market default and it creates a direct financial incentive to limit how many people can report a breakdown.",
            "Per-machine pricing charges by registered asset, with unlimited users. Cost scales with the asset register - the thing maintenance work is actually attached to - and makes floor-wide reporting economically free.",
            "Tiered feature gating cuts across both. Preventive maintenance scheduling, API access, and custom reporting are frequently reserved for higher tiers, so always price the tier that contains the features you need.",
            "One-off costs - onboarding, data migration, training - are commonly quoted separately and can exceed the first year of licensing.",
          ],
        },
        {
          type: "p",
          text: "The full worked comparison across three factory sizes is in our post on per-machine versus per-user CMMS pricing.",
        },
      ],
    },
    {
      id: "who-needs-a-cmms",
      heading: "Who needs a CMMS",
      blocks: [
        {
          type: "p",
          text: "Company size is a weak signal. These are stronger ones.",
        },
        {
          type: "ul",
          items: [
            "You cannot say which machine caused the most downtime last quarter without asking someone to remember.",
            "Preventive maintenance exists as a schedule on a wall or in a spreadsheet, and compliance against it is not measured.",
            "Spare parts are stocked by intuition, and you have both stockouts and dead stock at the same time.",
            "Breakdown reports arrive verbally and get written down later, if at all.",
            "You are being asked for maintenance records by a customer audit or a regulator and assembling them is a project.",
            "The same failure keeps recurring and nobody can prove it, because each instance was recorded differently.",
          ],
        },
        {
          type: "p",
          text: "Two or more of those and the question is no longer whether to adopt a CMMS - it is which constraints on your floor decide the choice.",
        },
      ],
    },
    {
      id: "how-to-evaluate",
      heading: "How to evaluate a CMMS: a buyer's checklist",
      blocks: [
        {
          type: "p",
          text: "Feature-list comparisons reward the vendor with the longest feature list, which is not the same as the best fit. Evaluate against your floor conditions instead.",
        },
        {
          type: "ol",
          items: [
            "How does a breakdown get reported on your floor specifically - including on the night shift, in the area where phones are banned, by an operator who does not read English?",
            "What does it cost to give one more person the ability to report? If the answer is a paid seat, model that cost at full plant adoption before you sign.",
            "How long from contract to a real work order closed on a real machine? Ask for a one-line pilot, not a demo.",
            "Can you change a preventive maintenance checklist yourself, or does it require a support ticket?",
            "Does the mobile experience work offline? Plant Wi-Fi coverage is worse than the site survey claims.",
            "How does data get out? Confirm export and API access on your tier, so the asset history stays portable.",
            "What does the audit trail look like - who reported, who acknowledged, who repaired, with system timestamps rather than typed ones?",
            "Does the pricing model still make sense in three years at your projected headcount and machine count?",
          ],
        },
        {
          type: "callout",
          label: "Firmicore note",
          text: "Run the trial on your worst line, not your best one. The line that fails often will tell you in a week whether the tool fits; the well-behaved line will tell you nothing for a month.",
        },
      ],
    },
    {
      id: "faq",
      heading: "Frequently asked questions",
      blocks: [
        {
          type: "faq",
          items: [
            {
              q: "What does CMMS stand for?",
              a: "CMMS stands for computerised maintenance management system - software that records maintenance assets, work orders, preventive maintenance schedules, and spare parts consumption in one connected system.",
            },
            {
              q: "What is the difference between a CMMS and an EAM?",
              a: "A CMMS focuses on maintenance operations: work orders, schedules, and repairs. An EAM (enterprise asset management) system covers the full asset lifecycle including acquisition, depreciation, and disposal, and is typically bought by asset-intensive enterprises.",
            },
            {
              q: "How much does a CMMS cost?",
              a: "It depends on the pricing model. Per-user vendors charge per account per month, so cost scales with headcount; per-machine vendors charge by registered asset with unlimited users. Entry tiers are cheap but commonly gate preventive maintenance scheduling and reporting, so price the tier that contains what you need.",
            },
            {
              q: "Do small factories need a CMMS?",
              a: "Size is a weak indicator. The stronger signal is whether you can answer basic maintenance questions - which machine failed most, what it cost, whether PM was done - without relying on someone's memory. If you cannot, a CMMS pays for itself regardless of headcount.",
            },
          ],
        },
      ],
    },
  ],
  related: ["cmms-pricing-per-machine-vs-per-user", "work-order-software", "what-is-preventive-maintenance"],
};
