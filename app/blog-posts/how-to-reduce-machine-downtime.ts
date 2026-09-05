import type { BlogPost } from "../blog-data";

export const post: BlogPost = {
  title: "How to Reduce Machine Downtime: A Practical Guide for Plant Managers",
  seoTitle: "How to Reduce Machine Downtime",
  slug: "how-to-reduce-machine-downtime",
  category: "Operations",
  read: "10 min",
  date: "July 3, 2026",
  author: "Tharindu Jayasekara",
  role: "Founder, Lumora Ventures",
  excerpt:
    "Downtime is a clock with five segments, and most plants only try to shorten one of them. Here are six levers, ordered by how quickly they pay back.",
  metaDescription:
    "Downtime is five sequential delays: report, acknowledge, assign, repair, resolve. Repair is rarely the longest. What to measure and which lever moves first.",
  deck: "Reducing downtime is not one problem. It is five sequential delays - report, acknowledge, assign, repair, resolve - and the repair segment is usually not the longest one. This guide covers what to measure and which levers move first.",
  figure: "Fig. 01 - The downtime clock broken into its five measurable segments.",
  takeaways: [
    "Downtime cost is dominated by lost output, overtime, scrap, and late orders - not by the repair invoice.",
    "The downtime clock has five segments: report, acknowledge, assign, repair, resolve. Most improvement effort targets repair, which is often not the longest.",
    "MTTR is the metric that matters most, but only if it is measured from failure to resolution rather than from the technician arriving.",
    "The fastest-payback levers are usually reporting delay and parts availability, not technician skill.",
    "Track the planned-versus-reactive work ratio over time - it is the clearest indicator of whether you are gaining control or losing it.",
  ],
  intro: [
    "Every plant manager has been asked to reduce downtime, and most respond by pressing the maintenance team to work faster. That is the wrong end of the problem, because the technician is usually not the bottleneck.",
    "The productive approach is to break the stoppage into measurable segments, find out which one is long, and fix that. Usually the answer surprises people.",
  ],
  sections: [
    {
      id: "the-real-cost",
      heading: "The real cost of downtime, beyond the repair bill",
      blocks: [
        {
          type: "p",
          text: "The maintenance invoice is the smallest and most visible component. It is visible because it arrives as a document with a number on it. The larger components are distributed across other departments and never get consolidated.",
        },
        {
          type: "ul",
          items: [
            "Lost contribution margin on the output that was not produced, which for a constrained line is the whole margin, not the variable cost.",
            "Overtime and weekend running to recover the schedule, at premium rates.",
            "Scrap and rework from the ramp-down and ramp-up around the stoppage, which is often larger than the scrap during normal running.",
            "Expedited freight and late-delivery penalties when the order still has to ship on time.",
            "Supervisor and management attention diverted into recovery, which has a real cost even though nobody invoices for it.",
            "Customer confidence, which is not quantifiable in a single incident and is entirely quantifiable across a year of them.",
          ],
        },
        {
          type: "callout",
          label: "A useful exercise",
          text: "Pick your worst stoppage from last quarter. Add up all six categories above with the relevant department heads in the room. The gap between that number and the maintenance invoice is the argument for everything else in this post.",
        },
      ],
    },
    {
      id: "what-is-mttr",
      heading: "What MTTR is and why it is the metric that matters most",
      blocks: [
        {
          type: "p",
          text: "Mean time to repair is the average elapsed time from failure to the asset being back in service, across a set of incidents. It is the metric that matters most because it is the one that directly converts into lost production hours.",
        },
        {
          type: "p",
          text: "The common measurement error is starting the clock when the technician arrives. That measures the repair, not the downtime, and it hides the segments where the delay usually is. Measure from the failure, and separate the segments so you can see which one to attack. A full definition, the formula, and how MTTR relates to MTBF and MTTA are covered in the companion post on MTTR.",
        },
        {
          type: "bars",
          caption: "Illustrative distribution of a two-hour stoppage across the five segments",
          note: "Proportions vary by plant. The point is to measure your own distribution rather than assume the repair segment dominates - in plants without digital reporting, it usually does not.",
          items: [
            { label: "Report (failure to logged)", value: 25, display: "25 min" },
            { label: "Acknowledge (logged to accepted)", value: 15, display: "15 min" },
            { label: "Assign and travel", value: 20, display: "20 min" },
            { label: "Repair (including parts wait)", value: 50, display: "50 min" },
            { label: "Resolve and restart", value: 10, display: "10 min" },
          ],
        },
      ],
    },
    {
      id: "six-levers",
      heading: "Six practical levers to reduce downtime",
      blocks: [
        {
          type: "steps",
          items: [
            {
              title: "1. Cut the reporting delay",
              text: "The cheapest minutes available. QR-code or WhatsApp reporting at the machine removes the walk to the supervisor and the wait for someone to be free. This lever needs no new headcount and no new parts budget - it is the first one to pull.",
            },
            {
              title: "2. Make acknowledgement explicit",
              text: "If nobody has to accept a job, nobody owns it. An acknowledgement step with its own timestamp turns 'maintenance is slow' into a specific, addressable number - and the act of measuring it usually shortens it.",
            },
            {
              title: "3. Give operators guided triage",
              text: "Between the report and the technician arriving, the operator is standing there. Guided safe actions - isolate, verify, capture evidence - shorten the repair when the technician arrives with a photo and a symptom already recorded, and prevent the unsafe improvisation that happens in unmanaged gaps.",
            },
            {
              title: "4. Fix parts availability",
              text: "A repair that waits four hours for a bearing is a stores problem, not a maintenance problem. Linking parts consumption to assets through work orders makes critical-spares stocking a calculation rather than an argument.",
            },
            {
              title: "5. Raise PM compliance before adding PM tasks",
              text: "Most plants have more preventive tasks defined than they complete. Adding more does nothing. Measure completion on schedule, cut the tasks nobody does and nobody misses, and get compliance high on the remainder.",
            },
            {
              title: "6. Close the root-cause loop",
              text: "Recurring failures are the cheapest downtime to eliminate, because you have already paid for the diagnosis several times. This only works if each instance is recorded against the same asset with a controlled cause code - free text cannot be aggregated.",
            },
          ],
        },
      ],
    },
    {
      id: "how-digital-tools-help",
      heading: "How digital tools shrink each stage of the downtime clock",
      blocks: [
        {
          type: "table",
          caption: "Which capability addresses which segment of the clock.",
          headers: ["Segment", "What causes the delay", "What shortens it"],
          rows: [
            ["Report", "Finding a supervisor, waiting for a form", "QR scan or WhatsApp intake at the machine"],
            ["Acknowledge", "No owner, no notification", "Push routing with an explicit acceptance step"],
            ["Assign", "Wrong trade dispatched, no context", "Symptom, photo, and machine history attached to the order"],
            ["Repair", "Parts wait, missing history, unclear cause", "Asset-linked spares data and searchable machine history"],
            ["Resolve", "Restart approval, no sign-off path", "Structured close-out with supervisor sign-off"],
          ],
        },
        {
          type: "p",
          text: "Note that only one row is about the repair itself. This is the reason plants that invest solely in maintenance skills and tooling see smaller gains than expected: they optimised the segment that was already the best managed.",
        },
      ],
    },
    {
      id: "benchmarks",
      heading: "Benchmarks worth tracking",
      blocks: [
        {
          type: "p",
          text: "Published industry benchmarks are close to useless for a specific plant - the definitions differ, the asset mixes differ, and the incentive to report favourably is strong. Benchmark against your own baseline instead, and track these five.",
        },
        {
          type: "ul",
          items: [
            "MTTR by asset class, measured failure to resolution, trended monthly.",
            "Reporting delay as a distinct number, so improvements in intake are visible.",
            "Planned versus reactive work ratio, trended over quarters rather than months.",
            "PM compliance: preventive orders completed within their scheduled window, as a percentage.",
            "Repeat failure rate: the share of breakdowns on assets that already failed for the same cause in the last 90 days.",
          ],
        },
        {
          type: "callout",
          label: "Firmicore note",
          text: "Set the baseline before you change anything, even if the baseline data is poor. A poor baseline you can improve on beats a clean baseline you started collecting after the improvement.",
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
              q: "How can a factory reduce unplanned machine downtime?",
              a: "Break the stoppage into five segments - report, acknowledge, assign, repair, resolve - and measure each. In most plants the reporting and acknowledgement segments are the longest and the cheapest to fix, through machine-level digital reporting and an explicit acceptance step.",
            },
            {
              q: "What causes machine downtime?",
              a: "Component failure is only the trigger. The duration is usually driven by delays around the repair: time before the failure is reported, time before anyone accepts the job, dispatch of the wrong trade, and waiting for spare parts.",
            },
            {
              q: "What is a good MTTR for manufacturing?",
              a: "There is no useful universal figure, because definitions and asset mixes vary too much for cross-plant comparison to mean anything. Benchmark against your own baseline by asset class and track the trend rather than chasing a published number.",
            },
          ],
        },
      ],
    },
  ],
  related: ["what-is-mttr", "how-to-report-a-machine-breakdown", "work-order-software"],
};
