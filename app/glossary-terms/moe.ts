import type { GlossaryTerm } from "../glossary-types";

export const term: GlossaryTerm = {
  slug: "moe",
  term: "MOE",
  fullName: "Machine Overall Effectiveness",
  metaDescription:
    "MOE (Machine Overall Effectiveness) is the Firmicore score blending availability, maintenance compliance, reliability and machine health per machine.",
  group: "Metrics",
  shortDefinition:
    "MOE, or Machine Overall Effectiveness, is the Firmicore composite score that blends availability, maintenance compliance, reliability and machine health into one number per machine.",
  autoLink: ["MOE", "Machine Overall Effectiveness"],
  body: [
    {
      heading: "What MOE means in plain language",
      paragraphs: [
        "MOE gives every machine one score that summarizes how well it is being kept in working order. Instead of reading four separate reports, a supervisor sees a single number per machine and can sort the fleet by it.",
        "It is a Firmicore term, not an industry standard, so it should not be compared with figures from other systems.",
      ],
    },
    {
      heading: "Why it matters in maintenance",
      paragraphs: [
        "Where [OEE](/glossary/oee/) is a production metric, MOE is a maintenance metric: it is designed to flag which machine the maintenance team should look at next. A machine can post good output and still be drifting, with overdue preventive tasks and rising failures that will show up later.",
        "A composite score is a prompt to look closer, not a verdict. The components behind the number are what explain it.",
      ],
    },
    {
      heading: "What goes into the score",
      paragraphs: ["MOE blends four ideas, each of which also stands as its own measure."],
      bullets: [
        "Availability: how much of the time the machine was able to run.",
        "Maintenance compliance: whether preventive tasks were completed on time. See [PM compliance](/glossary/pm-compliance/).",
        "Reliability: how often the machine fails. See [MTBF](/glossary/mtbf/).",
        "Machine health: the [machine health score](/glossary/machine-health-score/) from failure history and open issues.",
      ],
    },
  ],
  firmicore:
    "MOE is part of Firmicore. The MOE dashboard shows the composite score with critical-machine alerts, and the Factory Pro plan adds MOE trend analytics and machine comparison. It sits next to the preventive maintenance compliance dashboard.",
  relatedTerms: ["oee", "machine-health-score", "pm-compliance", "mtbf", "asset-registry"],
  relatedPosts: ["what-is-mttr", "how-to-reduce-machine-downtime", "what-is-preventive-maintenance"],
  faq: [
    {
      q: "Is MOE the same as OEE?",
      a: "No. OEE measures production effectiveness from availability, performance and quality. MOE is a maintenance-focused composite of availability, maintenance compliance, reliability and machine health.",
    },
    {
      q: "Is MOE an industry standard?",
      a: "No. It is the name Firmicore uses for its own composite score.",
    },
  ],
  updated: "2026-10-07",
};
