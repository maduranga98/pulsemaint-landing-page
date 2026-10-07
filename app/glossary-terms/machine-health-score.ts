import type { GlossaryTerm } from "../glossary-types";

export const term: GlossaryTerm = {
  slug: "machine-health-score",
  term: "Machine health score",
  metaDescription:
    "A machine health score is a 0 to 100 rating from failure history, maintenance compliance and open issues, used to rank risk across a fleet of machines.",
  group: "Metrics",
  shortDefinition:
    "A machine health score is a 0 to 100 rating derived from an asset's failure history, maintenance compliance and open issues, used to rank risk across a fleet.",
  autoLink: ["machine health score", "health score"],
  body: [
    {
      heading: "What a machine health score means in plain language",
      paragraphs: [
        "A health score condenses what is known about a machine into one number between 0 and 100. A machine that has failed repeatedly, has overdue preventive tasks or carries unresolved issues scores lower. A machine with a clean record and up-to-date maintenance scores higher.",
        "The number is most useful as a ranking. It lets a supervisor with 100 machines see at a glance which handful deserve attention first.",
      ],
    },
    {
      heading: "Why it matters in maintenance",
      paragraphs: [
        "Most plants cannot inspect everything every day. A score gives a defensible way to decide where to look first, which is the idea behind [condition-based maintenance](/glossary/condition-based-maintenance/). It also makes declining machines visible before they produce a major failure.",
        "A score is only as good as the records underneath it. If breakdowns and tasks are not logged against the right machine, the score reflects the gaps in the data rather than the condition of the equipment.",
      ],
    },
    {
      heading: "What a good score is built from",
      paragraphs: ["The inputs should be things the plant already records."],
      bullets: [
        "Failure history: how often and how seriously the machine has failed.",
        "Maintenance compliance: whether scheduled tasks were done in their window.",
        "Open issues: faults and work orders still unresolved.",
      ],
    },
    {
      heading: "How to use it without over-trusting it",
      paragraphs: [
        "Treat a drop in score as a reason to look at the machine, not as a diagnosis. Check the underlying records, and keep the [asset registry](/glossary/asset-registry/) complete, since a machine that is missing from the registry cannot be scored at all.",
      ],
    },
  ],
  firmicore:
    "Firmicore calculates a 0 to 100 health score automatically for each machine in the machine registry. It feeds the [MOE score](/glossary/moe/), which adds availability, maintenance compliance and reliability.",
  relatedTerms: ["moe", "asset-registry", "pm-compliance", "condition-based-maintenance", "mtbf"],
  relatedPosts: ["what-is-preventive-maintenance", "how-to-reduce-machine-downtime", "what-is-a-cmms"],
  faq: [
    {
      q: "What is a good machine health score?",
      a: "There is no universal threshold. Use the score to compare machines within your own plant and to watch the trend of each one.",
    },
    {
      q: "Does a health score replace inspections?",
      a: "No. It helps decide where to inspect first. Inspections and technician judgment still confirm what is wrong.",
    },
  ],
  updated: "2026-10-07",
};
