import type { BlogPost } from "../blog-data";

export const post: BlogPost = {
  title: "What Is MTTR? How to Calculate and Improve Mean Time to Repair",
  seoTitle: "What Is MTTR? Formula and How to Improve It",
  slug: "what-is-mttr",
  category: "Operations",
  read: "6 min",
  date: "May 25, 2026",
  author: "Tharindu Jayasekara",
  role: "Founder, Lumora Ventures",
  excerpt:
    "MTTR is the simplest maintenance metric to define and the easiest to measure wrongly. The formula, the related metrics, and the mistakes that make the number meaningless.",
  metaDescription:
    "Mean time to repair: the formula, how it differs from MTBF and MTTA, what counts toward the clock, and the mistakes that flatter the number.",
  deck: "A short reference on mean time to repair: the formula, how it differs from MTBF and MTTA, what counts toward it, and the measurement mistakes that flatter the number without improving anything.",
  takeaways: [
    "MTTR is total downtime across incidents divided by the number of incidents, over a defined period and asset set.",
    "The clock should start at failure, not at technician arrival. Starting late is the most common way plants flatter the number.",
    "MTBF measures reliability between failures; MTTA measures acknowledgement speed; MTTR measures recovery. They answer different questions.",
    "Cross-plant MTTR comparison is close to meaningless because definitions and asset mixes differ - benchmark against your own baseline.",
    "Lowering MTTR usually means shortening the segments around the repair, not the repair itself.",
  ],
  intro: [
    "This is a companion reference to our longer guide on reducing machine downtime. That post covers what to do; this one covers what the number means and how to calculate it correctly.",
  ],
  sections: [
    {
      id: "definition-and-formula",
      heading: "MTTR definition and formula",
      blocks: [
        {
          type: "p",
          text: "Mean time to repair is the average elapsed time to restore an asset to service after a failure, across a set of incidents in a defined period.",
        },
        {
          type: "callout",
          label: "Formula",
          text: "MTTR = total downtime across incidents / number of incidents. Downtime for each incident runs from the moment of failure to the moment the asset is back in service.",
        },
        {
          type: "p",
          text: "Worked example: a packing line stops four times in a month, for 45, 90, 30 and 75 minutes measured from failure to restart. Total downtime is 240 minutes across 4 incidents, so MTTR is 60 minutes.",
        },
        {
          type: "stats",
          items: [
            ["240m", "total downtime"],
            ["4", "incidents"],
            ["60m", "MTTR"],
            ["1", "asset set, defined"],
          ],
        },
        {
          type: "p",
          text: "Always state the asset set and period alongside the number. 'MTTR is 60 minutes' is not a fact until you say for which assets, over what window.",
        },
      ],
    },
    {
      id: "related-metrics",
      heading: "MTTR vs MTBF vs MTTA",
      blocks: [
        {
          type: "table",
          caption: "Four related metrics, four different questions.",
          headers: ["Metric", "Full name", "Measures", "Question it answers"],
          rows: [
            ["MTTR", "Mean time to repair", "Failure to back in service", "How fast do we recover?"],
            ["MTBF", "Mean time between failures", "Uptime between consecutive failures", "How reliable is the asset?"],
            ["MTTA", "Mean time to acknowledge", "Report to someone accepting the job", "How fast do we respond?"],
            ["MTTF", "Mean time to failure", "Operating life of non-repairable items", "How long does this component last?"],
          ],
        },
        {
          type: "p",
          text: "The pairing that matters most is MTTR with MTBF. Falling MTTR with falling MTBF means you are getting faster at fixing an asset that is failing more often - which is not an improvement, it is a machine heading toward replacement. Either metric alone can hide that.",
        },
      ],
    },
    {
      id: "what-counts",
      heading: "What counts toward MTTR, and common measurement mistakes",
      blocks: [
        {
          type: "p",
          text: "Almost every implausibly good MTTR figure comes from one of these.",
        },
        {
          type: "ul",
          items: [
            "Starting the clock at technician arrival. This excludes reporting delay and dispatch, which in many plants are the largest segments. It measures repair speed, not downtime.",
            "Excluding parts wait time. If the machine is down waiting for a bearing, it is down. Track the wait separately if you want to manage it, but do not remove it from the total.",
            "Stopping the clock at 'repair complete' rather than 'back in production'. Restart, changeover, and quality confirmation are downtime for the line.",
            "Mixing asset classes. A boiler and a labelling machine in the same average produce a number that describes neither.",
            "Silently excluding long incidents as outliers. If you exclude them, say so explicitly and report how many - they are usually the incidents that cost the most.",
            "Hand-entered durations. Any duration typed by a person rounds to the nearest convenient number and drifts optimistic. Derive it from system timestamps.",
          ],
        },
        {
          type: "callout",
          label: "Firmicore note",
          text: "The definition you choose matters less than applying it consistently. Write it down, apply it to every incident, and never change it mid-year without restating the prior period.",
        },
      ],
    },
    {
      id: "how-to-lower-it",
      heading: "How to actually lower MTTR",
      blocks: [
        {
          type: "p",
          text: "Break the total into its segments and attack the longest. In plants without digital reporting, the repair segment is frequently not the longest one.",
        },
        {
          type: "ol",
          items: [
            "Shorten reporting delay with machine-level QR or messaging intake, so the clock starts when the failure does rather than when someone finds a supervisor.",
            "Make acknowledgement an explicit step with its own timestamp, which makes ownership visible and MTTA measurable.",
            "Give the technician context before they arrive: symptom, photo, and machine history attached to the work order.",
            "Attack parts wait by linking consumption to assets, so critical spares stocking follows actual failure history.",
            "Reduce repeat failures through controlled cause codes - the fastest repair is the one that is not needed again.",
          ],
        },
        {
          type: "p",
          text: "The full treatment of each lever, with the downtime-clock breakdown, is in our guide on reducing machine downtime.",
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
              q: "What is MTTR?",
              a: "MTTR, or mean time to repair, is the average elapsed time to restore an asset to service after a failure. It is calculated as total downtime across incidents divided by the number of incidents, over a defined period and asset set.",
            },
            {
              q: "What is the MTTR formula?",
              a: "MTTR = total downtime / number of incidents. Each incident's downtime should be measured from the moment of failure to the moment the asset is back in production, not from technician arrival to repair completion.",
            },
            {
              q: "What is the difference between MTTR and MTBF?",
              a: "MTTR measures how quickly you recover from a failure. MTBF, mean time between failures, measures how long an asset runs between failures. MTTR is a maintenance responsiveness metric; MTBF is a reliability metric. Read them together.",
            },
            {
              q: "What is a good MTTR?",
              a: "There is no useful universal target, because definitions and asset mixes differ too much for cross-plant comparison to be meaningful. Establish your own baseline by asset class with a written definition, then manage the trend.",
            },
          ],
        },
      ],
    },
  ],
  related: ["how-to-reduce-machine-downtime", "work-order-software", "what-is-a-cmms"],
};
