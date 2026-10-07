import type { GlossaryTerm } from "../glossary-types";

export const term: GlossaryTerm = {
  slug: "asset-registry",
  term: "Asset registry",
  aliases: ["asset register"],
  metaDescription:
    "An asset registry is the master list of maintainable equipment, with IDs, locations, documents and history. What to include and why it matters.",
  group: "Systems",
  shortDefinition:
    "An asset registry is the authoritative list of maintainable equipment, each entry carrying its identifier, location, documents, linked spare parts and maintenance history.",
  autoLink: ["asset registry", "asset register", "machine registry"],
  body: [
    {
      heading: "What an asset registry means in plain language",
      paragraphs: [
        "An asset registry is the master list of everything you maintain. Each machine, or other maintainable item, has one entry, and every job, fault and part that relates to it is attached to that entry. It is the foundation of any maintenance system.",
        "It is sometimes called an asset register or equipment list. The important part is that there is one list, kept current, rather than several partial ones.",
      ],
    },
    {
      heading: "Why it matters in maintenance",
      paragraphs: [
        "Every other maintenance number in the plant inherits its accuracy from this list, which is why an incomplete registry quietly invalidates the reporting built on it. A breakdown reported against a machine that is not registered cannot appear in that machine's history.",
        "A good registry also makes ordinary work faster. A technician who opens a machine's record finds the manual, the spare parts and the last repair in one place.",
      ],
    },
    {
      heading: "What each entry should hold",
      paragraphs: ["A practical entry does not need every field, but the core ones are worth getting right."],
      bullets: [
        "A unique identifier, ideally also shown on the machine itself.",
        "Location, and where the machine sits in a larger line or area.",
        "Documents such as manuals, drawings and safety procedures.",
        "Linked spare parts, so the right parts are known for each machine.",
        "A history of faults, [work orders](/glossary/work-order/) and preventive tasks.",
      ],
    },
    {
      heading: "Keeping it accurate",
      paragraphs: [
        "Registries decay when machines are added, moved or retired without anyone updating them. Make registration part of commissioning, and review the list periodically. A physical label or QR code on each machine helps link the real equipment to its record.",
      ],
    },
  ],
  firmicore:
    "Firmicore's machine registry is the starting point of the system. It holds the asset register, QR codes, documents and spare-parts links, and calculates an automatic 0 to 100 health score for each machine.",
  relatedTerms: ["cmms", "mro-inventory", "qr-triggered-reporting", "machine-health-score", "asset-lifecycle-management"],
  relatedPosts: ["what-is-a-cmms", "how-to-report-a-machine-breakdown", "/cmms-software/", "best-cmms-for-small-manufacturers"],
  faq: [
    {
      q: "Is an asset registry the same as an asset register?",
      a: "Yes, in everyday use. Both refer to the master list of maintainable equipment.",
    },
    {
      q: "Which equipment belongs in the registry?",
      a: "Anything you maintain or whose failure would matter, including supporting equipment like compressors. Start with the critical items and expand.",
    },
  ],
  updated: "2026-10-07",
};
