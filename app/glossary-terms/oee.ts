import type { GlossaryTerm } from "../glossary-types";

export const term: GlossaryTerm = {
  slug: "oee",
  term: "OEE",
  fullName: "Overall Equipment Effectiveness",
  heading: "OEE: Overall Equipment Effectiveness",
  seoTitle: "OEE: Overall Equipment Effectiveness Formula | Firmicore",
  metaDescription:
    "OEE (overall equipment effectiveness) is availability x performance x quality. See each factor defined, a worked example and the six big losses.",
  group: "Metrics",
  shortDefinition:
    "OEE, or overall equipment effectiveness, is availability multiplied by performance multiplied by quality, expressed as the percentage of planned production time that was truly productive.",
  autoLink: ["OEE", "overall equipment effectiveness"],
  body: [
    {
      heading: "What OEE means in plain language",
      paragraphs: [
        "OEE, short for overall equipment effectiveness, compares what a machine actually produced with what it could have produced if it had run perfectly for the whole planned shift. A score of 100% would mean no stops, full speed and no defects. Every real line loses something on each of those three fronts, and OEE puts all three losses into one number.",
        "It is a production metric. It says how much of your planned time turned into good product, and the three factors say where the rest went.",
      ],
    },
    {
      heading: "Why it matters in maintenance",
      paragraphs: [
        "Maintenance owns most of the availability factor and a good share of the performance factor. Breakdowns, slow running from worn parts and minor stops all show up here, so OEE is a useful way to see whether maintenance work is changing what the line delivers.",
        "Because the result is a single number, it can hide which factor moved. Always read the three factors next to the total before deciding where to act.",
      ],
    },
    {
      heading: "The six big losses",
      paragraphs: ["Lean and TPM practice groups equipment losses into six categories. Each one lands in a single OEE factor."],
      bullets: [
        "Breakdowns: unplanned stops from equipment failure. Availability loss.",
        "Setup and adjustments: time spent changing over or tuning the machine. Availability loss.",
        "Small stops: brief halts such as jams and blocked sensors. Performance loss.",
        "Reduced speed: running slower than the machine's ideal rate. Performance loss.",
        "Startup rejects: defective output while the machine warms up or stabilizes. Quality loss.",
        "Production rejects: defective output during steady running. Quality loss.",
      ],
    },
  ],
  formula: {
    label: "Formula",
    expression: "OEE = Availability × Performance × Quality",
    parts: [
      { name: "Availability", meaning: "Run time divided by planned production time. It drops with breakdowns and changeovers." },
      { name: "Performance", meaning: "Actual output divided by the output possible at the ideal rate during run time. It drops with small stops and slow running." },
      { name: "Quality", meaning: "Good units divided by total units produced. It drops with scrap and rework." },
    ],
    note: "Decide what counts as planned production time before you start, and keep that rule fixed. Changing it changes the score without changing the machine.",
  },
  example: {
    title: "Hypothetical filling line, one shift",
    lines: [
      "Planned production time: 400 minutes. Stops: 40 minutes. Run time: 360 minutes. Availability = 360 / 400 = 90%.",
      "Ideal rate: 5 units per minute, so 1,800 units possible in 360 minutes. Actual units: 1,440. Performance = 1,440 / 1,800 = 80%.",
      "Good units: 1,368 of 1,440. Quality = 1,368 / 1,440 = 95%.",
    ],
    result: "OEE = 0.90 × 0.80 × 0.95 = 0.684, or 68.4%.",
  },
  firmicore:
    "Firmicore is a maintenance system, not a production monitoring system, so it does not replace the counters that feed OEE. It records breakdowns and work orders, which is where availability losses start, and its [MOE score](/glossary/moe/) is a separate maintenance metric designed to show which machine to look at next.",
  relatedTerms: ["mtbf", "mttr", "downtime", "moe", "machine-health-score"],
  relatedPosts: ["how-to-reduce-machine-downtime", "the-real-cost-of-unplanned-downtime", "what-is-mttr"],
  faq: [
    {
      q: "What is the difference between OEE and overall equipment effectiveness?",
      a: "Nothing. OEE is the abbreviation of overall equipment effectiveness. Both names refer to the same metric and the same formula.",
    },
    {
      q: "Is OEE the same as machine uptime?",
      a: "No. Uptime is only the availability factor. OEE also counts running below the ideal speed and producing defective units.",
    },
    {
      q: "Should OEE be 100%?",
      a: "It is a ceiling used as a reference point, not a target to reach. The useful questions are which factor is lowest and which loss inside it can be removed.",
    },
  ],
  updated: "2026-10-07",
};
