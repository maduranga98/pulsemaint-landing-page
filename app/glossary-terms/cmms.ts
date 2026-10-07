import type { GlossaryTerm } from "../glossary-types";

export const term: GlossaryTerm = {
  slug: "cmms",
  term: "CMMS",
  fullName: "Computerized Maintenance Management System",
  metaDescription:
    "CMMS (computerized maintenance management system): what it is, what it records, why plants use one, and where to read the full guide.",
  group: "Systems",
  shortDefinition:
    "A CMMS, or computerized maintenance management system, is software that records maintenance assets, work orders, preventive maintenance schedules and spare parts use in one connected system.",
  autoLink: ["CMMS", "computerized maintenance management system", "computerised maintenance management system"],
  body: [
    {
      heading: "What a CMMS means in plain language",
      paragraphs: [
        "A CMMS is the system of record for maintenance. It replaces notebooks, spreadsheets and chat threads with one place that holds the list of machines, the jobs raised against them, the scheduled tasks that prevent failures, and the parts used along the way.",
        "The core records are the asset list, work orders, preventive maintenance schedules, and parts inventory. Reports and dashboards are built from those records.",
      ],
    },
    {
      heading: "Why it matters in maintenance",
      paragraphs: [
        "The test of whether a plant needs a CMMS is not headcount. It is whether questions such as which machine failed most, what it cost, and whether preventive work was done can be answered without relying on someone's memory.",
        "Once those answers live in one system, metrics like [MTTR](/glossary/mttr/) and [PM compliance](/glossary/pm-compliance/) can be calculated from real records instead of estimated.",
      ],
    },
    {
      heading: "Read the full guide",
      paragraphs: [
        "This page is the short definition. For selection criteria, features and rollout, read the long guide, [What Is a CMMS?](/blog/what-is-a-cmms/). If you are weighing a CMMS against a larger system, see [EAM](/glossary/eam/) for the difference.",
      ],
    },
  ],
  firmicore:
    "Firmicore is a CMMS for manufacturing and process plants. It covers the machine registry, breakdown reporting by QR code, work orders, preventive maintenance scheduling, parts inventory and shift handover in one system. Floor staff can report a breakdown by scanning a machine's QR code, without a desktop login.",
  relatedTerms: ["eam", "work-order", "preventive-maintenance", "asset-registry", "mro-inventory"],
  relatedPosts: ["what-is-a-cmms", "/cmms-software/", "best-cmms-for-small-manufacturers"],
  faq: [
    {
      q: "What does CMMS stand for?",
      a: "CMMS stands for computerized maintenance management system, and UK writing often spells it with an s.",
    },
    {
      q: "What is the difference between a CMMS and an EAM?",
      a: "A CMMS focuses on maintenance operations. An EAM manages the full asset lifecycle, including finance, and typically includes maintenance as one part.",
    },
  ],
  updated: "2026-10-07",
};
