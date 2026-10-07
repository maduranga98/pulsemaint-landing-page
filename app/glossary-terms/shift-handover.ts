import type { GlossaryTerm } from "../glossary-types";

export const term: GlossaryTerm = {
  slug: "shift-handover",
  term: "Shift handover",
  metaDescription:
    "A shift handover transfers open maintenance context from the outgoing crew to the incoming one. Definition, what to include and why verbal handovers fail.",
  group: "Workflow",
  shortDefinition:
    "A shift handover is the structured transfer of maintenance context from the outgoing crew to the incoming one: pending jobs, ongoing breakdowns, low stock and machines to watch.",
  autoLink: ["shift handover"],
  body: [
    {
      heading: "What a shift handover means in plain language",
      paragraphs: [
        "Maintenance does not stop at shift change, but the people doing it do. A handover is how the crew leaving tells the crew arriving what is still open: jobs half done, machines running in a degraded state, parts on order, and anything that looked wrong but has not failed yet.",
        "Structured means the same items are covered every time, in a set format, rather than whatever the outgoing supervisor remembers on the way out.",
      ],
    },
    {
      heading: "Why it matters in maintenance",
      paragraphs: [
        "Handovers done verbally lose the items nobody thought to mention, which are reliably the items that cause the next incident. A machine that was making a noise at the end of one shift is a surprise breakdown at the start of the next unless someone said so.",
        "It also affects measurement. A fault that sits unnoticed across a shift change lengthens [MTTA](/glossary/mtta/) and downtime without any technician being slow.",
      ],
    },
    {
      heading: "What a good handover covers",
      paragraphs: ["Keep it short enough to be read at the start of a shift."],
      bullets: [
        "Pending [work orders](/glossary/work-order/) and who holds them.",
        "Ongoing breakdowns and their current status.",
        "Low-stock parts that could block a job.",
        "Machines to watch, with the reason.",
        "Any open [permits to work](/glossary/permit-to-work/) or isolations still in place.",
      ],
    },
  ],
  firmicore:
    "Firmicore compiles shift handover reports automatically from live records. Each report lists pending work orders, ongoing breakdowns, low-stock alerts and watch-machine flags, so the incoming crew starts from the current state of the plant.",
  relatedTerms: ["work-order", "maintenance-backlog", "mtta", "permit-to-work", "mro-inventory"],
  relatedPosts: ["how-to-reduce-machine-downtime", "work-order-software", "what-is-a-cmms"],
  faq: [
    {
      q: "Why are verbal handovers unreliable?",
      a: "They depend on memory under time pressure. Items that seem minor to the person leaving are often the ones the next crew most needs to know.",
    },
    {
      q: "Who is responsible for the handover?",
      a: "Usually the outgoing supervisor, with the incoming supervisor confirming they have read it. Both sides should be able to see the same record.",
    },
  ],
  updated: "2026-10-07",
};
