import type { GlossaryTerm } from "../glossary-types";

export const term: GlossaryTerm = {
  slug: "idle-time",
  term: "Idle time",
  metaDescription:
    "Idle time is when equipment is working but not producing, such as waiting for material or operators. How idle time differs from downtime, with examples.",
  group: "Metrics",
  shortDefinition:
    "Idle time is time when equipment is able to run but is not producing, for example while waiting for material, an operator, an order or a changeover.",
  autoLink: ["idle time"],
  body: [
    {
      heading: "What idle time means in plain language",
      paragraphs: [
        "In a plant, a machine can be doing nothing for two very different reasons. Either it cannot run because something is wrong with it, or it could run but nothing is feeding it. Idle time is the second case. The equipment is healthy and available, and the delay comes from somewhere else.",
        "Typical causes are waiting for raw material, waiting for the next production order, no operator at the station, a blocked or starved line, or time between jobs.",
      ],
    },
    {
      heading: "Why it matters in maintenance",
      paragraphs: [
        "Maintenance should not be blamed for idle time, and it should not take credit for removing it either. Mixing the two makes a plant's maintenance metrics look worse or better than they are. If a machine waited three hours for material, that is a supply problem, and it should not be counted against the maintenance team's repair performance.",
        "Keeping idle time separate also protects the picture of machine health. A machine with a long idle record may simply be oversized for demand, and calendar-based maintenance on it deserves a second look.",
      ],
    },
    {
      heading: "Idle time versus downtime",
      paragraphs: ["The distinction comes down to whether the equipment was able to run."],
      bullets: [
        "[Downtime](/glossary/downtime/): the equipment is not able to run, because of a failure, a repair or a planned stop for maintenance.",
        "Idle time: the equipment is able to run, but production is not happening for other reasons.",
        "Some plants treat short, unrecorded idle periods as minor stops. Whatever you choose, define it once and apply it everywhere.",
      ],
    },
    {
      heading: "How to record it",
      paragraphs: [
        "Give operators a short list of reasons for a stop, with idle causes and equipment causes kept separate. Free text produces many spellings of the same cause and is hard to total. Records that carry the reason can be filtered, so downtime from failures can be counted without idle periods inflating it.",
      ],
    },
  ],
  firmicore:
    "Firmicore records breakdowns against the machine that failed, with severity, type and root cause, so equipment failures can be told apart from other stops. It is a maintenance system and does not track production scheduling or material flow.",
  relatedTerms: ["downtime", "unplanned-downtime", "oee", "mttr", "root-cause"],
  relatedPosts: ["how-to-reduce-machine-downtime", "the-real-cost-of-unplanned-downtime", "what-is-mttr"],
  faq: [
    {
      q: "Is idle time the same as downtime?",
      a: "No. Downtime means the equipment could not run. Idle time means it could have run but was not producing, for reasons such as missing material or no operator.",
    },
    {
      q: "Does idle time count against OEE?",
      a: "That depends on how planned production time is defined. If the machine was scheduled to run, idle periods reduce availability. Decide the rule once and keep it fixed.",
    },
  ],
  updated: "2026-10-07",
};
