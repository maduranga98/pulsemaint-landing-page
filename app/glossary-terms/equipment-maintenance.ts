import type { GlossaryTerm } from "../glossary-types";

export const term: GlossaryTerm = {
  slug: "equipment-maintenance",
  term: "Equipment maintenance",
  metaDescription:
    "Equipment maintenance covers keeping all plant equipment in working order, from machines to utilities. Definition, scope, strategies and what to record.",
  group: "Strategy",
  shortDefinition:
    "Equipment maintenance is the planned and unplanned work that keeps all of a site's equipment, production and supporting, in safe, working condition.",
  autoLink: ["equipment maintenance"],
  body: [
    {
      heading: "What equipment maintenance means in plain language",
      paragraphs: [
        "Equipment maintenance is the broad term for looking after everything a plant depends on. That includes production machines, and also the equipment around them, such as compressors, boilers, chillers, conveyors, forklifts and handheld tooling.",
        "It describes the program as a whole: which equipment is covered, which strategy applies to each item, who does the work and how it is recorded. The hands-on work on production lines is covered in [machine maintenance](/glossary/machine-maintenance/).",
      ],
    },
    {
      heading: "Why it matters in maintenance",
      paragraphs: [
        "Supporting equipment is easy to overlook until it fails. A compressor stopping can halt every line it feeds, even though no production machine is faulty. A complete equipment list makes sure those dependencies get the same attention as the machines you can see.",
        "A program also forces decisions. Not every item deserves the same effort, and writing down which equipment is critical is what lets you spend time where a failure would hurt most.",
      ],
    },
    {
      heading: "Choosing a strategy per item",
      paragraphs: ["The usual approach is to match the strategy to the consequence of failure."],
      bullets: [
        "Critical equipment: [preventive](/glossary/preventive-maintenance/) and [condition-based](/glossary/condition-based-maintenance/) maintenance.",
        "Equipment with a known wear pattern: [scheduled maintenance](/glossary/scheduled-maintenance/) by calendar or usage.",
        "Cheap, easily replaced items: run to failure, as a deliberate choice.",
      ],
    },
    {
      heading: "What to record",
      paragraphs: [
        "Every item needs an entry in an [asset registry](/glossary/asset-registry/) with an identifier, location, documents and linked spare parts. Work orders are then raised against that entry, so the history builds up per item instead of living in notebooks.",
      ],
    },
  ],
  firmicore:
    "Firmicore keeps equipment in a machine registry, with QR codes, documents and linked spare parts, and raises work orders and preventive maintenance schedules against each entry. Parts inventory and shift handover sit in the same system, so the history of an item is in one place.",
  relatedTerms: ["machine-maintenance", "asset-registry", "preventive-maintenance", "mro", "asset-lifecycle-management"],
  relatedPosts: ["what-is-a-cmms", "what-is-preventive-maintenance", "best-cmms-for-small-manufacturers"],
  faq: [
    {
      q: "Is equipment maintenance the same as machine maintenance?",
      a: "They overlap. Machine maintenance usually means production machines. Equipment maintenance includes those and also utilities, tooling and other supporting equipment.",
    },
    {
      q: "Where should a plant start?",
      a: "Start with a complete list of equipment and a ranking of which items would stop production if they failed. Strategies and schedules follow from that ranking.",
    },
  ],
  updated: "2026-10-07",
};
