import type { GlossaryTerm } from "../glossary-types";

export const term: GlossaryTerm = {
  slug: "scheduled-maintenance",
  term: "Scheduled maintenance",
  metaDescription:
    "Scheduled maintenance is work set to happen at fixed intervals, by calendar or usage. Definition, examples and how it differs from planned maintenance.",
  group: "Strategy",
  shortDefinition:
    "Scheduled maintenance is work set to happen at fixed intervals, by calendar date or usage, regardless of the asset's current condition.",
  autoLink: ["scheduled maintenance"],
  body: [
    {
      heading: "What scheduled maintenance means in plain language",
      paragraphs: [
        "Scheduled maintenance is defined by its timing. The task recurs on a fixed interval, such as every week, every quarter, or every 500 running hours, and it is done when the interval comes round. Lubricating a bearing every month and replacing a filter every 1,000 hours are typical examples.",
        "The interval can be time based or usage based. Time based tasks suit assets that wear with age. Usage based tasks, driven by a meter reading, suit assets that wear with use.",
      ],
    },
    {
      heading: "Why it matters in maintenance",
      paragraphs: [
        "A schedule turns routine care into a commitment. Without it, tasks get done when someone remembers, which in practice means when the machine is quiet or the problem is already visible.",
        "It also makes performance measurable. Once every task has a due date, you can see how many were completed within their window, which is what [PM compliance](/glossary/pm-compliance/) measures.",
      ],
    },
    {
      heading: "Scheduled versus planned maintenance",
      paragraphs: [
        "The two terms are often used interchangeably, but they answer different questions. Scheduled means the timing is fixed in advance. [Planned maintenance](/glossary/planned-maintenance/) means the work is prepared in advance, with the job defined, the parts and people lined up and the downtime agreed, whether or not it recurs.",
        "Most scheduled work is also planned. A repair found during an inspection is planned but not scheduled by interval.",
      ],
    },
    {
      heading: "Limits",
      paragraphs: [
        "Fixed intervals ignore condition. A task can be done too early on a machine that is fine, or too late on one working harder than usual. That is the case for pairing schedules with [condition-based maintenance](/glossary/condition-based-maintenance/) on critical assets.",
      ],
    },
  ],
  firmicore:
    "Firmicore schedules preventive maintenance by calendar or by meter reading, and shows the schedule on a PM calendar. Completion is tracked in a compliance dashboard per machine and technician.",
  relatedTerms: ["preventive-maintenance", "planned-maintenance", "pm-compliance", "condition-based-maintenance", "work-order"],
  relatedPosts: ["what-is-preventive-maintenance", "work-order-software", "what-is-a-cmms"],
  faq: [
    {
      q: "Is scheduled maintenance the same as preventive maintenance?",
      a: "Largely yes. Preventive maintenance is usually scheduled by time or usage. Preventive work can also be triggered by condition, which is not a fixed schedule.",
    },
    {
      q: "What is the difference between calendar and meter-based schedules?",
      a: "A calendar schedule repeats by elapsed time. A meter-based schedule repeats by usage, such as running hours, so an idle machine is not serviced on a timetable.",
    },
  ],
  updated: "2026-10-07",
};
