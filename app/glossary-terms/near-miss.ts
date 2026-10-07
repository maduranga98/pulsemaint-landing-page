import type { GlossaryTerm } from "../glossary-types";

export const term: GlossaryTerm = {
  slug: "near-miss",
  term: "Near miss",
  metaDescription:
    "A near miss is an incident that could have caused injury or damage but did not. Definition, why to record it and how to turn reports into fixes.",
  group: "Safety",
  shortDefinition:
    "A near miss is an incident that could have caused injury or damage but did not, recorded so the cause can be fixed before it repeats.",
  autoLink: ["near miss", "near-miss", "near misses"],
  body: [
    {
      heading: "What a near miss means in plain language",
      paragraphs: [
        "A near miss is a close call. A pallet slips off a forklift and lands where nobody was standing. A guard is found off a running machine and nobody was hurt. The only difference between a near miss and an injury is luck, which is why near misses are treated as free warnings.",
        "Hazard reports are related but different: a hazard is a dangerous condition that has not yet caused an event, while a near miss is an event that nearly caused harm.",
      ],
    },
    {
      heading: "Why it matters in maintenance",
      paragraphs: [
        "Maintenance sees the plant's equipment more closely than anyone. Worn guards, failed interlocks, leaking fluids and missing isolation points are found by technicians, and each one is a chance to fix a condition before it hurts someone.",
        "Near misses also point to repeat failures. If the same machine keeps producing close calls, that is a reason to run a [root cause](/glossary/root-cause/) review, not to keep tolerating the risk.",
      ],
    },
    {
      heading: "Making reporting work",
      paragraphs: ["Near misses only appear in the data if people report them."],
      bullets: [
        "Make reporting quick, on the device people already carry or share on the floor.",
        "Keep the tone about fixing the condition, not blaming the person who reported it.",
        "Close the loop: tell people what was changed as a result.",
        "Review the reports regularly for patterns by machine, area and shift.",
      ],
    },
    {
      heading: "From report to fix",
      paragraphs: [
        "A report that nobody acts on teaches people to stop reporting. Each near miss should be assigned to an owner, tied to the machine it happened on and closed with a recorded action, often through a [work order](/glossary/work-order/).",
      ],
    },
  ],
  firmicore:
    "Firmicore's safety workspace covers incident, near-miss and hazard reporting, along with permit to work and safety analytics. Reports are recorded against the plant's own records, so a near miss can be reviewed alongside the machine's maintenance history.",
  relatedTerms: ["root-cause", "permit-to-work", "lockout-tagout", "work-order", "guided-triage"],
  relatedPosts: ["cmms-for-regulated-manufacturing", "guided-operator-safety-triage", "guided-triage-for-shared-tablets"],
  faq: [
    {
      q: "Is a near miss the same as an incident?",
      a: "A near miss is a type of incident in which no one was harmed and nothing was damaged. Many sites record it separately from injuries so patterns can be tracked.",
    },
    {
      q: "Who should report a near miss?",
      a: "Anyone who sees one. Operators, technicians and contractors all notice different things.",
    },
  ],
  updated: "2026-10-07",
};
