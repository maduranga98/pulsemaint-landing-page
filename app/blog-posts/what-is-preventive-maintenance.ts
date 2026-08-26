import type { BlogPost } from "../blog-data";

export const post: BlogPost = {
  title: "What Is Preventive Maintenance? A Beginner's Guide",
  slug: "what-is-preventive-maintenance",
  category: "Guides",
  read: "8 min",
  date: "June 26, 2026",
  author: "Tharindu Jayasekara",
  role: "Founder, Lumora Ventures",
  excerpt:
    "Preventive maintenance is work done on a schedule rather than after a failure. The definitions are simple; making the schedule survive a busy month is the hard part.",
  deck: "Definitions, the difference between calendar-based and meter-based schedules, how to build a checklist that technicians will actually complete, and a realistic first 90 days.",
  figure: "Fig. 01 - Preventive, reactive, and predictive maintenance compared by trigger and cost profile.",
  takeaways: [
    "Preventive maintenance is scheduled work performed before failure, triggered by calendar date or by usage such as running hours or cycles.",
    "Reactive maintenance responds after failure; predictive maintenance responds to a measured condition trend. Most plants need all three, in different proportions.",
    "Meter-based scheduling suits assets whose wear tracks usage; calendar-based suits time-driven degradation such as lubricant ageing or seasonal contamination.",
    "A PM checklist that cannot be completed in the scheduled window will not be completed at all - fewer, better tasks beat comprehensive ones.",
    "PM compliance, not PM coverage, is the number that correlates with fewer breakdowns.",
  ],
  intro: [
    "Preventive maintenance is one of the few areas of plant operations where the theory is genuinely simple and the practice genuinely difficult. Nobody disagrees that servicing a machine before it fails is better than after. Everybody has a preventive schedule. Very few plants complete it.",
  ],
  sections: [
    {
      id: "definitions",
      heading: "Preventive vs reactive vs predictive maintenance",
      blocks: [
        {
          type: "table",
          caption: "Three strategies, distinguished by what triggers the work.",
          headers: ["Strategy", "Trigger", "Strength", "Weakness"],
          rows: [
            ["Reactive", "The asset has failed", "No planning overhead; correct for low-consequence assets", "Unplanned downtime, secondary damage, overtime"],
            ["Preventive", "A date or usage threshold is reached", "Predictable, plannable, easy to staff", "Some work is done earlier than necessary"],
            ["Predictive", "A measured condition crosses a threshold", "Work happens only when needed", "Requires instrumentation, data, and interpretation skill"],
          ],
        },
        {
          type: "p",
          text: "The right mix is not 'all preventive'. Running a non-critical, cheap, redundant component to failure is a legitimate and often optimal decision. The mistake is making that decision by accident rather than deliberately - which is what happens when there is no schedule at all.",
        },
        {
          type: "callout",
          label: "A practical rule",
          text: "Sort assets by what happens when they stop. Anything that stops a line or creates a safety or compliance exposure gets a preventive schedule. Everything else can be justified case by case.",
        },
      ],
    },
    {
      id: "how-schedules-work",
      heading: "How PM schedules work: calendar-based vs meter-based",
      blocks: [
        {
          type: "p",
          text: "Every preventive task needs a trigger rule. There are two, and picking the wrong one is why schedules drift out of line with reality.",
        },
        {
          type: "ul",
          items: [
            "Calendar-based: every 30, 90, or 365 days. Correct when degradation is time-driven - lubricant ageing, seal perishing, seasonal dust or humidity - or when a regulation specifies an interval.",
            "Meter-based: every 5,000 running hours, 100,000 cycles, or 10,000 units produced. Correct when wear tracks usage, which covers most mechanical wear items.",
            "Hybrid: whichever comes first. Common for assets with both a usage-driven wear path and a time-driven one, such as a gearbox that needs an oil change either every 4,000 hours or annually.",
          ],
        },
        {
          type: "p",
          text: "Meter-based scheduling is more accurate and harder to run, because it requires a meter reading to arrive reliably. If nobody is capturing running hours, a meter-based schedule silently stops generating work. Start calendar-based where meter data is not yet trustworthy, and convert as the readings become reliable.",
        },
      ],
    },
    {
      id: "building-a-checklist",
      heading: "Building a PM checklist template",
      blocks: [
        {
          type: "p",
          text: "The checklist is where preventive maintenance either becomes real work or becomes a tick-box exercise. The difference is mostly length and specificity.",
        },
        {
          type: "steps",
          items: [
            {
              title: "Start from failure history, not from the manual",
              text: "The manufacturer's manual describes ideal maintenance for an ideal environment. Your failure history describes what actually breaks in your plant. Where they conflict, the history wins.",
            },
            {
              title: "Write tasks as observable actions",
              text: "'Check belt tension' is not checkable. 'Measure belt deflection at midpoint; record mm; replace if over 12mm' is. If a supervisor cannot verify the task was done from the record, the task is not specified.",
            },
            {
              title: "Capture readings, not just ticks",
              text: "A recorded value creates a trend. A tick creates nothing. Numeric fields on the two or three most diagnostic measurements turn your PM into a data source.",
            },
            {
              title: "Time-box it honestly",
              text: "Estimate how long the checklist takes and compare it against the window the line is actually available. If it does not fit, the checklist is fiction. Cut it.",
            },
            {
              title: "Include the safe-shutdown steps",
              text: "Isolation and lockout are part of the task, not a precondition assumed to be known. For audits, this is the part that gets inspected.",
            },
            {
              title: "Attach photos of the reference state",
              text: "A photo of what correct looks like resolves more ambiguity than three paragraphs of description, especially across language differences.",
            },
          ],
        },
      ],
    },
    {
      id: "compliance-and-breakdowns",
      heading: "How PM compliance connects to breakdown frequency",
      blocks: [
        {
          type: "p",
          text: "There are two different numbers and plants routinely confuse them. Coverage is the share of critical assets that have a preventive schedule defined. Compliance is the share of preventive work orders completed inside their scheduled window.",
        },
        {
          type: "p",
          text: "Coverage is easy to raise - you write more schedules in an afternoon. Compliance is hard, because it competes with breakdowns for the same technicians. And compliance is the one that plausibly relates to failure frequency: a schedule that exists but is not executed does not prevent anything.",
        },
        {
          type: "callout",
          label: "On causation",
          text: "Be careful reading this correlation in your own data. Months with fewer breakdowns free up technicians to complete more PM, so high compliance and low breakdown counts reinforce each other in both directions. Track both over quarters and treat sharp single-month movements with suspicion.",
        },
        {
          type: "ul",
          items: [
            "Measure compliance against the scheduled window, not against 'eventually completed'.",
            "Track overdue PM as a count and an age, so a growing backlog is visible before it becomes a breakdown.",
            "When compliance falls below target for two consecutive months, cut tasks rather than exhorting the team. A schedule nobody can complete produces guilt, not maintenance.",
          ],
        },
      ],
    },
    {
      id: "first-90-days",
      heading: "Getting started: your first 90 days of PM scheduling",
      blocks: [
        {
          type: "ol",
          items: [
            "Days 1-15: build a clean asset register with a consistent hierarchy and a criticality rating on each machine. Everything else depends on this and nothing else should start first.",
            "Days 16-30: pick the ten most critical assets. Only ten. Pull their failure history from whatever records exist, however imperfect.",
            "Days 31-45: write one checklist per asset, time-boxed to the window the line is genuinely available, with numeric readings on the two most diagnostic measurements.",
            "Days 46-60: run the schedules and measure completion honestly. Expect the first cycle to expose that some windows do not exist in practice.",
            "Days 61-75: cut and revise. Remove tasks that were skipped without consequence; fix the ones that were skipped for lack of time or parts.",
            "Days 76-90: extend to the next tier of assets only once the first ten are running above 90 percent compliance. Extending before that just distributes the failure more widely.",
          ],
        },
        {
          type: "stats",
          items: [
            ["10", "assets to start with"],
            ["90%", "compliance before extending"],
            ["2", "numeric readings per checklist"],
            ["90", "days to a working baseline"],
          ],
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
              q: "What is preventive maintenance?",
              a: "Preventive maintenance is maintenance work performed on a schedule before a failure occurs, triggered either by elapsed time (calendar-based) or by usage such as running hours or production cycles (meter-based).",
            },
            {
              q: "What is the difference between preventive and predictive maintenance?",
              a: "Preventive maintenance is triggered by a fixed schedule regardless of the asset's condition. Predictive maintenance is triggered by a measured condition - vibration, temperature, oil analysis - crossing a threshold, so work happens only when the data indicates it is needed.",
            },
            {
              q: "How often should preventive maintenance be done?",
              a: "Start from the manufacturer's interval, then adjust using your own failure history. If the asset repeatedly fails before the scheduled service, shorten the interval; if services consistently find nothing, lengthen it rather than continuing to spend the window.",
            },
            {
              q: "What is PM compliance?",
              a: "PM compliance is the percentage of preventive work orders completed within their scheduled window. It differs from PM coverage, which is the share of assets that have a schedule defined at all. Compliance is the number that relates to breakdown frequency.",
            },
          ],
        },
      ],
    },
  ],
  related: ["what-is-a-cmms", "how-to-reduce-machine-downtime", "cmms-for-regulated-manufacturing"],
};
