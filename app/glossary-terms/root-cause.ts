import type { GlossaryTerm } from "../glossary-types";

export const term: GlossaryTerm = {
  slug: "root-cause",
  term: "Root cause",
  aliases: ["root cause analysis", "RCA"],
  metaDescription:
    "A root cause is the underlying condition whose removal stops a failure recurring. Definition, how it differs from a symptom, and how to record it well.",
  group: "Workflow",
  shortDefinition:
    "A root cause is the underlying condition whose removal prevents a failure from recurring, as distinct from the visible symptom that stopped the machine.",
  autoLink: ["root cause", "root-cause", "root cause analysis"],
  body: [
    {
      heading: "What a root cause means in plain language",
      paragraphs: [
        "When a machine stops, there is what you see and there is why it happened. A motor trips: that is the symptom. The motor was overloaded because a bearing was running dry, and the bearing was dry because the lubrication task was never scheduled. The unscheduled task is much closer to the root cause.",
        "Replacing the motor fixes the stop. Fixing the lubrication schedule stops the next one.",
      ],
    },
    {
      heading: "Why it matters in maintenance",
      paragraphs: [
        "Without root causes, a plant fixes the same fault many times. Repair times may look fine while the machine keeps failing, which is why [MTBF](/glossary/mtbf/) and root cause records belong together. Finding the cause is how repeat breakdowns turn into one-off events.",
        "It is also how [reactive maintenance](/glossary/reactive-maintenance/) gradually becomes proactive: every failure feeds a change to the plan.",
      ],
    },
    {
      heading: "Recording it so it is usable",
      paragraphs: [
        "Root-cause fields are only useful when the option list is short and specific to the plant. A free-text box produces a hundred spellings of the same cause, and the data cannot be totaled or filtered.",
      ],
      bullets: [
        "Use a short pick-list of causes that match your equipment.",
        "Allow a free-text note for detail, alongside the list.",
        "Record the cause when the work order is closed, when the technician knows it.",
        "Review the totals by machine and by cause to pick which failures to attack first.",
      ],
    },
    {
      heading: "Simple methods",
      paragraphs: [
        "A common starting point is asking why repeatedly until the answer is something you can change, and stopping there. For serious or repeated failures, a structured review with operators and technicians in the room finds causes that records alone miss.",
      ],
    },
  ],
  firmicore:
    "Firmicore tracks root cause along with severity and type on each breakdown, so repeat failures can be seen across machines rather than remembered. Records sit against the machine in the registry, next to its work orders and maintenance history.",
  relatedTerms: ["reactive-maintenance", "proactive-maintenance", "mtbf", "unplanned-downtime", "near-miss"],
  relatedPosts: ["how-to-reduce-machine-downtime", "how-to-report-a-machine-breakdown", "the-real-cost-of-unplanned-downtime"],
  faq: [
    {
      q: "Is a root cause the same as the cause of failure?",
      a: "A failure usually has several causes in a chain. The root cause is the one at the end of the chain that you can change to stop it happening again.",
    },
    {
      q: "Does every breakdown need a root cause analysis?",
      a: "No. Record a cause on every breakdown, but reserve a deeper review for failures that are expensive, dangerous or repeating.",
    },
  ],
  updated: "2026-10-07",
};
