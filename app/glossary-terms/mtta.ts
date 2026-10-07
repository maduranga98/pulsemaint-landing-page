import type { GlossaryTerm } from "../glossary-types";

export const term: GlossaryTerm = {
  slug: "mtta",
  term: "MTTA",
  fullName: "Mean Time to Acknowledge",
  metaDescription:
    "MTTA (mean time to acknowledge) is the average time between a fault report and someone taking ownership. Formula, example and how it differs from MTTR.",
  group: "Metrics",
  shortDefinition:
    "MTTA, or mean time to acknowledge, is the average time between a fault being reported and someone accepting responsibility for it.",
  autoLink: ["MTTA", "mean time to acknowledge"],
  body: [
    {
      heading: "What MTTA means in plain language",
      paragraphs: [
        "MTTA measures how long a problem sits unowned. The clock starts when an operator reports a fault and stops when a technician or supervisor accepts the job. It is the first slice of the time a machine is down, and it says nothing about the repair itself.",
      ],
    },
    {
      heading: "Why it matters in maintenance",
      paragraphs: [
        "A high MTTA with a low repair time means the problem is dispatch and alerting, not the technicians. The fault was fixed quickly once someone picked it up, but it waited before anyone did. That is a different fix from retraining the crew or buying parts.",
        "Splitting acknowledgement from repair also makes [MTTR](/glossary/mttr/) easier to interpret. Both include the waiting time if the clock starts at failure, and MTTA shows how much of it is waiting for a response.",
      ],
    },
    {
      heading: "Common causes of a long MTTA",
      paragraphs: ["Delays at this stage are usually process issues."],
      bullets: [
        "Reports that reach a notebook, a message thread or a desk instead of the person on call.",
        "No clear owner for a given area or shift.",
        "Alerts that go unseen because they are sent to the wrong channel or too many people.",
        "Shift changes where open faults are not handed over. See [shift handover](/glossary/shift-handover/).",
      ],
    },
  ],
  formula: {
    label: "Formula",
    expression: "MTTA = total time from report to acknowledgement / number of incidents",
    parts: [
      { name: "Time from report to acknowledgement", meaning: "For each incident, the time between the fault being reported and someone accepting it." },
      { name: "Number of incidents", meaning: "Reported faults in the period and asset set." },
    ],
  },
  example: {
    title: "Hypothetical week, three faults",
    lines: ["Faults are acknowledged after 5, 15 and 10 minutes.", "Total acknowledgement time is 30 minutes across 3 incidents."],
    result: "MTTA = 30 / 3 = 10 minutes.",
  },
  firmicore:
    "Firmicore sends alerts when a breakdown is reported, and the report goes into the work order flow where a supervisor assigns it. Reporting by QR code means the fault reaches the system the moment it is raised, rather than after someone writes it down.",
  relatedTerms: ["mttr", "mtbf", "shift-handover", "qr-triggered-reporting", "downtime"],
  relatedPosts: ["what-is-mttr", "how-to-report-a-machine-breakdown", "why-qr-reporting-beats-paper-logs"],
  faq: [
    {
      q: "What is the difference between MTTA and MTTR?",
      a: "MTTA covers the time until someone accepts a fault. MTTR covers the time until the asset is back in service, so it includes the acknowledgement time and the repair.",
    },
    {
      q: "How do you improve MTTA?",
      a: "Make sure a report reaches a named person right away, define who owns each area on each shift, and hand over open faults at shift change.",
    },
  ],
  updated: "2026-10-07",
};
