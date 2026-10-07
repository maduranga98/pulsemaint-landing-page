import type { GlossaryTerm } from "../glossary-types";

export const term: GlossaryTerm = {
  slug: "mttr",
  term: "MTTR",
  fullName: "Mean Time to Repair",
  metaDescription:
    "MTTR (mean time to repair) is total repair time divided by repairs. Formula, worked example, what to include and exclude, and how to measure it.",
  group: "Metrics",
  shortDefinition:
    "MTTR, or mean time to repair, is total repair time across incidents divided by the number of repairs, measured over a defined period and set of assets.",
  autoLink: ["MTTR", "mean time to repair"],
  body: [
    {
      heading: "What MTTR means in plain language",
      paragraphs: [
        "MTTR is the average time it takes to get an asset back into service after it fails. Add up the repair time for every incident in the period, divide by the number of incidents, and you have it. A lower number means the plant recovers faster.",
        "The figure is only meaningful with its scope attached. Say which assets and which period it covers, otherwise two people quoting MTTR are rarely talking about the same thing.",
      ],
    },
    {
      heading: "Why it matters in maintenance",
      paragraphs: [
        "Every minute of repair time is a minute of lost production, so MTTR is one of the most direct measures of how well the maintenance team responds. A rising MTTR often points to missing spare parts, unclear fault diagnosis or slow dispatch rather than to the repair itself.",
        "Read it with [MTBF](/glossary/mtbf/). Together they describe how often assets fail and how quickly they recover.",
      ],
    },
    {
      heading: "What to include and exclude",
      paragraphs: [
        "The clock should start when the asset fails and stop when it is back in service. Write the rule down and apply it to every incident.",
      ],
      bullets: [
        "Include: time to notice and report the fault, waiting for a technician, diagnosis, waiting for parts, the repair itself, testing and restart.",
        "Exclude: planned maintenance stops, and faults that did not stop or degrade the asset.",
        "Decide once whether you measure full downtime or hands-on repair time only, and do not mix the two in the same report.",
      ],
    },
    {
      heading: "Common ways the number gets flattered",
      paragraphs: [
        "Starting the clock when the technician arrives, instead of when the machine stopped, is the most common one. Averaging many trivial stops with a few long ones can also hide the failures that hurt most. Look at the longest repairs as well as the average.",
      ],
    },
  ],
  formula: {
    label: "Formula",
    expression: "MTTR = total repair time / number of repairs",
    parts: [
      { name: "Total repair time", meaning: "Time from failure to back in service, summed across all incidents in the period." },
      { name: "Number of repairs", meaning: "Count of failure incidents in the same period and asset set." },
    ],
  },
  example: {
    title: "Hypothetical packing line, one month",
    lines: ["The line stops four times: 45, 90, 30 and 75 minutes.", "Total repair time is 240 minutes across 4 repairs."],
    result: "MTTR = 240 / 4 = 60 minutes.",
  },
  firmicore:
    "Firmicore calculates MTTR from the breakdown and work order records your team already creates, so the figure comes from the workflow rather than a spreadsheet. QR-based reporting starts the record at the machine, which keeps the start of the clock honest.",
  relatedTerms: ["mtbf", "mtta", "downtime", "unplanned-downtime", "work-order"],
  relatedPosts: ["what-is-mttr", "how-to-reduce-machine-downtime", "/maintenance-management-software/", "the-real-cost-of-unplanned-downtime"],
  faq: [
    {
      q: "What is a good MTTR?",
      a: "There is no universal good number, because it depends on the asset and the type of failure. Compare against your own baseline for the same assets and track the trend.",
    },
    {
      q: "Does MTTR include waiting for parts?",
      a: "If you measure from failure to back in service, yes. Waiting for parts is often the largest avoidable segment, which is why it is worth seeing inside the total.",
    },
    {
      q: "Is MTTR the same as downtime?",
      a: "MTTR is the average downtime per repair. Total downtime is the sum, and also includes planned stops.",
    },
  ],
  updated: "2026-10-07",
};
