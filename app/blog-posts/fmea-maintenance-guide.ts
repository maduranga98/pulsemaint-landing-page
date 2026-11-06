import type { BlogPost } from "../blog-data";

export const post: BlogPost = {
  title: "What Is FMEA in Maintenance? A Step-by-Step Guide to Preventing Equipment Failures",
  seoTitle: "What Is FMEA in Maintenance? A Practical Guide",
  slug: "fmea-maintenance-guide",
  category: "Engineering",
  read: "9 min",
  date: "November 6, 2026",
  author: "Tharindu Jayasekara",
  role: "Founder, Lumora Ventures",
  excerpt:
    "FMEA identifies how equipment could fail, what that would cost, and which risks deserve attention first. A seven-step process with a worked conveyor example.",
  metaDescription:
    "Learn how Failure Mode and Effects Analysis (FMEA) helps manufacturers identify equipment risks, prioritize maintenance, and prevent failures before they occur.",
  deck: "Instead of waiting for a component to fail, FMEA asks how it could fail, what the consequences would be, and which risks to deal with first.",
  takeaways: [
    "FMEA (Failure Mode and Effects Analysis) is a proactive method for identifying potential failures, their causes and effects, and prioritising action.",
    "Traditional scoring uses Severity, Occurrence and Detection; RPN = S × O × D.",
    "RPN is not an absolute measure of safety risk: a rare but severe failure must not be ignored because its product looks moderate.",
    "FMEA is proactive; root cause analysis is usually reactive. Use each to update the other.",
    "The valuable output is the action plan, not the number in the scoring column.",
  ],
  intro: [
    "What if your factory could identify some equipment failure risks before they caused a production interruption? FMEA is a structured method for identifying potential failures, understanding their effects, assessing their causes and prioritising actions to reduce risk.",
    "It is particularly useful for plants that operate critical machinery where an unexpected failure could affect safety, quality, production or cost.",
  ],
  sections: [
    {
      id: "what-it-means",
      heading: "What does FMEA mean?",
      blocks: [
        {
          type: "p",
          text: "A failure mode describes the way something might fail. An effect describes what happens when it does. FMEA moves the discussion from 'what could break' to 'what would that failure mean for the operation'.",
        },
        {
          type: "table",
          caption: "One failure mode for an industrial water pump.",
          headers: ["Element", "Example"],
          rows: [
            ["Equipment", "Industrial water pump"],
            ["Function", "Maintain required water flow"],
            ["Failure mode", "Pump bearing failure"],
            ["Possible cause", "Lubrication problem or bearing deterioration"],
            ["Possible effect", "Pump stops and production loses water supply"],
            ["Potential consequence", "Production interruption"],
          ],
        },
      ],
    },
    {
      id: "why-it-matters",
      heading: "Why is FMEA important in manufacturing?",
      blocks: [
        {
          type: "p",
          text: "Maintenance resources are limited. A factory cannot give every machine the same inspection frequency, spare-parts budget and attention. FMEA shows where preventive action is worth the most. It helps teams to:",
        },
        {
          type: "ul",
          items: [
            "Identify potential equipment failures.",
            "Understand the operational consequences of failures.",
            "Prioritise maintenance improvement opportunities.",
            "Improve preventive maintenance planning.",
            "Support spare-parts decisions.",
            "Reduce avoidable production interruptions.",
            "Improve cross-functional communication.",
          ],
        },
        {
          type: "p",
          text: "FMEA is a planning and risk-analysis method. It does not replace physical inspections, engineering assessments or legally required safety assessments.",
        },
      ],
    },
    {
      id: "scoring",
      heading: "Severity, occurrence, detection and the RPN",
      blocks: [
        {
          type: "p",
          text: "**Severity** is how serious the consequences of a failure could be, from minor inconvenience through reduced capacity and major interruption to critical safety or environmental consequences. **Occurrence** estimates how often a failure cause is expected, supported by breakdown records and operating experience. **Detection** is how likely existing controls are to catch the cause or failure mode before the effect occurs; equipment with effective condition monitoring gives earlier warning than equipment with occasional visual checks. Detection scoring conventions vary, so define your scales before starting.",
        },
        {
          type: "callout",
          label: "Formula",
          text: "RPN = Severity × Occurrence × Detection. Example: 8 × 5 × 6 = 240.",
        },
        {
          type: "p",
          text: "The RPN gives a numerical way to compare failure modes, but it is not an absolute measure of safety risk. Different combinations can produce the same RPN with very different consequences, and a low-frequency, high-severity failure must not be ignored because its product looks moderate. Some modern methodologies, including AIAG-VDA, use Action Priority instead of relying only on a multiplied RPN. Match the scoring method to your industry and risk-management requirements.",
        },
      ],
    },
    {
      id: "how-to",
      heading: "How to perform FMEA in a manufacturing plant",
      blocks: [
        {
          type: "steps",
          items: [
            {
              title: "Select the equipment or process",
              text: "Start with a defined scope: a critical machine, a packaging line, a boiler, a conveyor system or a process with recurring quality problems. Do not try to assess the whole factory at once.",
            },
            {
              title: "Understand the function",
              text: "Document what the equipment is expected to do, such as a centrifugal pump delivering water at a required flow and pressure. The intended function defines what failure means.",
            },
            {
              title: "Identify failure modes",
              text: "Ask maintenance and operations how the equipment could stop performing. For a pump: bearing failure, seal leakage, impeller damage, motor overheating, loss of suction, excessive vibration. Use manuals and breakdown records.",
            },
            {
              title: "Identify causes and effects",
              text: "Each failure mode needs possible causes and consequences. These are possible scenarios, not confirmed diagnoses, and must be verified against the actual equipment and conditions.",
            },
            {
              title: "Evaluate the risk",
              text: "Score severity, occurrence and detection using your chosen method. Include safety and environmental consequences explicitly rather than letting them disappear inside an average.",
            },
            {
              title: "Prioritise corrective actions",
              text: "Reduce likelihood, improve detection or reduce consequences: better inspection procedures, lubrication review, condition monitoring, updated PM tasks, operator training, spare-parts availability. Give each action an owner and completion date.",
            },
            {
              title: "Review regularly",
              text: "Update the FMEA when equipment is modified, new failure patterns appear, operating conditions change, new suppliers or components are introduced, or investigations reveal previously unknown causes.",
            },
          ],
        },
      ],
    },
    {
      id: "example",
      heading: "FMEA example: conveyor motor",
      blocks: [
        {
          type: "p",
          text: "A conveyor motor is essential to a packaging line. An FMEA exercise surfaces the following risks.",
        },
        {
          type: "table",
          headers: ["Potential failure", "Possible consequence", "Recommended action"],
          rows: [
            ["Motor overheating", "Conveyor stops", "Review loading and cooling inspections"],
            ["Bearing deterioration", "Vibration and eventual motor failure", "Establish appropriate condition monitoring"],
            ["Drive belt damage", "Reduced or interrupted material movement", "Include belt condition checks"],
            ["Electrical connection deterioration", "Unreliable operation or electrical hazard", "Qualified electrical inspection"],
          ],
        },
        {
          type: "p",
          text: "The important result is not the score. It is the action plan that follows the analysis.",
        },
      ],
    },
    {
      id: "fmea-vs-rca",
      heading: "FMEA vs root cause analysis",
      blocks: [
        {
          type: "table",
          headers: ["FMEA", "Root cause analysis"],
          rows: [
            ["Proactive", "Usually reactive"],
            ["Identifies potential failures", "Investigates failures that happened"],
            ["Evaluates possible effects and causes", "Finds verified underlying causes"],
            ["Helps prioritise preventive actions", "Helps prevent recurrence"],
            ["Used before an incident", "Often used after an incident"],
          ],
        },
        {
          type: "p",
          text: "They complement each other: when a real failure occurs, the root cause analysis should update the assumptions and controls in the relevant FMEA. Read our guide on [why the same machine keeps breaking down](/blog/why-machines-keep-breaking-down-root-cause-analysis/).",
        },
      ],
    },
    {
      id: "cmms",
      heading: "How a CMMS supports FMEA",
      blocks: [
        {
          type: "p",
          text: "A CMMS preserves the records that make failure-risk assessments useful: equipment history, breakdown frequency, previous corrective work, preventive maintenance records, spare-parts usage, inspection results and open tasks. Firmicore connects machine records, breakdown management, work orders, preventive maintenance and inventory for a more consistent view of equipment history. It does not replace a structured FMEA workshop or perform engineering risk assessments; it organises the records those decisions depend on. See the [CMMS software guide](/cmms-software/).",
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
              q: "What is FMEA in maintenance?",
              a: "FMEA is a systematic method of identifying potential equipment failures, evaluating their consequences and causes, and prioritising actions to reduce operational risk.",
            },
            {
              q: "What are the three main FMEA factors?",
              a: "Traditional FMEA uses Severity, Occurrence and Detection. These assess the seriousness, likelihood and detectability of potential failures.",
            },
            {
              q: "What is an acceptable RPN score?",
              a: "There is no universal threshold. Each organisation should define its scoring criteria and escalation rules. High-severity safety and environmental risks need attention regardless of RPN.",
            },
            {
              q: "How often should FMEA be updated?",
              a: "Review it when equipment, processes, operating conditions, failure history or controls change, and periodically under your risk-management process.",
            },
            {
              q: "Can small manufacturing companies use FMEA?",
              a: "Yes. A small factory can apply FMEA to individual critical machines using a simple worksheet, a technician, an operator and a supervisor. No expensive software is required.",
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
          text: "FMEA lets maintenance teams move beyond responding to failures and start systematically evaluating what could go wrong. By understanding failure modes, prioritising risks and assigning preventive actions, manufacturers make better use of limited maintenance resources. The best time to investigate a machine failure is before it happens.",
        },
      ],
    },
  ],
  tags: ["preventive-maintenance", "root-cause-analysis", "risk"],
  related: ["why-machines-keep-breaking-down-root-cause-analysis", "what-is-preventive-maintenance", "asset-criticality-analysis-manufacturing"],
  sources: [
    { title: "Failure Mode and Effects Analysis", url: "https://asq.org/quality-resources/fmea", publisher: "ASQ" },
    {
      title: "FMEA: Failure Modes and Effects Analysis",
      url: "https://www.ifm.eng.cam.ac.uk/research/dmg/tools-and-techniques/fmea-failure-modes-and-effects-analysis/",
      publisher: "University of Cambridge",
    },
  ],
};
