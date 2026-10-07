import type { GlossaryTerm } from "../glossary-types";

export const term: GlossaryTerm = {
  slug: "mro-inventory",
  term: "MRO inventory",
  metaDescription:
    "MRO inventory is the stock of spare parts and consumables held to support maintenance, not for sale. Why it is under-held and how to manage it.",
  group: "Systems",
  shortDefinition:
    "MRO inventory is the stock of spare parts and consumables held to support maintenance, repair and operations work rather than to be sold.",
  autoLink: ["MRO inventory", "spare parts inventory", "parts inventory"],
  body: [
    {
      heading: "What MRO inventory means in plain language",
      paragraphs: [
        "MRO inventory is the storeroom behind the maintenance team: bearings, belts, seals, filters, fuses, lubricants and the other things that get used up or replaced. None of it is sold. It exists so that when a machine needs a part, the part is on the shelf.",
        "It is the stock side of [MRO](/glossary/mro/), which is the wider category of maintenance purchasing.",
      ],
    },
    {
      heading: "Why it matters in maintenance",
      paragraphs: [
        "The cost of MRO stock is visible on a balance sheet. The cost of a stockout that idles a line is not, which is why MRO is chronically under-held. A part that costs little can stop a high-value line for days if it must be ordered and shipped.",
        "Overstocking has its own cost: money and shelf space tied up in parts that never get used, and items that age or get lost. The goal is the right parts, not the most parts.",
      ],
    },
    {
      heading: "Managing it well",
      paragraphs: ["A few habits make the biggest difference."],
      bullets: [
        "Link parts to the machines that use them, so critical spares are known.",
        "Set a minimum level for items that would stop production if missing.",
        "Log every movement in and out, so stock counts match the shelf.",
        "Review slow-moving items and decide whether to keep them.",
      ],
    },
    {
      heading: "Criticality drives stocking",
      paragraphs: [
        "Stock decisions should follow the consequence of a failure. Keep spares on site for critical machines and for parts with long delivery times, and rely on local suppliers for common, quickly available items. The [asset registry](/glossary/asset-registry/) is where those links are held.",
      ],
    },
  ],
  firmicore:
    "Firmicore's parts inventory has a categorized catalog, a multi-stage approval workflow, a stock movement log, purchase orders, supplier management and Excel import. Low-stock alerts are carried into shift handover reports.",
  relatedTerms: ["mro", "asset-registry", "work-order", "shift-handover", "equipment-maintenance"],
  relatedPosts: ["what-is-a-cmms", "how-to-reduce-machine-downtime", "/cmms-software/", "best-cmms-for-small-manufacturers"],
  faq: [
    {
      q: "What is the difference between MRO and MRO inventory?",
      a: "MRO is the category of supplies and services bought to keep a plant running. MRO inventory is the physical stock of those supplies you hold.",
    },
    {
      q: "How do you decide which spares to hold?",
      a: "Start with the machines that would stop production if they failed, then stock the parts with long lead times or no easy substitute.",
    },
  ],
  updated: "2026-10-07",
};
