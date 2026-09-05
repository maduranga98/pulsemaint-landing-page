import type { BlogPost } from "../blog-data";

export const post: BlogPost = {
  title: "The Real Cost of Unplanned Downtime",
  seoTitle: "The Real Cost of Unplanned Downtime",
  slug: "the-real-cost-of-unplanned-downtime",
  category: "Operations",
  read: "8 min",
  date: "May 21, 2026",
  author: "Tharindu Jayasekara",
  role: "Founder, Lumora Ventures",
  excerpt:
    "The visible repair bill is rarely the problem. Lost output, overtime, scrap, and delayed customer orders usually cost far more.",
  metaDescription:
    "The repair bill is the top layer. The real damage is lost throughput, scrap, overtime, missed orders, and a team that starts every shift reactive.",
  deck: "The visible repair bill is only the top layer. The real damage hides in lost throughput, scrap, overtime, missed orders, and the trust your team loses when every shift starts in reactive mode.",
  figure: "Fig. 01 - Reported downtime cost vs hidden operational drag across a maintenance year.",
  intro: [
    "Unplanned downtime is usually discussed like a repair problem. A bearing failed, a motor tripped, a valve stuck open. Someone asks how long it took to fix. Someone else asks what part was replaced. The invoice gets filed and everyone moves on.",
  ],
  sections: [
    {
      id: "the-downtime-iceberg",
      heading: "The downtime iceberg",
      blocks: [
        {
          type: "p",
          text: "The most expensive parts of a stoppage rarely show up on the maintenance invoice. They sit in production schedules, quality rejects, overtime, customer penalties, and supervisor attention. In most factories, those costs are scattered across teams and never consolidated into a single number.",
        },
        {
          type: "stats",
          items: [
            ["3-5x", "hidden cost multiplier"],
            ["42m", "average MTTR target"],
            ["17", "active tickets"],
            ["99.2%", "uptime goal"],
          ],
        },
      ],
    },
    {
      id: "what-to-measure",
      heading: "What to measure",
      blocks: [
        {
          type: "p",
          text: "Start with a minimum reliable dataset: machine, line, timestamp, reporter, severity, technician response time, parts used, root cause, safe actions taken, and final resolution. If your system cannot capture this under pressure, it will not survive a real breakdown.",
        },
        {
          type: "ul",
          items: [
            "Use QR codes so reports start at the machine, not in a spreadsheet.",
            "Capture operator evidence before memory fades or the machine is cleaned.",
            "Separate response time from repair time so staffing issues become visible.",
            "Attach parts usage to work orders so inventory planning follows reality.",
          ],
        },
        {
          type: "callout",
          label: "Firmicore note",
          text: "The goal is not more forms. The goal is a lightweight operating loop where every breakdown makes the next response faster.",
        },
      ],
    },
    {
      id: "a-better-operating-loop",
      heading: "A better operating loop",
      blocks: [
        {
          type: "p",
          text: "A modern maintenance flow should work like a control room: report instantly, route clearly, guide the first safe actions, log the repair, update the machine history, and recalculate the dashboard without manual reconciliation.",
        },
        {
          type: "steps",
          items: [
            { title: "Report", text: "Capture the failure at the machine, with a scanned asset and a system timestamp." },
            { title: "Triage", text: "Guide the operator through safe actions while the technician is on the way." },
            { title: "Assign", text: "Route to the right trade with symptom, photo, and history attached." },
            { title: "Repair", text: "Record work, parts, and duration against the asset as it happens." },
            { title: "Learn", text: "Close with a controlled cause code so the pattern becomes visible." },
          ],
        },
      ],
    },
    {
      id: "closing-the-loop",
      heading: "Closing the loop",
      blocks: [
        {
          type: "p",
          text: "Downtime cost only becomes manageable once it is tracked consistently, not just remembered anecdotally. Teams that log every stoppage against the same fields - machine, timestamp, cause, and resolution - start noticing patterns within weeks: which lines fail most often, which parts wear out early, and which shifts are under-resourced.",
        },
        {
          type: "p",
          text: "That visibility is what turns maintenance from a reactive cost center into a lever for uptime. The technology matters less than the discipline of capturing the same data every time a machine goes down.",
        },
      ],
    },
  ],
  related: ["how-to-reduce-machine-downtime", "what-is-mttr", "how-to-report-a-machine-breakdown"],
};
