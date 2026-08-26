import type { BlogPost } from "../blog-data";

export const post: BlogPost = {
  title: "SAP Plant Maintenance Alternative for Factories That Don't Need a Full ERP",
  slug: "sap-plant-maintenance-alternative",
  category: "Comparison",
  read: "9 min",
  date: "July 31, 2026",
  author: "Tharindu Jayasekara",
  role: "Founder, Lumora Ventures",
  excerpt:
    "SAP PM is rarely chosen because it is the best maintenance tool. It is chosen because the company already runs SAP. Here is when that logic holds, and when it does not.",
  deck: "SAP Plant Maintenance is a module inside an ERP system of record. A CMMS is a floor-operations tool. They solve different problems, and confusing the two is how factories end up with a nine-month implementation for a job that needed three weeks.",
  figure: "Fig. 01 - Typical implementation timeline: SAP PM rollout versus a mobile-first CMMS pilot.",
  takeaways: [
    "SAP PM is part of the broader SAP ERP and S/4HANA suite. It is not sold or deployed as a standalone maintenance product.",
    "Its licensing and implementation costs are shaped by that ERP context - systems-integrator involvement is the norm, not the exception.",
    "For a single factory with no existing SAP footprint, the cost and timeline are frequently disproportionate to a maintenance-only requirement.",
    "SAP PM is the right call when you already run SAP for finance and procurement and want one system of record across the business.",
    "A purpose-built CMMS trades cross-module ERP consistency for floor-level speed: mobile-first technicians, QR reporting, and go-live in weeks.",
  ],
  intro: [
    "We meet this objection regularly in Sri Lanka: a group runs SAP for finance and procurement, and someone has proposed extending it into maintenance. The question on the table is whether the plant should adopt SAP PM or a dedicated CMMS.",
    "It is a fair question with a genuinely context-dependent answer, and it deserves better than a sales pitch. What follows is the comparison we would give if we were not selling anything - including the cases where SAP PM is clearly correct.",
  ],
  sections: [
    {
      id: "what-sap-pm-is",
      heading: "What SAP Plant Maintenance actually is",
      blocks: [
        {
          type: "p",
          text: "SAP Plant Maintenance is a functional module within SAP ERP, and its successor functionality sits inside S/4HANA Asset Management. It handles equipment master data, maintenance orders, notifications, task lists, and maintenance planning - and it does so in tight integration with materials management, procurement, controlling, and finance.",
        },
        {
          type: "p",
          text: "That integration is the point of the product. A maintenance order in SAP PM is not just a repair record; it is a cost object that flows into controlling, consumes stock through materials management, and can trigger procurement. If your accounting team wants maintenance spend to reconcile automatically against plant cost centres, this is the architecture that gets you there.",
        },
        {
          type: "ul",
          items: [
            "It is a module, not a standalone product. You do not buy SAP PM without the surrounding SAP landscape.",
            "The typical buyer is a large, multi-site enterprise with an existing SAP finance and procurement footprint.",
            "Implementation is normally delivered through a systems integrator rather than self-service configuration.",
            "Configuration decisions are shared with other modules, so maintenance rarely gets to move independently.",
          ],
        },
      ],
    },
    {
      id: "the-real-cost",
      heading: "The real cost of SAP PM for a maintenance-only need",
      blocks: [
        {
          type: "p",
          text: "Enterprise ERP licensing is negotiated, bundled, and confidential, so nobody can honestly quote you a number in a blog post. What can be described is the cost structure, which is where the surprises live.",
        },
        {
          type: "steps",
          items: [
            {
              title: "Licensing is tied to the ERP contract",
              text: "Maintenance module access is negotiated as part of a broader SAP agreement, typically involving named users and engine or usage metrics. It is not priced as a maintenance-specific subscription you can size against your asset count.",
            },
            {
              title: "Implementation is a project, not a signup",
              text: "Equipment master data structures, functional locations, order types, and planning strategies all need to be designed before anything goes live. That work is normally scoped in months and delivered with external consultants.",
            },
            {
              title: "Systems-integrator cost is often the largest line",
              text: "In enterprise ERP projects it is common for services to equal or exceed first-year licence cost. Budget for the integrator, not just the software.",
            },
            {
              title: "Change requests have ERP-wide blast radius",
              text: "Adding a field to a maintenance notification is a change to a shared system with its own governance and testing cycle. The cost is process, not code.",
            },
          ],
        },
        {
          type: "bars",
          caption: "Typical elapsed time to first productive use (illustrative ranges, not vendor commitments)",
          note: "Ranges reflect commonly reported implementation patterns rather than a specific quoted project. Your figures will vary with scope, data quality, and integrator.",
          items: [
            { label: "SAP PM greenfield module rollout", value: 36, display: "6-12 months" },
            { label: "SAP PM extension to an existing SAP landscape", value: 20, display: "3-6 months" },
            { label: "Mobile-first CMMS pilot on one line", value: 2, display: "1-3 weeks" },
            { label: "Mobile-first CMMS plant-wide rollout", value: 6, display: "4-8 weeks" },
          ],
        },
      ],
    },
    {
      id: "what-you-lose",
      heading: "What you lose by using SAP PM for factory-floor maintenance",
      blocks: [
        {
          type: "p",
          text: "SAP PM was designed for asset accounting rigour and cross-module consistency. Those are real virtues. They are also not the qualities that make an operator report a stopped machine within thirty seconds.",
        },
        {
          type: "ul",
          items: [
            "No mobile-first technician experience by default. Mobile access typically requires additional SAP mobile products or a third-party front end - another project, another licence line.",
            "No guided operator triage. There is no built-in concept of walking a machine operator through safe actions while they wait for a technician.",
            "No QR-code or WhatsApp intake out of the box. Reporting is designed around a notification created by trained users, not a scan at the machine.",
            "Terminology and screens built for planners. Functional locations, order types, and task lists are precise and powerful, and they are not what a line operator on a night shift will navigate.",
            "Configuration speed. Adding a new machine type with its own checklist is a governed change, not a five-minute admin task.",
          ],
        },
        {
          type: "callout",
          label: "The honest framing",
          text: "These are not defects. SAP PM is not trying to be a floor-reporting tool, in the same way a CMMS is not trying to close your month-end. The mistake is expecting either one to do the other's job.",
        },
      ],
    },
    {
      id: "when-sap-pm-is-right",
      heading: "When SAP PM is genuinely the right call",
      blocks: [
        {
          type: "p",
          text: "There are three situations where we would tell a plant to use SAP PM, and we have said so in real conversations.",
        },
        {
          type: "ol",
          items: [
            "You already run SAP for finance and procurement, and a single system of record is a stated corporate requirement. Fighting that policy to save a maintenance subscription is a bad trade.",
            "You are a multi-site enterprise with dedicated IT and integrator resources. The implementation cost is amortised across sites, and you have the internal capability to own it.",
            "Deep integration with SAP inventory and procurement is a hard requirement - for example, maintenance orders must reserve stock and raise purchase requisitions automatically, with full controlling traceability.",
          ],
        },
        {
          type: "p",
          text: "Note what these have in common: the driver is enterprise architecture, not maintenance workflow. If your reason for considering SAP PM is any of the three above, that is a sound reason.",
        },
      ],
    },
    {
      id: "what-a-cmms-gets-you",
      heading: "What a purpose-built CMMS gets you instead",
      blocks: [
        {
          type: "table",
          caption: "Different tools, different design centres.",
          headers: ["Dimension", "SAP Plant Maintenance", "Purpose-built CMMS"],
          rows: [
            ["Design centre", "ERP system of record", "Floor operations"],
            ["Primary user", "Maintenance planner", "Operator, technician, supervisor"],
            ["Time to first productive use", "Months", "Days to weeks"],
            ["Pricing basis", "Enterprise ERP licensing", "Per machine or per user subscription"],
            ["Breakdown intake", "Notification created by trained users", "QR scan, WhatsApp, browser, supervisor-mediated"],
            ["Finance integration", "Native across modules", "Via export or API"],
            ["Change to a checklist", "Governed change request", "Admin edit"],
          ],
        },
        {
          type: "ul",
          items: [
            "Mobile-first technician and supervisor experience, designed for gloves, glare, and patchy plant Wi-Fi.",
            "Per-machine pricing that maps to your asset register rather than to an enterprise licence negotiation.",
            "Live in days or weeks. The pilot is one line, one week, and you find out whether operators actually report before you commit the plant.",
            "Integration where you need it rather than everywhere: push completed work orders and parts consumption to finance via API, and leave the rest alone.",
          ],
        },
      ],
    },
    {
      id: "how-to-decide",
      heading: "How to decide, in one question",
      blocks: [
        {
          type: "p",
          text: "Ask what problem is actually being solved. If the answer is 'maintenance spend must reconcile automatically inside our corporate system of record', that is an ERP answer and SAP PM is the direction. If the answer is 'we do not know why line three keeps stopping and nobody writes anything down', that is an operations answer, and no amount of ERP will fix it - the data has to start at the machine.",
        },
        {
          type: "p",
          text: "Plenty of groups run both, deliberately: the CMMS captures floor reality at speed, and a scheduled export pushes cost and consumption into the ERP. That is a perfectly respectable architecture, and it is usually cheaper than forcing either tool to do both jobs.",
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
              q: "What is the difference between SAP PM and a CMMS?",
              a: "SAP Plant Maintenance is a module inside the SAP ERP suite, designed for asset accounting rigour and integration with finance, procurement, and materials management. A CMMS is a standalone maintenance application designed around floor operations - reporting, work orders, and technician workflow. They overlap in function but differ in design centre, cost structure, and implementation time.",
            },
            {
              q: "Do I need SAP for maintenance management?",
              a: "Only if a single enterprise system of record is a requirement, or if maintenance must integrate natively with SAP inventory, procurement, and controlling. A standalone factory with no existing SAP footprint generally does not need it for maintenance alone.",
            },
            {
              q: "Is SAP PM overkill for a single factory?",
              a: "Usually, if the factory has no existing SAP landscape. The implementation effort and licensing structure are designed for multi-site enterprises with dedicated IT resources. A single site with a maintenance-only requirement typically reaches productive use far faster with a purpose-built CMMS.",
            },
            {
              q: "Can a CMMS integrate with SAP?",
              a: "Yes, commonly through API or scheduled export - pushing completed work orders, parts consumption, and cost data into the ERP while the CMMS remains the system of engagement on the floor. This hybrid pattern is widely used and avoids duplicating either system's strengths.",
            },
          ],
        },
      ],
    },
  ],
  related: ["what-is-a-cmms", "cmms-pricing-per-machine-vs-per-user", "work-order-software"],
};
