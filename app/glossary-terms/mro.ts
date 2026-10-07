import type { GlossaryTerm } from "../glossary-types";

export const term: GlossaryTerm = {
  slug: "mro",
  term: "MRO",
  fullName: "Maintenance, Repair and Operations",
  metaDescription:
    "MRO (maintenance, repair and operations) covers the parts, supplies and services used to keep a plant running. Definition, examples and how MRO is managed.",
  group: "Systems",
  shortDefinition:
    "MRO, or maintenance, repair and operations, covers the parts, supplies and services a plant buys to keep running, as opposed to materials that go into the product.",
  autoLink: ["MRO", "maintenance, repair and operations", "maintenance, repair, and operations"],
  body: [
    {
      heading: "What MRO means in plain language",
      paragraphs: [
        "MRO is a purchasing category. It covers everything a plant buys to keep itself running that does not end up in the finished product. Bearings, belts, filters, lubricants, fasteners, cleaning supplies, safety gear, hand tools and outside repair services are all MRO.",
        "Production materials, which become the product, are managed separately. The line is that MRO supports production but is not part of what is sold.",
      ],
    },
    {
      heading: "Why it matters in maintenance",
      paragraphs: [
        "Maintenance work depends on MRO being available at the moment it is needed. A job that waits for a part extends downtime, even when the technician and the procedure are both ready. At the same time, stock that is never used ties up money and storage space.",
        "That tension is why MRO is worth managing deliberately: knowing what is held, where it is kept, which machines use it and when it was last used.",
      ],
    },
    {
      heading: "Common MRO categories",
      paragraphs: ["Plants usually group MRO into a few families."],
      bullets: [
        "Spare parts for specific machines, such as bearings, seals and motors.",
        "Consumables used up in routine work, such as lubricants, filters and gaskets.",
        "General supplies, such as tools, cleaning materials and safety equipment.",
        "Outside services, such as contractor repairs and calibration.",
      ],
    },
    {
      heading: "MRO versus MRO inventory",
      paragraphs: [
        "MRO is the category of spending. [MRO inventory](/glossary/mro-inventory/) is the physical stock held from that category. Good MRO management links parts to the assets that use them, so a plant knows what to keep for which machine.",
      ],
    },
  ],
  firmicore:
    "Firmicore includes parts inventory with a categorized catalog, an approval workflow for requests, a stock movement log, purchase orders, supplier management and Excel import. Spare parts can be linked to the machines that use them, and low stock shows up in shift handover reports.",
  relatedTerms: ["mro-inventory", "asset-registry", "work-order", "equipment-maintenance", "asset-lifecycle-management"],
  relatedPosts: ["what-is-a-cmms", "work-order-software", "how-to-reduce-machine-downtime"],
  faq: [
    {
      q: "What does MRO stand for?",
      a: "MRO stands for maintenance, repair and operations. It is sometimes also written as maintenance, repair and overhaul in aviation and heavy industry.",
    },
    {
      q: "Are spare parts MRO?",
      a: "Yes. Spare parts bought to repair or maintain equipment are a core MRO category.",
    },
  ],
  updated: "2026-10-07",
};
