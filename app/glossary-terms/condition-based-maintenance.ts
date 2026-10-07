import type { GlossaryTerm } from "../glossary-types";

export const term: GlossaryTerm = {
  slug: "condition-based-maintenance",
  term: "Condition-based maintenance",
  aliases: ["CBM"],
  metaDescription:
    "Condition-based maintenance triggers work when a measured condition crosses a threshold, not on a fixed schedule. Definition, examples and limits.",
  group: "Strategy",
  shortDefinition:
    "Condition-based maintenance triggers work from an observed asset condition, such as vibration, temperature or a health score crossing a threshold, rather than from a fixed schedule.",
  autoLink: ["condition-based maintenance", "condition based maintenance"],
  body: [
    {
      heading: "What condition-based maintenance means in plain language",
      paragraphs: [
        "Instead of servicing a machine every month, condition-based maintenance (CBM) services it when it shows it needs attention. Something is measured or inspected, a threshold is defined, and crossing that threshold creates the work.",
        "The reading can come from a sensor, such as vibration or temperature, or from a person, such as a visual check, a noise or a gauge reading on a round.",
      ],
    },
    {
      heading: "Why it matters in maintenance",
      paragraphs: [
        "Fixed schedules can service a machine that did not need it, or miss one that wore faster than expected. Triggering work from condition aims the effort at assets that are actually deteriorating, and avoids opening up healthy equipment.",
      ],
    },
    {
      heading: "What you need for it to work",
      paragraphs: ["CBM is only as good as the signal behind it."],
      bullets: [
        "A measurable sign that the asset is deteriorating before it fails.",
        "A threshold that someone has agreed on and written down.",
        "A routine for taking the readings, by sensor or by inspection round.",
        "A way to turn a reading over the limit into a work order with an owner.",
      ],
    },
    {
      heading: "Limits and how it compares",
      paragraphs: [
        "Not every failure gives warning, and monitoring has a cost, so CBM suits assets where a failure is expensive and detectable. Cheap, non-critical items are often better handled by [scheduled maintenance](/glossary/scheduled-maintenance/) or run to failure. Many plants mix all three, choosing by asset criticality.",
        "Predictive maintenance is a close relative that uses data to forecast when a failure will happen. CBM reacts to the current condition.",
      ],
    },
  ],
  firmicore:
    "Firmicore gives each machine a 0 to 100 health score built from failure history, maintenance compliance and open issues, which can be used to decide where attention goes next. Preventive maintenance schedules can run by calendar or by meter reading.",
  relatedTerms: ["preventive-maintenance", "proactive-maintenance", "machine-health-score", "scheduled-maintenance", "reactive-maintenance"],
  relatedPosts: ["what-is-preventive-maintenance", "how-to-reduce-machine-downtime", "what-is-a-cmms"],
  faq: [
    {
      q: "Is condition-based maintenance the same as predictive maintenance?",
      a: "They are related but not identical. Condition-based maintenance acts when a measured condition crosses a threshold. Predictive maintenance uses data to estimate when a failure will occur.",
    },
    {
      q: "Does condition-based maintenance need sensors?",
      a: "Not always. Structured inspections by operators or technicians can supply the readings, as long as the thresholds are defined and recorded.",
    },
  ],
  updated: "2026-10-07",
};
