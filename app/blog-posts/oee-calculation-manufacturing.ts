import type { BlogPost } from "../blog-data";

export const post: BlogPost = {
  title: "What Is OEE in Manufacturing? Formula, Example, and Ways to Improve It",
  seoTitle: "What Is OEE in Manufacturing? Formula and Example",
  slug: "oee-calculation-manufacturing",
  category: "Operations",
  read: "8 min",
  date: "November 6, 2026",
  author: "Tharindu Jayasekara",
  role: "Founder, Lumora Ventures",
  excerpt:
    "OEE multiplies availability, performance and quality into one number. The formula, a complete worked example, and what a good score actually means.",
  metaDescription:
    "Learn how to calculate Overall Equipment Effectiveness (OEE), understand availability, performance and quality, and identify production losses in your factory.",
  deck: "A machine can run for a whole shift without being productive for the whole shift. OEE shows where the time went: availability, performance or quality.",
  takeaways: [
    "OEE = Availability × Performance × Quality, with each expressed as a decimal.",
    "Availability is run time over planned production time; performance compares actual output to ideal cycle time; quality is good units over total units.",
    "There is no universal good OEE score. Establish a baseline and improve against it.",
    "OEE is a production effectiveness metric, not a maintenance-only score, though maintenance strongly affects availability.",
    "Define how changeovers, minor stops and planned maintenance are treated before measuring, and apply that consistently.",
  ],
  intro: [
    "A production machine operates for an entire shift, but does that mean it has been productive for the entire shift? Not necessarily. It might break down, run below its expected speed or produce defects, and valuable time is lost while the line still appears to be running.",
    "Overall Equipment Effectiveness (OEE) measures how effectively equipment uses its planned production time by combining availability, performance and quality.",
  ],
  sections: [
    {
      id: "components",
      heading: "What are the three components of OEE?",
      blocks: [
        {
          type: "p",
          text: "**Availability** measures how much of the planned production time the equipment was actually running.",
        },
        {
          type: "callout",
          label: "Formula",
          text: "Availability = (Run Time / Planned Production Time) × 100. Example: 420 minutes planned, 42 minutes of stops, so run time is 378 minutes. 378 / 420 = 90%.",
        },
        {
          type: "p",
          text: "Availability losses include unexpected breakdowns, mechanical and electrical failures, extended setup and changeover time (depending on your measurement rules) and other stops included in the agreed stop-time definition.",
        },
        {
          type: "p",
          text: "**Performance** measures whether the machine runs at its expected speed while running.",
        },
        {
          type: "callout",
          label: "Formula",
          text: "Performance = (Ideal Cycle Time × Total Units Produced / Run Time) × 100. Example: 0.5 min ideal cycle, 700 units, 378 min run time. (0.5 × 700) / 378 = 92.59%.",
        },
        {
          type: "p",
          text: "Performance losses come from reduced speed, minor stoppages, incorrect settings, material feeding problems and bottlenecks.",
        },
        {
          type: "p",
          text: "**Quality** measures the share of units that meet requirements without rework.",
        },
        {
          type: "callout",
          label: "Formula",
          text: "Quality = (Good Units / Total Units Produced) × 100. Example: 700 produced, 14 rejected, 686 good. 686 / 700 = 98%.",
        },
      ],
    },
    {
      id: "formula",
      heading: "The OEE formula and a complete example",
      blocks: [
        {
          type: "callout",
          label: "Formula",
          text: "OEE = Availability × Performance × Quality. Convert each percentage to a decimal first: 0.90 × 0.9259 × 0.98 = 0.8167, so OEE is 81.67%.",
        },
        {
          type: "table",
          caption: "A packaging machine over one shift.",
          headers: ["Measurement", "Value"],
          rows: [
            ["Total shift duration", "480 minutes"],
            ["Planned breaks and non-production time", "60 minutes"],
            ["Planned production time", "420 minutes"],
            ["Unplanned production stops", "42 minutes"],
            ["Actual run time", "378 minutes"],
            ["Ideal production cycle", "0.5 minutes per unit"],
            ["Total units produced", "700"],
            ["Rejected units", "14"],
            ["Good units", "686"],
          ],
        },
        {
          type: "table",
          headers: ["OEE component", "Calculation", "Result"],
          rows: [
            ["Availability", "378 / 420", "90%"],
            ["Performance", "(0.5 × 700) / 378", "92.59%"],
            ["Quality", "686 / 700", "98%"],
            ["OEE", "0.90 × 0.9259 × 0.98", "81.67%"],
          ],
        },
        {
          type: "p",
          text: "Roughly 81.67% of planned production time was converted into good products at ideal speed, and the losses are visible in three separate places. Measurement boundaries matter: remove planned breaks and excluded non-production periods consistently, and define how changeovers, minor stops and planned maintenance are treated.",
        },
      ],
    },
    {
      id: "good-score",
      heading: "What is a good OEE score?",
      blocks: [
        {
          type: "p",
          text: "There is no single OEE target for every operation. An OEE of 80% may be strong for one process and a large improvement opportunity for another. Rather than comparing unrelated machines:",
        },
        {
          type: "ol",
          items: [
            "Establish a reliable baseline.",
            "Compare performance over consistent periods.",
            "Identify the weakest OEE component.",
            "Investigate the largest losses.",
            "Set improvement targets based on operational requirements.",
          ],
        },
        {
          type: "p",
          text: "Some industries cite 85% as a world-class benchmark, but it should not be treated as a universal target or a guarantee of good performance.",
        },
      ],
    },
    {
      id: "improve-oee",
      heading: "How to improve OEE",
      blocks: [
        {
          type: "table",
          headers: ["Component", "What to do"],
          rows: [
            [
              "Availability",
              "Investigate recurring failures, improve preventive maintenance completion, keep critical spares available, speed up breakdown response and monitor downtime by machine and failure type.",
            ],
            [
              "Performance",
              "Review speed settings, material feeding consistency, minor stoppage records, line bottlenecks and operating conditions.",
            ],
            [
              "Quality",
              "Track rejects, identify recurring defect patterns and investigate the link between equipment condition and product quality.",
            ],
          ],
        },
      ],
    },
    {
      id: "maintenance-and-cmms",
      heading: "OEE, maintenance and your CMMS",
      blocks: [
        {
          type: "p",
          text: "OEE is a production effectiveness metric, not a maintenance-only score, but maintenance strongly influences availability and can affect performance and quality. Read it alongside [MTBF and MTTR](/blog/what-is-mttr/), preventive maintenance compliance, downtime and repeat failures. Raising availability through temporary repairs can lift short-term OEE while creating more repeat failures, so no single number should stand alone.",
        },
        {
          type: "p",
          text: "A CMMS creates reliable equipment and maintenance records, connecting breakdowns, work orders, schedules and parts usage so teams can see the maintenance-related causes of lost production. Firmicore provides maintenance reporting, machine health information, preventive maintenance compliance and an MOE dashboard. Its Machine Overall Effectiveness (MOE) is a separate composite of maintenance and machine-health data, and should not be confused with conventional production OEE, which needs production availability, performance and quality data. See the [maintenance management software guide](/maintenance-management-software/).",
        },
      ],
    },
    {
      id: "faq",
      heading: "Frequently asked questions",
      blocks: [
        {
          type: "faq",
          items: [
            {
              q: "What does OEE stand for?",
              a: "OEE stands for Overall Equipment Effectiveness. It measures the effectiveness of manufacturing equipment using availability, performance and quality.",
            },
            {
              q: "How do you calculate OEE?",
              a: "Multiply availability by performance and quality, using decimal values for each percentage.",
            },
            {
              q: "Is OEE a maintenance KPI?",
              a: "OEE is primarily a manufacturing performance metric. Maintenance affects its results, particularly equipment availability, but production, quality and operations also contribute.",
            },
            {
              q: "What causes low OEE?",
              a: "Common causes include equipment breakdowns, reduced operating speed, minor stoppages, production bottlenecks and defective products.",
            },
            {
              q: "Can OEE be calculated manually?",
              a: "Yes. Use production records, run times, planned production times, ideal cycle times and quality records. Consistent data collection matters more than the calculation tool.",
            },
          ],
        },
      ],
    },
    {
      id: "final-thoughts",
      heading: "Final thoughts",
      blocks: [
        {
          type: "p",
          text: "OEE turns production losses into measurable information. Instead of reporting that a machine had a difficult shift, teams can tell whether the problem was availability, performance or quality, and then investigate those losses.",
        },
      ],
    },
  ],
  tags: ["metrics", "downtime", "oee"],
  related: ["what-is-mttr", "how-to-reduce-machine-downtime", "maintenance-kpis-manufacturing"],
  sources: [
    { title: "Calculating OEE", url: "https://www.oee.com/calculating-oee/", publisher: "OEE.com" },
    {
      title: "OEE Implementation Guide",
      url: "https://tmep.cis.tennessee.edu/oee-implementation-guide",
      publisher: "Tennessee Manufacturing Extension Partnership",
    },
  ],
};
