import type { GlossaryTerm } from "../glossary-types";

export const term: GlossaryTerm = {
  slug: "maintenance-backlog",
  term: "Maintenance backlog",
  metaDescription:
    "Maintenance backlog is identified but incomplete work, usually measured in crew-weeks. Formula, worked example and why a backlog of zero is a warning sign.",
  group: "Workflow",
  shortDefinition:
    "Maintenance backlog is the total volume of identified but incomplete work, usually expressed in crew-weeks rather than job count.",
  autoLink: ["maintenance backlog", "backlog"],
  body: [
    {
      heading: "What maintenance backlog means in plain language",
      paragraphs: [
        "The backlog is the pile of work that has been found and approved but not yet done. It includes repairs waiting for parts or a stop, inspection findings and overdue tasks. Counting jobs is misleading because a job can be ten minutes or ten days, so the backlog is measured in labor hours or crew-weeks.",
        "Crew-weeks express the backlog against capacity: how long the available crew would need to clear everything if no new work arrived.",
      ],
    },
    {
      heading: "Why it matters in maintenance",
      paragraphs: [
        "A growing backlog means work is arriving faster than the crew can finish it, and deferred jobs become future failures. A backlog that is stable and in proportion to the crew is normal and even healthy, since it gives planners a pool of work to schedule.",
        "A backlog of zero is a warning sign, not a triumph: it usually means work is not being identified. Either problems are not being reported or inspections are not finding anything.",
      ],
    },
    {
      heading: "How to keep the backlog useful",
      paragraphs: ["A backlog list is only helpful when it is kept honest."],
      bullets: [
        "Estimate hours on every job, even roughly, so the backlog can be totaled.",
        "Separate work waiting for parts or a stop from work that could be done today.",
        "Review old items regularly and cancel those that no longer apply.",
        "Track the backlog over time, not just on one day.",
      ],
    },
  ],
  formula: {
    label: "Formula",
    expression: "Backlog (crew-weeks) = estimated hours of outstanding work / crew hours available per week",
    parts: [
      { name: "Estimated hours of outstanding work", meaning: "The sum of estimates on approved, incomplete jobs." },
      { name: "Crew hours available per week", meaning: "Productive hours the maintenance crew can put into planned work in a normal week." },
    ],
  },
  example: {
    title: "Hypothetical maintenance team",
    lines: ["Outstanding work is estimated at 600 hours. Five technicians each have 40 hours per week available, so 200 hours."],
    result: "Backlog = 600 / 200 = 3 crew-weeks.",
  },
  firmicore:
    "Firmicore tracks every job as a [work order](/glossary/work-order/) with status from draft to closed and a supervisor sign-off queue, so outstanding work is visible rather than held in memory. Shift handover reports list pending work orders for the incoming crew.",
  relatedTerms: ["work-order", "planned-maintenance", "pm-compliance", "shift-handover", "reactive-maintenance"],
  relatedPosts: ["work-order-software", "what-is-preventive-maintenance", "/work-order-software/", "how-to-reduce-machine-downtime"],
  faq: [
    {
      q: "How big should a maintenance backlog be?",
      a: "Big enough to keep planners supplied with work and small enough that jobs do not age into failures. Track the trend and the age of the oldest critical items.",
    },
    {
      q: "Does backlog include preventive maintenance?",
      a: "Overdue preventive tasks are part of the backlog. Tasks not yet due are scheduled work, not backlog.",
    },
  ],
  updated: "2026-10-07",
};
