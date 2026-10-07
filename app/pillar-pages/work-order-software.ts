import type { PillarPageData } from "../pillar-types";

export const page: PillarPageData = {
  slug: "work-order-software",
  path: "/work-order-software/",
  label: "Work order software",
  title: "Work Order Software for Manufacturing Teams",
  description:
    "See how work order software tracks requests, assigns technicians and closes the loop on every job, from request to repair.",
  h1: "Work order software",
  h1Accent: "that follows every job from request to close out.",
  lede: "How a manufacturing work order should move from a fault on the floor to a verified repair, and what the software has to handle at each step.",
  published: "2026-10-07",
  updated: "2026-10-07",
  answer:
    "Work order software creates, assigns, tracks and closes maintenance jobs against specific machines. Each work order records who did the work, when, how long it took and which parts were used, so every repair adds to a searchable machine history instead of disappearing into a notebook or a chat thread.",
  sections: [
    {
      id: "lifecycle",
      heading: "The work order lifecycle, from request to close out",
      blocks: [
        {
          type: "p",
          text: "A manufacturing work order is an instruction and a record. The instruction says what needs doing, on which machine, by whom and by when. The record captures what actually happened. Work order management is mostly about keeping the second half honest, and that depends on the job passing cleanly through seven stages.",
        },
        {
          type: "diagram",
          name: "work-order-lifecycle",
          caption: "The seven stages of a work order, from the first report to the machine history.",
        },
        {
          type: "steps",
          items: [
            { title: "Request", text: "Someone reports a fault or a schedule comes due. The machine is attached at the start, and the system stamps the time. This is where the response clock begins." },
            { title: "Triage", text: "A supervisor, or a guided checklist for the operator, decides how serious it is and what is safe to do while waiting. Severity is set against defined levels, not by whoever is loudest." },
            { title: "Assign", text: "The job goes to a person or a crew with a priority and a target time. The technician confirms they have picked it up, which separates nobody responded from the repair was hard." },
            { title: "Parts", text: "The technician requests spares against the job, the store keeper approves and issues them, and consumption lands on the machine's record." },
            { title: "Execute", text: "The work is done against a checklist, with time and notes recorded as it happens rather than reconstructed at the end of the shift." },
            { title: "Verify", text: "A supervisor, or production, confirms the machine is back in service. For safety and compliance work this sign-off is the audit evidence." },
            { title: "Close", text: "Root cause and resolution are recorded, durations come from timestamps, and the job joins the machine history." },
          ],
        },
        {
          type: "p",
          text: "The broader context sits in the [maintenance management software guide](/maintenance-management-software/), and the [work order glossary entry](/glossary/work-order/) gives the short definition.",
        },
      ],
    },
    {
      id: "work-order-types",
      heading: "Work order types worth keeping separate",
      blocks: [
        {
          type: "p",
          text: "Types matter because they have different urgency, different approvers and different meaning in reports. If every job is just a work order, a total of 340 closed this month says nothing about whether you are in control. These five do the most to make reporting useful.",
        },
        {
          type: "table",
          caption: "Work order types, what triggers each one and why to report them separately.",
          headers: ["Type", "Triggered by", "Why keep it separate"],
          rows: [
            ["Breakdown", "A machine has stopped or failed", "Measures reactive load and drives response time and downtime figures"],
            ["Corrective", "A fault found while the machine still runs", "Shows work you chose to plan, not work that was forced on you"],
            ["Preventive", "A calendar or meter schedule comes due", "Lets you track PM compliance and the planned-versus-reactive ratio"],
            ["Inspection", "A routine check, with no repair expected", "Keeps checks from inflating repair counts"],
            ["Contractor", "Work handed to an outside party", "Needs document checks before the job and a record of the result after"],
          ],
        },
        {
          type: "p",
          text: "The planned-versus-reactive ratio only exists if breakdown and preventive jobs are different types from the moment they are created. Our post on [work order types and how to evaluate tools](/blog/work-order-software/) lists a longer set, including installation and compliance work.",
        },
      ],
    },
    {
      id: "what-software-must-handle",
      heading: "What good work order software must handle",
      blocks: [
        {
          type: "h3",
          text: "Priorities and deadlines",
        },
        {
          type: "p",
          text: "Priority levels should have written definitions, such as what counts as line down, and each priority should carry a target time. Deadlines are only useful if an unacknowledged job is visible while it is still recoverable, not in next month's report.",
        },
        { type: "h3", text: "Checklists" },
        {
          type: "p",
          text: "Repeatable jobs need a checklist the technician completes, with more than one technician able to contribute to the same job. A checklist that is too long will be ticked without being done, so fewer, better steps beat exhaustive ones.",
        },
        { type: "h3", text: "Parts requests" },
        {
          type: "p",
          text: "Spares should be requested and issued against the work order, not on a separate slip. That is what ties consumption to the machine, and it is what lets stock levels reflect reality. An approval step between request and issue keeps unrecorded use down.",
        },
        { type: "h3", text: "Sign-off" },
        {
          type: "p",
          text: "Closing a job and verifying it are different acts. The person who did the repair should not be the only person who decides it is finished, particularly for safety work, where the sign-off is evidence in an audit.",
        },
        { type: "h3", text: "Notifications" },
        {
          type: "p",
          text: "People need to hear about a job without watching a screen. The useful alerts are few: a job assigned to you, a high-priority job nobody has acknowledged, and a parts request that has been approved or declined. Email and in-app alerts cover most plants. What matters is that the responsible person is told, and that the alert links straight to the job.",
        },
        { type: "h3", text: "Machine history" },
        {
          type: "p",
          text: "Every closed job should append to the machine's record. A system that only shows open work is a task list. History turns it into a tool for deciding what to repair, overhaul or replace.",
        },
        {
          type: "p",
          text: "Two practical tests apply to any work order app. Can a technician close a job properly with gloves on and in poor light? And does the phone or tablet work in the worst-covered corner of the plant, tested there, not in the office? If you use outside technicians, check how they receive jobs, since [contractor management](/blog/contractor-management-software-manufacturing/) has its own access problems.",
        },
      ],
    },
    {
      id: "qr-request-intake",
      heading: "Request intake from the floor with QR codes",
      blocks: [
        {
          type: "p",
          text: "Most delay in a breakdown happens before anyone with a spanner knows about it. Intake is where a work order system earns or loses the floor. A QR code on each machine means the operator scans, answers a few questions and submits, and the request arrives already attached to the right machine with a timestamp. Nobody types an asset number, and nobody walks to a desk.",
        },
        {
          type: "p",
          text: "This matters for data quality as much as for speed. The asset field is the one operators most often get wrong on paper, and a wrong asset splits a machine's history in two. See [QR-triggered reporting](/glossary/qr-triggered-reporting/) for the definition and [Why QR reporting beats paper logs](/blog/why-qr-reporting-beats-paper-logs/) for the argument in full.",
        },
        {
          type: "p",
          text: "Shared devices change the design. On a tablet that several operators use in a shift, the report should not depend on a personal session, and each screen should ask for one decision and then reset, so nothing is left behind for the next person. The reporter can still be identified when the plant wants attribution, for example by scanning a badge or code, without typing on a keyboard in gloves.",
        },
        {
          type: "p",
          text: "Keep the request and the work order distinct. A request says something needs attention. A work order is the approved, assigned job created from it. Separating them lets you measure how long requests wait before they become work. While the request waits, guided triage can give the operator safe steps to follow, as described in [guided operator safety triage](/blog/guided-operator-safety-triage/), and the post on [how to report a machine breakdown](/blog/how-to-report-a-machine-breakdown/) covers what a good report contains.",
        },
      ],
    },
    {
      id: "reporting-and-history",
      heading: "Reporting and machine history",
      blocks: [
        {
          type: "p",
          text: "If every work order is tied to a real machine, has a real type, and closes with system timestamps, reporting becomes arithmetic. You do not need a separate analytics product to get most of what matters.",
        },
        {
          type: "ul",
          items: [
            "[MTTR](/glossary/mttr/) per machine, taken from the report, assign and close timestamps.",
            "[MTBF](/glossary/mtbf/) per machine, from the gaps between breakdown jobs, which highlights the assets worth fixing properly.",
            "The planned-versus-reactive ratio over time, which shows whether control is improving.",
            "[PM compliance](/glossary/pm-compliance/), measured as preventive jobs completed on schedule, not eventually.",
            "Parts consumption by machine, which turns stocking into a reorder calculation.",
            "The [maintenance backlog](/glossary/maintenance-backlog/): open jobs by age and priority, so nothing sits unassigned.",
          ],
        },
        {
          type: "p",
          text: "[What is MTTR?](/blog/what-is-mttr/) explains the calculation and the common mistake of starting the clock at technician arrival.",
        },
      ],
    },
    {
      id: "paper-and-spreadsheet-failure-modes",
      heading: "Paper and spreadsheet failure modes",
      blocks: [
        {
          type: "p",
          text: "Paper handles the instruction half of a work order acceptably. It fails on the record half, and it fails in predictable ways.",
        },
        {
          type: "ul",
          items: [
            "The close-out is written at the end of the shift, so duration is an estimate and the detail is thin.",
            "Parts are recorded on a store slip, so consumption never reaches the machine.",
            "The paper travels with the technician, so nobody can see status until it returns.",
            "Nothing stops two people being sent to the same fault, or a fault sitting unassigned for an hour.",
            "Copies get lost, smudged or filed late, and the history has gaps nobody can see.",
            "Spreadsheets fix legibility but not discipline: free-text machine names, overwritten cells and no acknowledgement step.",
            "Searching history means reading through pages, so the question of whether this has happened before goes unasked.",
          ],
        },
        {
          type: "p",
          text: "None of these are reasons to blame people. They are properties of the medium. For the wider comparison of paper, ERP modules and dedicated systems, see the [maintenance management software guide](/maintenance-management-software/), and for how work orders fit into a full system, the [CMMS software guide](/cmms-software/).",
        },
      ],
    },
    {
      id: "how-firmicore-handles-this",
      heading: "How Firmicore handles this",
      blocks: [
        {
          type: "p",
          text: "Firmicore treats the work order as the center of the maintenance record. A breakdown reported by scanning a machine's QR code opens a record against that machine, and floor staff can do this without logging in to a desktop. Preventive maintenance runs on calendar or meter schedules, with checklists and a compliance dashboard on the plans that include it.",
        },
        {
          type: "p",
          text: "Work orders run through a full lifecycle from Draft to Closed. Multi-technician checklists let several people contribute to one job, time is tracked in segments, and parts requests go through an approval workflow that includes the store keeper. Finished work goes to a supervisor sign-off queue before it closes. Email and in-app notifications keep the right people informed, and shift handover reports compile pending work orders and ongoing breakdowns for the next crew.",
        },
        {
          type: "p",
          text: "Access is role based, so technicians see their own work orders and supervisors see assignment and sign-off. Read the detail on the [work orders module](/features/#work-orders) of the features page, see how it is priced on the [pricing page](/pricing/), or follow the [shift handover](/glossary/shift-handover/) definition to see how open jobs carry across shifts.",
        },
      ],
    },
  ],
  faq: [
    {
      q: "What is a work order?",
      a: "A work order is the record of a specific piece of maintenance work: the machine, what needs doing, who is assigned, when it is due, and afterward what was done, how long it took and which parts were used. It is both an instruction and a history entry.",
    },
    {
      q: "What is work order management software?",
      a: "Work order management software, also called a work order system, creates maintenance jobs, assigns them, tracks their status, records parts and time, and closes them with a sign-off. Because each job is tied to a machine, the history builds up automatically.",
    },
    {
      q: "What is the difference between a work request and a work order?",
      a: "A work request reports that something needs attention, usually raised by an operator. A work order is the approved, assigned job created from it. Keeping them separate lets you measure how long requests wait before they become work.",
    },
    {
      q: "Do technicians need a login?",
      a: "In Firmicore, technicians use their own accounts, which is how the system shows them their work orders and records who did the work. Floor operators who only report a breakdown can scan the machine's QR code on a shared tablet without logging in to a desktop.",
    },
    {
      q: "What information should a work order include?",
      a: "At minimum: the machine, a type and priority, a description of the fault or task, the assignee, a due time, parts used, time spent, root cause and resolution, and who signed it off. System-generated timestamps are more reliable than times typed in later.",
    },
    {
      q: "How do preventive maintenance and work orders connect?",
      a: "In most CMMS products, a preventive maintenance schedule generates a job when it comes due, by calendar date or by meter reading. Completing that job is what counts toward PM compliance, so the schedule and the job record stay linked.",
    },
  ],
  keepReading: [
    { label: "CMMS software", href: "/cmms-software/" },
    { label: "Maintenance management software", href: "/maintenance-management-software/" },
    { label: "Work order types and how to evaluate tools", href: "/blog/work-order-software/" },
    { label: "How to report a machine breakdown", href: "/blog/how-to-report-a-machine-breakdown/" },
    { label: "Guided operator safety triage", href: "/blog/guided-operator-safety-triage/" },
    { label: "Work order glossary entry", href: "/glossary/work-order/" },
  ],
  ctaHeading: "Close the loop on every job.",
  ctaBody: "Book a short walkthrough sized against your machine count, or compare plans first.",
};
