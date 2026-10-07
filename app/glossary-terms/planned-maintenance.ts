import type { GlossaryTerm } from "../glossary-types";

export const term: GlossaryTerm = {
  slug: "planned-maintenance",
  term: "Planned maintenance",
  metaDescription:
    "Planned maintenance is work prepared in advance, with parts, people and stop time arranged. How it differs from scheduled maintenance, with examples.",
  group: "Strategy",
  shortDefinition:
    "Planned maintenance is any maintenance work that is identified and prepared in advance, with the job defined, parts and people arranged, and the stop agreed with production.",
  autoLink: ["planned maintenance"],
  body: [
    {
      heading: "What planned maintenance means in plain language",
      paragraphs: [
        "Planned maintenance is defined by preparation, not by recurrence. A job counts as planned when someone has worked out what needs doing, how long it will take, which parts and skills it needs, and when the machine can be stopped. That preparation can happen days or weeks ahead.",
        "It includes recurring tasks, and also one-off work. A bearing noise found on an inspection round becomes planned work once it has a job description, a parts list and a booked window.",
      ],
    },
    {
      heading: "Why it matters in maintenance",
      paragraphs: [
        "Unprepared jobs take longer. Technicians wait for parts, look for tools and negotiate access to the machine. Preparing the work in advance shortens the time the machine is stopped and reduces the number of urgent calls.",
        "It also separates [planned downtime from unplanned downtime](/glossary/downtime/), which makes the cost of failures easier to see.",
      ],
    },
    {
      heading: "How it differs from scheduled maintenance",
      paragraphs: [
        "[Scheduled maintenance](/glossary/scheduled-maintenance/) is about when: a fixed interval triggers the task. Planned maintenance is about readiness: the job is prepared before it starts. The two overlap but neither contains the other entirely.",
      ],
      bullets: [
        "Scheduled and planned: a monthly lubrication task with a written procedure and the grease already in stock.",
        "Planned but not scheduled: a repair raised from an inspection finding, prepared and booked for the next stop.",
        "Scheduled but not planned: a recurring task that exists on a calendar but has no procedure, parts or booked window behind it.",
      ],
    },
    {
      heading: "What goes into planning a job",
      paragraphs: [
        "A usable plan names the task steps, the skills and number of people, the parts and tools, any safety isolation needed, and the expected duration. When those are held on the [work order](/glossary/work-order/), the technician can start without a search.",
      ],
    },
  ],
  firmicore:
    "Firmicore work orders carry the checklist, parts requests and time tracking for a job, and run through to supervisor sign-off. Preventive maintenance schedules and parts inventory sit in the same system, so a job can be prepared against known stock.",
  relatedTerms: ["scheduled-maintenance", "work-order", "preventive-maintenance", "downtime", "maintenance-backlog"],
  relatedPosts: ["work-order-software", "what-is-preventive-maintenance", "how-to-reduce-machine-downtime"],
  faq: [
    {
      q: "Is planned maintenance the same as preventive maintenance?",
      a: "No. Preventive maintenance aims to stop failures and is usually scheduled. Planned maintenance describes how a job is prepared, and can apply to repairs as well.",
    },
    {
      q: "Can corrective work be planned?",
      a: "Yes. Corrective work found before the machine fails, such as on an inspection round, can be prepared and booked into a stop.",
    },
  ],
  updated: "2026-10-07",
};
