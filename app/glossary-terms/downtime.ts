import type { GlossaryTerm } from "../glossary-types";

export const term: GlossaryTerm = {
  slug: "downtime",
  term: "Downtime",
  metaDescription:
    "Downtime is time when equipment cannot run, planned or unplanned. Definition, formula for downtime rate, a worked example and how to record it.",
  group: "Metrics",
  shortDefinition:
    "Downtime is the time during which equipment is not able to run when it is needed, whether because of a failure or a stop planned in advance.",
  autoLink: ["downtime"],
  body: [
    {
      heading: "What downtime means in plain language",
      paragraphs: [
        "Downtime is any period when a machine or line cannot produce because the equipment itself is unavailable. It starts when output stops and ends when output can resume. It is split into two kinds, and the split matters more than the total.",
      ],
      bullets: [
        "Planned downtime: stops arranged in advance, such as preventive maintenance, scheduled overhauls and changeovers.",
        "Unplanned downtime: stops no one arranged, mainly equipment failures. See [unplanned downtime](/glossary/unplanned-downtime/).",
      ],
    },
    {
      heading: "Why it matters in maintenance",
      paragraphs: [
        "Planned downtime is a deliberate cost paid to avoid failures. Unplanned downtime is the cost of the failures that still happen, and it usually arrives at the worst moment. Maintenance aims to shift time from the second kind into the first, which is the idea behind [preventive maintenance](/glossary/preventive-maintenance/).",
        "Tracking both shows whether that shift is working. If planned downtime rises and unplanned downtime falls, the program is paying off. If both rise, the plant is spending on maintenance and still suffering failures.",
      ],
    },
    {
      heading: "How to record it well",
      paragraphs: [
        "Record the start and end of each stop, the machine, and a reason chosen from a short list. Include short stops and slow restarts, because they are the ones most often left out. Keep downtime separate from [idle time](/glossary/idle-time/), which is when the equipment could run but was not producing.",
      ],
    },
  ],
  formula: {
    label: "Formula",
    expression: "Downtime rate = downtime / scheduled production time × 100",
    parts: [
      { name: "Downtime", meaning: "Total minutes or hours the equipment was unable to run in the period." },
      { name: "Scheduled production time", meaning: "The time the equipment was meant to be producing in the same period." },
    ],
    note: "Calculate the planned and unplanned parts separately as well as the total.",
  },
  example: {
    title: "Hypothetical machine, one 480-minute shift",
    lines: ["Planned changeover: 20 minutes. Unplanned stops: 30 and 10 minutes.", "Total downtime is 60 minutes, of which 40 minutes is unplanned."],
    result: "Downtime rate = 60 / 480 × 100 = 12.5%, with unplanned downtime at 40 / 480 × 100 = about 8.3%.",
  },
  firmicore:
    "Firmicore records breakdowns against the machine, with severity, type and root cause, and can report on them across the plant. Preventive maintenance schedules help plan stops in advance so they are not unplanned.",
  relatedTerms: ["unplanned-downtime", "idle-time", "mttr", "oee", "preventive-maintenance"],
  relatedPosts: ["how-to-reduce-machine-downtime", "the-real-cost-of-unplanned-downtime", "what-is-mttr"],
  faq: [
    {
      q: "What is the difference between planned and unplanned downtime?",
      a: "Planned downtime is arranged in advance, such as scheduled servicing. Unplanned downtime comes from events no one arranged, mostly equipment failures.",
    },
    {
      q: "Is downtime bad?",
      a: "Unplanned downtime is. Planned downtime is a deliberate trade, spending a known amount of time to reduce the chance of an unplanned failure.",
    },
  ],
  updated: "2026-10-07",
};
