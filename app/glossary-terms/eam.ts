import type { GlossaryTerm } from "../glossary-types";

export const term: GlossaryTerm = {
  slug: "eam",
  term: "EAM",
  fullName: "Enterprise Asset Management",
  metaDescription:
    "EAM (enterprise asset management) covers the full asset lifecycle, from purchase to disposal. How it differs from a CMMS and when a plant needs each.",
  group: "Systems",
  shortDefinition:
    "EAM, or enterprise asset management, is software that manages physical assets across their full lifecycle, from acquisition and depreciation to maintenance and disposal.",
  autoLink: ["EAM", "enterprise asset management"],
  body: [
    {
      heading: "What EAM means in plain language",
      paragraphs: [
        "An EAM system tracks an asset from the day it is bought until the day it is retired. That includes the finance side, such as cost, depreciation and replacement planning, as well as maintenance. It is usually used by organizations with many sites or a large, asset-heavy estate.",
        "EAM usually includes the maintenance functions of a [CMMS](/glossary/cmms/) and adds planning, finance and lifecycle management on top.",
      ],
    },
    {
      heading: "Why it matters in maintenance",
      paragraphs: [
        "Maintenance decisions have cost consequences beyond the repair itself. Whether to keep repairing an old machine or replace it is a lifecycle question, and an EAM system holds the cost history needed to answer it.",
      ],
    },
    {
      heading: "How EAM differs from a CMMS",
      paragraphs: ["Both record maintenance. The difference is in what else they cover."],
      bullets: [
        "CMMS: focuses on maintenance operations such as work orders, preventive maintenance schedules, parts and downtime.",
        "EAM: covers the whole asset lifecycle, including procurement, depreciation, capital planning and disposal, often across several sites.",
        "Setup effort: a CMMS can often be running on a line or site quickly, while an EAM rollout is typically a larger project involving finance and procurement.",
      ],
    },
    {
      heading: "When a plant needs one or the other",
      paragraphs: [
        "A CMMS fits when the main questions are about maintenance work: what failed, what was done, whether preventive tasks were completed. An EAM fits when the plant also needs asset cost, depreciation and replacement decisions in the same system, or when it operates across many sites with shared governance.",
        "Neither is better in the abstract. A plant that buys an EAM but only uses its work order features is paying for scope it does not use, and a plant that outgrows a CMMS may need the wider lifecycle view later.",
      ],
    },
  ],
  firmicore:
    "Firmicore is a CMMS, built around the machine registry, breakdown reporting, work orders, preventive maintenance and parts inventory. It is not an EAM system. The [SAP Plant Maintenance alternative](/blog/sap-plant-maintenance-alternative/) post explains where each approach fits.",
  relatedTerms: ["cmms", "asset-lifecycle-management", "asset-registry", "mro", "work-order"],
  relatedPosts: ["sap-plant-maintenance-alternative", "what-is-a-cmms", "best-cmms-for-small-manufacturers"],
  faq: [
    {
      q: "Is EAM the same as CMMS?",
      a: "No. A CMMS manages maintenance operations. An EAM system covers the whole asset lifecycle and usually includes the maintenance functions of a CMMS.",
    },
    {
      q: "Does a single plant need an EAM?",
      a: "Not necessarily. If the questions are mostly about maintenance work and parts, a CMMS often covers them. An EAM becomes relevant when lifecycle cost and multi-site planning matter.",
    },
  ],
  updated: "2026-10-07",
};
