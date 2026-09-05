import type { BlogPost } from "../blog-data";

export const post: BlogPost = {
  title: "Work Order Software: What It Is and How to Choose One",
  seoTitle: "Work Order Software: How to Choose One",
  slug: "work-order-software",
  category: "Guides",
  read: "9 min",
  date: "July 10, 2026",
  author: "Tharindu Jayasekara",
  role: "Founder, Lumora Ventures",
  excerpt:
    "A work order is a contract between the person who found the problem and the person who fixes it. Here are the eight types, the full lifecycle, and what to look for in software.",
  metaDescription:
    "The eight work order types every plant deals with, what a complete work order lifecycle looks like, and the features that decide technician adoption.",
  deck: "Work order software is where maintenance intent becomes maintenance record. This covers the eight work order types every plant deals with, what a complete lifecycle looks like, and the features that decide whether technicians actually use the thing.",
  figure: "Fig. 01 - The work order lifecycle from creation through sign-off and machine history.",
  takeaways: [
    "A work order is the record of a specific piece of maintenance work: what, where, who, when, and what was actually done.",
    "Paper work orders fail at the handoff and the close-out, which is exactly where the data you need for analysis lives.",
    "Most plants deal with eight distinct work order types, and treating them identically is what makes reporting useless.",
    "A complete lifecycle is creation, assignment, acknowledgement, execution, close-out, and sign-off - skipping acknowledgement is the most common gap.",
    "The single best feature test: can a technician close a work order properly with gloves on, in poor light, with no signal?",
  ],
  intro: [
    "The work order is the unit of account in maintenance. Everything you eventually want to measure - response time, repair time, cost per asset, PM compliance - is derived from work order records. If the work order is sloppy, no dashboard rescues it.",
  ],
  sections: [
    {
      id: "what-a-work-order-is",
      heading: "What a work order is and why paper tracking breaks down",
      blocks: [
        {
          type: "p",
          text: "A work order is an instruction plus a record. It says what needs doing, on which asset, by whom, by when - and then it captures what was actually done, how long it took, and what was consumed doing it.",
        },
        {
          type: "p",
          text: "Paper handles the instruction half acceptably. It fails on the record half, and it fails predictably.",
        },
        {
          type: "ul",
          items: [
            "The close-out is written at the end of the shift, so duration is an estimate and detail is thin.",
            "Parts used are recorded on the store issue slip, not the work order, so consumption never links to the asset.",
            "The paper travels with the technician, which means status is unknowable until it comes back.",
            "Nothing prevents two people being dispatched to the same fault, or a fault sitting unassigned for an hour.",
            "Historical search is manual. 'Has this happened before on this machine?' is a filing exercise nobody performs mid-breakdown.",
          ],
        },
      ],
    },
    {
      id: "eight-work-order-types",
      heading: "The eight common work order types",
      blocks: [
        {
          type: "p",
          text: "These deserve separate types because they have different urgency, different approval paths, and different meaning in reporting. Lumping them together is why 'we closed 340 work orders' tells you nothing.",
        },
        {
          type: "table",
          caption: "Eight types, and what each one is for.",
          headers: ["Type", "Trigger", "Typical urgency"],
          rows: [
            ["Breakdown / reactive", "Asset has failed and stopped production", "Immediate"],
            ["Corrective", "Fault found during inspection, asset still running", "Scheduled soon"],
            ["Preventive", "Calendar or meter schedule reached", "Planned"],
            ["Predictive / condition-based", "Sensor or inspection reading crosses threshold", "Planned, urgent if trending"],
            ["Inspection", "Routine check with no work expected", "Planned"],
            ["Installation / commissioning", "New asset or modification", "Project-scheduled"],
            ["Safety / compliance", "Regulatory requirement or safety finding", "Fixed deadline, non-negotiable"],
            ["Contractor / external", "Work assigned outside the in-house team", "Varies, needs document checks first"],
          ],
        },
        {
          type: "callout",
          label: "Why the split matters",
          text: "The single most useful maintenance ratio is planned versus reactive work. You cannot compute it unless breakdown and preventive orders are distinct types from the moment they are created.",
        },
      ],
    },
    {
      id: "lifecycle",
      heading: "What a complete work order lifecycle looks like",
      blocks: [
        {
          type: "steps",
          items: [
            {
              title: "1. Creation",
              text: "From a breakdown report, a PM schedule, or an inspection finding. The asset is attached at creation - not typed in later - and the timestamp is system-generated.",
            },
            {
              title: "2. Assignment",
              text: "Routed to a person or a trade group, with priority set against published severity definitions rather than whoever shouted loudest.",
            },
            {
              title: "3. Acknowledgement",
              text: "The technician confirms they have picked it up. This is the step most plants skip, and it is the one that separates 'nobody responded' from 'the repair was hard' when response times are poor.",
            },
            {
              title: "4. Execution",
              text: "Work is done, with parts issued against the order, notes captured, and photos attached. Offline capability matters here more than anywhere else in the system.",
            },
            {
              title: "5. Close-out",
              text: "Root cause and resolution recorded against a controlled list, plus free text. Duration is derived from timestamps, not entered by hand.",
            },
            {
              title: "6. Sign-off",
              text: "Supervisor or production confirms the asset is back in service. For safety and compliance orders this step is the audit evidence.",
            },
          ],
        },
        {
          type: "stats",
          items: [
            ["6", "lifecycle stages"],
            ["2", "timestamps that define response time"],
            ["1", "asset attached at creation"],
            ["0", "hand-entered durations"],
          ],
        },
      ],
    },
    {
      id: "features-to-evaluate",
      heading: "Features to evaluate in work order software",
      blocks: [
        {
          type: "ol",
          items: [
            "Offline mode that genuinely queues and syncs, tested in the worst-covered part of your plant rather than in the office.",
            "Distinct work order types with separate reporting, not a single free-text category field.",
            "Parts issue against the work order, so consumption links to the asset without a separate stores process.",
            "Photo capture at both creation and close-out, because before-and-after is the cheapest root-cause evidence available.",
            "Controlled root-cause and resolution lists - free text alone cannot be aggregated, and aggregation is the whole point.",
            "Assignment to trade groups as well as individuals, so work does not stall when one person is on leave.",
            "Acknowledgement as a distinct state with its own timestamp.",
            "Contractor access without a paid seat or an app install, if you use external technicians.",
            "Export and API access on the tier you are buying, not two tiers up.",
          ],
        },
      ],
    },
    {
      id: "feeding-machine-history",
      heading: "How work orders should feed machine history and analytics",
      blocks: [
        {
          type: "p",
          text: "A work order system that only shows open work is a task list. The value appears when closed orders accumulate against assets and start answering questions.",
        },
        {
          type: "ul",
          items: [
            "Failure frequency per machine, which is what identifies the assets worth investing in rather than repairing repeatedly.",
            "Planned versus reactive ratio, tracked over time - the clearest single indicator of whether maintenance is gaining or losing control.",
            "Mean time to repair and mean time between failures per asset, both derived from work order timestamps.",
            "Parts consumption by asset, which turns spares stocking from intuition into a reorder calculation.",
            "PM compliance, measured as preventive orders completed on schedule rather than eventually.",
          ],
        },
        {
          type: "p",
          text: "None of this requires an analytics product. It requires that every work order attaches to a real asset, carries a real type, and closes with system timestamps. Get that right and the reporting is arithmetic.",
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
              q: "What is work order software?",
              a: "Work order software creates, assigns, tracks, and closes maintenance jobs against specific assets. It records who did what, when, how long it took, and which parts were consumed, so that maintenance history and metrics build up automatically.",
            },
            {
              q: "What is the difference between a work order and a work request?",
              a: "A work request is a report that something needs attention - typically raised by an operator or production. A work order is the approved, assigned job created from it. Keeping them separate lets you measure how long requests wait before becoming assigned work.",
            },
            {
              q: "What are the main types of work orders?",
              a: "Eight are common in manufacturing: breakdown, corrective, preventive, predictive, inspection, installation, safety or compliance, and contractor work orders. Keeping them as distinct types is what makes the planned-versus-reactive ratio measurable.",
            },
          ],
        },
      ],
    },
  ],
  related: ["what-is-a-cmms", "how-to-reduce-machine-downtime", "contractor-management-software-manufacturing"],
};
