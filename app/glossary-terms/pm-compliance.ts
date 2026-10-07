import type { GlossaryTerm } from "../glossary-types";

export const term: GlossaryTerm = {
  slug: "pm-compliance",
  term: "PM compliance",
  metaDescription:
    "PM compliance is the percentage of preventive maintenance tasks done within their window. Formula, worked example and common measurement mistakes.",
  group: "Metrics",
  shortDefinition:
    "PM compliance is the percentage of preventive maintenance tasks completed within their scheduled window over a period.",
  autoLink: ["PM compliance", "preventive maintenance compliance"],
  body: [
    {
      heading: "What PM compliance means in plain language",
      paragraphs: [
        "PM compliance answers a simple question: of the preventive tasks that were due, how many were done on time? It measures execution, not effectiveness. A high figure means the plan is being followed. It does not prove the plan is the right one.",
        "The word that matters is window. Each task needs a due date and an allowed margin, such as a few days either side, and only a task finished inside that margin counts.",
      ],
    },
    {
      heading: "Why it matters in maintenance",
      paragraphs: [
        "Compliance measured without a window is meaningless, because a [PM](/glossary/preventive-maintenance/) done two months late still counts as done. With a window, the number shows whether preventive work is really happening when planned, or being pushed back whenever the plant is busy.",
        "It is also an early indicator. Compliance usually slips before breakdowns rise, so a falling figure is a prompt to look at crew capacity and [backlog](/glossary/maintenance-backlog/).",
      ],
    },
    {
      heading: "Common measurement mistakes",
      paragraphs: ["Three mistakes account for most misleading figures."],
      bullets: [
        "No window: any late completion counts as compliant.",
        "Counting only tasks that were created, not tasks that should have been: a skipped schedule never appears in the total.",
        "Averaging across all machines: a plant-wide 90% can hide a critical machine at 40%. Look at the figure per machine.",
      ],
    },
  ],
  formula: {
    label: "Formula",
    expression: "PM compliance = PM tasks completed within window / PM tasks due × 100",
    parts: [
      { name: "PM tasks completed within window", meaning: "Preventive tasks finished inside their allowed margin around the due date." },
      { name: "PM tasks due", meaning: "All preventive tasks whose due date fell in the period, whether or not they were done." },
    ],
  },
  example: {
    title: "Hypothetical month, one plant",
    lines: ["40 preventive tasks were due. 34 were completed inside their window and 6 were late or skipped."],
    result: "PM compliance = 34 / 40 × 100 = 85%.",
  },
  firmicore:
    "Firmicore has a PM compliance dashboard with per-machine and per-technician trends, on the Workshop plan and above. It works from the same preventive maintenance schedules and completions your team records, so the figure is not rebuilt by hand each month.",
  relatedTerms: ["preventive-maintenance", "scheduled-maintenance", "maintenance-backlog", "moe", "work-order"],
  relatedPosts: ["what-is-preventive-maintenance", "cmms-for-regulated-manufacturing", "how-to-reduce-machine-downtime"],
  faq: [
    {
      q: "What is a good PM compliance rate?",
      a: "There is no universal benchmark worth quoting. Set a target for your own plant, track it per machine and watch the trend, paying most attention to critical assets.",
    },
    {
      q: "Does high PM compliance mean fewer breakdowns?",
      a: "Not automatically. It shows tasks were done on time. If breakdowns persist, the tasks may not address the real failure modes.",
    },
  ],
  updated: "2026-10-07",
};
