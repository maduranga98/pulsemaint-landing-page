import type { GlossaryTerm } from "../glossary-types";

export const term: GlossaryTerm = {
  slug: "mtbf",
  term: "MTBF",
  fullName: "Mean Time Between Failures",
  metaDescription:
    "MTBF (mean time between failures) is operating time divided by failures. Formula, worked example, how it differs from MTTR, and the limits of the metric.",
  group: "Metrics",
  shortDefinition:
    "MTBF, or mean time between failures, is total operating time divided by the number of failures, and measures reliability rather than repair speed.",
  autoLink: ["MTBF", "mean time between failures"],
  body: [
    {
      heading: "What MTBF means in plain language",
      paragraphs: [
        "MTBF is the average amount of running time between one failure and the next, for an asset or a group of similar assets. A higher number means the asset runs longer before something breaks. It is a reliability measure for equipment that gets repaired and put back into service.",
        "Only operating time counts. The hours a machine spends broken down, or switched off by plan, are not part of the total.",
      ],
    },
    {
      heading: "Why it matters in maintenance",
      paragraphs: [
        "MTBF shows whether your maintenance strategy is working. If preventive tasks are doing their job, the time between failures should lengthen. If it shortens, the plant is either running assets harder or missing the cause of repeat failures.",
        "It also helps rank assets. Two machines with similar repair times can have very different MTBF, and the one that fails more often is usually the better candidate for a root cause review.",
      ],
    },
    {
      heading: "How MTBF differs from MTTR",
      paragraphs: [
        "MTBF asks how often an asset fails. [MTTR](/glossary/mttr/) asks how long it takes to get back after a failure. They are two halves of the same picture, and either one alone can mislead.",
      ],
      bullets: [
        "Rising MTBF with steady MTTR: the asset is getting more reliable.",
        "Falling MTTR with falling MTBF: the team is getting faster at fixing something that fails more often, which is not an improvement.",
      ],
    },
    {
      heading: "Limits of the metric",
      paragraphs: [
        "MTBF is an average, so it hides the spread. One failure after 400 hours and one after 20 hours average out to a comfortable number. It also needs a consistent definition of a failure, and it says nothing about how serious each one was.",
        "With only a few failures in the period, treat the figure as a rough guide. It is more useful as a trend for one asset than as a comparison between plants.",
      ],
    },
  ],
  formula: {
    label: "Formula",
    expression: "MTBF = total operating time / number of failures",
    parts: [
      { name: "Total operating time", meaning: "Hours the asset was actually running in the period, excluding repair time and planned stops." },
      { name: "Number of failures", meaning: "Count of failures in the same period that stopped or degraded the asset." },
    ],
  },
  example: {
    title: "Hypothetical packing machine, one quarter",
    lines: ["The machine runs for 600 hours in the quarter and fails 5 times.", "MTBF = 600 hours / 5 failures."],
    result: "MTBF = 120 hours.",
  },
  firmicore:
    "Firmicore keeps a failure history against every machine in its machine registry, and each breakdown is reported against the right asset by scanning its QR code. That per-machine history is the raw material for judging how often an asset fails.",
  relatedTerms: ["mttr", "mtta", "downtime", "preventive-maintenance", "root-cause"],
  relatedPosts: ["what-is-mttr", "how-to-reduce-machine-downtime", "what-is-preventive-maintenance"],
  faq: [
    {
      q: "Is a higher MTBF always better?",
      a: "Generally yes, because it means more running time between failures. Check it alongside MTTR and the cost of each failure, since a few severe failures can matter more than many minor ones.",
    },
    {
      q: "Can MTBF be used for parts that are replaced, not repaired?",
      a: "For parts that are replaced rather than repaired, the usual measure is MTTF, mean time to failure. MTBF assumes the asset returns to service after each failure.",
    },
  ],
  updated: "2026-10-07",
};
