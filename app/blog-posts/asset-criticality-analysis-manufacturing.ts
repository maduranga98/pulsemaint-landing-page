import type { BlogPost } from "../blog-data";

export const post: BlogPost = {
  title: "Asset Criticality Analysis: How to Identify Your Most Critical Machines",
  seoTitle: "Asset Criticality Analysis: Rank Your Machines",
  slug: "asset-criticality-analysis-manufacturing",
  category: "Engineering",
  read: "9 min",
  date: "November 6, 2026",
  author: "Tharindu Jayasekara",
  role: "Founder, Lumora Ventures",
  excerpt:
    "Treating 100 machines equally wastes effort and under-protects the ones that matter. A seven-step method for ranking equipment by the consequence and likelihood of failure.",
  metaDescription:
    "Learn how to perform asset criticality analysis, evaluate machine failure risks, build a criticality matrix, and prioritize maintenance resources.",
  deck: "If one machine stops the whole line and another has a backup, they should not get the same maintenance attention. Criticality analysis makes that explicit.",
  takeaways: [
    "Criticality ranks equipment by the likelihood and consequences of failure, not by price or size.",
    "A simple starting score is Likelihood (1–5) × Consequence (1–5).",
    "Assess safety, environmental, production and quality consequences separately so a severe one is not averaged away.",
    "Criticality (importance) is different from machine health (current condition).",
    "The analysis only matters if it changes PM frequency, spares, response priority and replacement planning.",
  ],
  intro: [
    "Should every machine in a plant receive the same level of maintenance attention? No. Some machines support the main production line, others provide backup, a few are used occasionally. If a critical one fails, the whole line may stop; if a non-critical one fails, production may carry on.",
    "Asset criticality analysis ranks equipment according to the risk and consequences of its failure, so resources go where they matter.",
  ],
  sections: [
    {
      id: "what-is-it",
      heading: "What is asset criticality?",
      blocks: [
        {
          type: "p",
          text: "Criticality describes how important a machine is to the operation, considering both the likelihood and the consequences of failure. A machine is not critical just because it is expensive; it depends on what happens when it fails.",
        },
        {
          type: "table",
          caption: "Illustrative classifications. Each plant must assess its own conditions.",
          headers: ["Machine", "Possible failure consequence", "Example criticality"],
          rows: [
            ["Main production compressor", "Multiple production lines affected", "High"],
            ["Backup pump", "Backup capacity unavailable", "Medium or high, depending on redundancy"],
            ["Secondary packaging machine", "Production can temporarily continue elsewhere", "Medium"],
            ["Non-essential utility equipment", "Limited operational impact", "Low"],
          ],
        },
      ],
    },
    {
      id: "why-it-matters",
      heading: "Why asset criticality analysis matters",
      blocks: [
        {
          type: "ul",
          items: [
            "Better maintenance prioritisation toward equipment where failure hurts most.",
            "More effective preventive maintenance: detailed inspections, suitable schedules or condition monitoring for high-criticality machines.",
            "Better spare-parts decisions about what to stock and what to order when needed.",
            "Improved production planning, by revealing major operational dependencies.",
            "Better replacement and capital-planning discussions.",
          ],
        },
      ],
    },
    {
      id: "how-to",
      heading: "How to perform asset criticality analysis",
      blocks: [
        {
          type: "steps",
          items: [
            {
              title: "Create a complete asset register",
              text: "ID, name, production line, location, manufacturer, model, installation date, function and maintenance history. A consistent register stops one machine appearing under several names.",
            },
            {
              title: "Define evaluation criteria",
              text: "Safety, production, environmental, quality and operational/financial impact. Reflect your industry and regulatory requirements.",
            },
            {
              title: "Estimate failure likelihood",
              text: "Use breakdown frequency, operating hours, age, maintenance history, condition data and past component failures. Avoid scores based only on opinion.",
            },
            {
              title: "Evaluate consequences",
              text: "Would production stop completely? Is there backup? How long is recovery? Are parts available? Are there safety or environmental consequences?",
            },
            {
              title: "Build a scoring system",
              text: "Start simple: likelihood 1 to 5, consequence 1 to 5, score = likelihood × consequence. For important assets, score safety, environment, production and quality separately.",
            },
            {
              title: "Assign criticality levels",
              text: "Map scores to levels and a management approach for each, as in the table below.",
            },
            {
              title: "Connect results to planning",
              text: "Review PM frequency, inspection methods, spare stock, contractor requirements, response priorities and replacement plans. Analysis that changes nothing is wasted.",
            },
          ],
        },
        {
          type: "table",
          caption: "Illustrative boundaries, not an industry standard.",
          headers: ["Score", "Classification", "Suggested management approach"],
          rows: [
            ["17–25", "Very high", "Detailed maintenance strategy, close condition review, contingency planning"],
            ["10–16", "High", "Structured preventive maintenance and priority repair response"],
            ["5–9", "Moderate", "Planned inspections and periodic performance review"],
            ["1–4", "Low", "Cost-effective maintenance based on operational needs"],
          ],
        },
      ],
    },
    {
      id: "example",
      heading: "Example: a packaging factory",
      blocks: [
        {
          type: "table",
          headers: ["Machine", "Failure likelihood", "Consequence", "Score"],
          rows: [
            ["Main production compressor", "3", "5", "15"],
            ["Packaging conveyor", "4", "4", "16"],
            ["Secondary labelling machine", "2", "2", "4"],
          ],
        },
        {
          type: "p",
          text: "On the illustrative matrix, the conveyor and compressor deserve more attention than the labelling machine. Final decisions should still consider safety, redundancy, environmental consequences and engineering requirements. A machine with a lower numerical score must not be ignored if its failure creates a severe safety risk.",
        },
      ],
    },
    {
      id: "criticality-vs-health",
      heading: "Asset criticality vs machine health",
      blocks: [
        {
          type: "p",
          text: "Criticality describes the consequences and risk of failure; machine health describes current condition. A critical machine can be in excellent shape, and a low-criticality one can have a serious defect. Criticality says how much attention an asset deserves; health says what state it is in now.",
        },
      ],
    },
    {
      id: "cmms",
      heading: "How a CMMS supports criticality management",
      blocks: [
        {
          type: "p",
          text: "A CMMS keeps the asset information and history that criticality decisions rely on: equipment IDs, breakdown history, work orders, preventive tasks, spare-parts data, inspection records and machine health. Firmicore provides a machine registry, breakdown management, preventive maintenance, inventory and machine health reporting. Related reading: [what is a CMMS](/blog/what-is-a-cmms/) and [what is preventive maintenance](/blog/what-is-preventive-maintenance/).",
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
              q: "What is asset criticality analysis?",
              a: "The process of ranking equipment based on the likelihood and consequences of failure, to prioritise maintenance and operational resources.",
            },
            {
              q: "How do you identify critical machines in a factory?",
              a: "Evaluate each machine for production dependency, safety, environmental consequences, quality impact, failure history, repair time and availability of alternative equipment.",
            },
            {
              q: "Is asset criticality the same as machine condition?",
              a: "No. Criticality describes the importance and consequences of failure. Condition describes the current state of the equipment.",
            },
            {
              q: "How often should asset criticality be reviewed?",
              a: "When processes change, equipment is replaced or modified, failure history shifts significantly or risk assumptions stop holding. Periodic reviews are also useful.",
            },
            {
              q: "Does every high-criticality machine need predictive maintenance?",
              a: "No. The right strategy depends on failure characteristics, available monitoring techniques, manufacturer recommendations and the economics of intervention.",
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
          text: "A good maintenance strategy does not treat every machine equally. Understanding which equipment affects safety, production, quality and continuity lets manufacturers direct resources where they matter most. Priorities should reflect the consequences of failure, not the size or price of a machine.",
        },
      ],
    },
  ],
  tags: ["preventive-maintenance", "risk", "asset-management"],
  related: ["fmea-maintenance-guide", "maintenance-work-order-prioritization", "what-is-preventive-maintenance"],
  sources: [
    { title: "Asset Criticality Analysis", url: "https://www.ibm.com/think/topics/asset-criticality-analysis", publisher: "IBM" },
  ],
};
