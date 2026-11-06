import type { BlogPost } from "../blog-data";

export const post: BlogPost = {
  title: "What Maintenance KPIs Should Every Factory Manager Track?",
  seoTitle: "Maintenance KPIs: 8 Metrics Every Factory Needs",
  slug: "maintenance-kpis-manufacturing",
  category: "Operations",
  read: "10 min",
  date: "November 6, 2026",
  author: "Tharindu Jayasekara",
  role: "Founder, Lumora Ventures",
  excerpt:
    "Eight maintenance KPIs with formulas and worked examples, which question each answers, and how to build a dashboard that drives decisions.",
  metaDescription:
    "Discover eight important maintenance KPIs, their formulas, and how factory managers can use them to measure equipment reliability and maintenance performance.",
  deck: "Completed work orders alone do not show whether maintenance is improving. These eight indicators do, if they are defined and reviewed together.",
  takeaways: [
    "Start with a small set of KPIs tied to decisions, then expand as data quality improves.",
    "MTBF measures reliability, MTTR recovery speed; read them together or one can hide the other.",
    "PM compliance measures execution of scheduled tasks; it is not PM coverage.",
    "Define every metric's formula, period, scope and data source, and never silently change it.",
    "Establish a baseline before setting targets; avoid arbitrary benchmarks.",
  ],
  intro: [
    "A factory can complete hundreds of maintenance jobs a month and still suffer recurring breakdowns and delayed production. Key Performance Indicators (KPIs) translate maintenance activity into measurable information about reliability, workload, preventive maintenance performance and process effectiveness.",
    "The aim is to pick indicators that support better decisions, not to fill dashboards with numbers nobody uses.",
  ],
  sections: [
    {
      id: "why",
      heading: "Why maintenance KPIs matter",
      blocks: [
        {
          type: "p",
          text: "KPIs help teams understand recurring failures, spot long repair times, monitor preventive maintenance completion, improve planning, manage outstanding work, evaluate reliability and support investment decisions. Without consistent measurement, managers rely on opinion and incomplete records.",
        },
      ],
    },
    {
      id: "mtbf",
      heading: "1. Mean Time Between Failures (MTBF)",
      blocks: [
        {
          type: "callout",
          label: "Formula",
          text: "MTBF = Total Operating Time / Number of Failures. Example: 600 operating hours and five failures give 600 / 5 = 120 hours.",
        },
        {
          type: "p",
          text: "A rising MTBF may indicate improved reliability, provided equipment, operating conditions and failure definitions stay comparable.",
        },
      ],
    },
    {
      id: "mttr",
      heading: "2. Mean Time to Repair (MTTR)",
      blocks: [
        {
          type: "callout",
          label: "Formula",
          text: "MTTR = Total Repair or Downtime Duration / Number of Repairs. Example: four incidents with 240 minutes of total downtime give 240 / 4 = 60 minutes.",
        },
        {
          type: "p",
          text: "Define the time boundaries consistently; Firmicore's MTTR measures downtime from failure until the machine returns to service. A falling MTTR means faster recovery, but also watch MTBF: repairing faster does not mean failing less. See [what is MTTR](/blog/what-is-mttr/).",
        },
      ],
    },
    {
      id: "pm-compliance",
      heading: "3. Preventive maintenance compliance",
      blocks: [
        {
          type: "callout",
          label: "Formula",
          text: "PM Compliance = (PM Tasks Completed On Time / PM Tasks Due) × 100. Example: 92 of 100 tasks on time is 92%.",
        },
        {
          type: "p",
          text: "It shows whether the programme is actually being executed. Do not confuse it with PM coverage, which measures how many relevant assets have schedules defined.",
        },
      ],
    },
    {
      id: "schedule-compliance",
      heading: "4. Schedule compliance",
      blocks: [
        {
          type: "callout",
          label: "Formula",
          text: "Schedule Compliance = (Scheduled Work Completed as Planned / Total Scheduled Work) × 100. Example: 43 of 50 jobs completed as planned is 86%.",
        },
        {
          type: "p",
          text: "Review why schedules change: emergency work, production restrictions, unavailable parts and labour shortages.",
        },
      ],
    },
    {
      id: "pmp",
      heading: "5. Planned maintenance percentage",
      blocks: [
        {
          type: "callout",
          label: "Formula",
          text: "PMP = (Planned Maintenance Labour Hours / Total Maintenance Labour Hours) × 100. Example: 300 of 500 hours is 60%.",
        },
        {
          type: "p",
          text: "A rising PMP may show better preparation and fewer disruptions from reactive work. Define what counts as planned work and keep it consistent.",
        },
      ],
    },
    {
      id: "backlog",
      heading: "6. Maintenance backlog weeks",
      blocks: [
        {
          type: "callout",
          label: "Formula",
          text: "Backlog Weeks = Ready Backlog Labour Hours / Weekly Available Labour Capacity. Example: 240 / 40 = 6 weeks.",
        },
        {
          type: "p",
          text: "It shows how far ahead the workload extends. Split the backlog by priority and planning status rather than relying on one total. See [maintenance backlog](/blog/maintenance-backlog-calculation-reduction/).",
        },
      ],
    },
    {
      id: "repeat-failure",
      heading: "7. Repeat failure rate",
      blocks: [
        {
          type: "callout",
          label: "Formula",
          text: "Repeat Failure Rate = (Repeat Failures / Total Recorded Failures) × 100. Example: 4 repeats among 20 failures is 20%.",
        },
        {
          type: "p",
          text: "Define what qualifies as a repeat: the asset, the failure mode and the time window. The rate shows where repair quality, root cause investigation or preventive actions need attention. See [root cause analysis](/blog/why-machines-keep-breaking-down-root-cause-analysis/).",
        },
      ],
    },
    {
      id: "downtime",
      heading: "8. Equipment downtime",
      blocks: [
        {
          type: "p",
          text: "Downtime is the time equipment is unavailable when production needs it. Track total downtime, downtime by machine, failure type and production line, and planned versus unplanned downtime. Investigate the reason behind the lost time too: a machine may be repaired quickly yet stay unavailable while materials or production approval are delayed. Match the definition to the plant's production reporting rules.",
        },
      ],
    },
    {
      id: "prioritise",
      heading: "Which KPIs should managers prioritise?",
      blocks: [
        {
          type: "table",
          headers: ["Management question", "Useful KPI"],
          rows: [
            ["Are machines becoming more reliable?", "MTBF"],
            ["How quickly do we restore equipment?", "MTTR"],
            ["Are preventive tasks being completed?", "PM compliance"],
            ["Is planned work happening as scheduled?", "Schedule compliance"],
            ["How much work is handled proactively?", "Planned maintenance percentage"],
            ["Are we accumulating unfinished jobs?", "Backlog weeks"],
            ["Are the same problems returning?", "Repeat failure rate"],
            ["Which machines are stopping production?", "Downtime"],
          ],
        },
      ],
    },
    {
      id: "dashboard",
      heading: "How to build a maintenance KPI dashboard",
      blocks: [
        {
          type: "steps",
          items: [
            {
              title: "Define every metric",
              text: "Write the exact formula, period, asset scope and data source, such as whether MTBF uses operating or calendar hours. Do not change it silently between periods.",
            },
            {
              title: "Establish a baseline",
              text: "Collect data over a consistent period before setting improvement targets.",
            },
            {
              title: "Assign ownership",
              text: "Maintenance supervisors may own work-order and PM measures, while production owns output and OEE data.",
            },
            {
              title: "Investigate changes",
              text: "If MTBF drops, find which machines or failure modes. If PM compliance drops, check workload, technician availability and production windows.",
            },
            {
              title: "Review trends",
              text: "Look across several periods, not one unusual week, and separate equipment condition from schedule or conditions.",
            },
          ],
        },
      ],
    },
    {
      id: "vs-oee",
      heading: "Maintenance KPIs vs OEE",
      blocks: [
        {
          type: "p",
          text: "Maintenance KPIs measure the effectiveness of maintenance processes and equipment reliability. OEE measures equipment effectiveness through availability, performance and quality. They are connected, not interchangeable: maintenance improvements support OEE when they reduce equipment-related losses, but speed and quality also depend on factors outside maintenance. See [what is OEE](/blog/oee-calculation-manufacturing/).",
        },
      ],
    },
    {
      id: "cmms",
      heading: "How a CMMS helps track maintenance KPIs",
      blocks: [
        {
          type: "p",
          text: "A CMMS captures the records KPIs depend on: breakdown timestamps, work-order assignments, repair durations, PM completion, equipment history, parts usage and inspection records. Firmicore provides maintenance reporting, PM compliance reporting and cross-module KPI analytics, with export to PDF, Excel and Google Sheets. See the [maintenance management software guide](/maintenance-management-software/) and the [glossary](/glossary/).",
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
              q: "What are the most important maintenance KPIs?",
              a: "Common starting metrics are MTBF, MTTR, preventive maintenance compliance, schedule compliance, planned maintenance percentage, maintenance backlog, repeat failure rate and equipment downtime.",
            },
            {
              q: "How many maintenance KPIs should a factory track?",
              a: "There is no ideal number. Start with a small set tied to operational decisions and expand only when data and review processes are reliable.",
            },
            {
              q: "What is a good preventive maintenance compliance percentage?",
              a: "It depends on criticality, task definitions, scheduled windows and operating requirements. Set a baseline and realistic targets rather than adopting arbitrary benchmarks.",
            },
            {
              q: "Can maintenance KPIs be calculated in Excel?",
              a: "Yes. Small teams can start with spreadsheets, but consistent timestamps, work-order records, asset IDs and metric definitions matter more as the operation grows.",
            },
            {
              q: "Why should maintenance KPIs be reviewed together?",
              a: "One KPI can hide problems another shows. For example, MTTR may improve while MTBF worsens. Several connected metrics give a fuller picture.",
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
          text: "The goal is not the largest number of measurements but the indicators that reveal problems early and support better decisions. A maintenance dashboard should help managers decide what to do next, not just show what happened last month.",
        },
      ],
    },
  ],
  tags: ["metrics", "downtime", "preventive-maintenance"],
  related: ["what-is-mttr", "oee-calculation-manufacturing", "maintenance-backlog-calculation-reduction"],
  sources: [
    { title: "A Guide to Maintenance KPIs", url: "https://www.ibm.com/think/topics/maintenance-kpis", publisher: "IBM" },
  ],
};
