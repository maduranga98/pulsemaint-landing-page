import type { BlogPost } from "../blog-data";

export const post: BlogPost = {
  title: "Guided Operator Safety Triage: A New Approach to Factory Floor Response",
  seoTitle: "Guided Operator Safety Triage Explained",
  slug: "guided-operator-safety-triage",
  category: "Engineering",
  read: "9 min",
  date: "June 19, 2026",
  author: "Tharindu Jayasekara",
  role: "Founder, Lumora Ventures",
  excerpt:
    "There is a gap between a machine stopping and a technician arriving. Nobody's software manages it, and something always happens in it. That gap is the argument for guided triage.",
  metaDescription:
    "Most CMMS platforms treat the minutes between breakdown and repair as dead time. Guided triage turns that window into a structured, auditable sequence.",
  deck: "Every CMMS on the market treats the minutes between breakdown and repair as dead time. On a real floor, that is when an operator improvises. Guided triage turns that window into a structured, auditable, safer sequence.",
  figure: "Fig. 01 - The unmanaged window between failure and technician arrival, and what guided triage puts into it.",
  takeaways: [
    "The window between a machine stopping and a technician arriving is real, routinely 15 to 40 minutes, and almost entirely unmanaged by maintenance software.",
    "Operators do not stand still in that window. They investigate, sometimes open guards, and sometimes restart the machine to see what happens.",
    "Guided triage replaces improvisation with a machine-specific sequence: isolate, verify, capture evidence, record what was and was not attempted.",
    "The output is both safety and speed - the technician arrives with a photo, a symptom, and a list of ruled-out causes already recorded.",
    "No major CMMS vendor appears to productise this as a distinct workflow, which makes it a genuine category gap rather than a feature comparison.",
  ],
  intro: [
    "Maintenance software is built around two actors: the person who reports and the person who repairs. The design assumption is that nothing meaningful happens between them.",
    "Anyone who has spent time on a factory floor knows this is false. What happens in that gap is unrecorded, occasionally unsafe, and frequently determines how long the eventual repair takes.",
  ],
  sections: [
    {
      id: "the-gap",
      heading: "The gap between breakdown and technician arrival",
      blocks: [
        {
          type: "p",
          text: "A machine stops. The operator reports it. Then they wait - typically fifteen to forty minutes depending on shift, plant size, and how many other things are broken.",
        },
        {
          type: "p",
          text: "During that wait, in our experience of factory floors, some combination of the following happens, and none of it is in any system.",
        },
        {
          type: "ul",
          items: [
            "The operator looks for the obvious cause: a jam, a tripped sensor, an empty hopper.",
            "They try restarting the machine, sometimes several times, occasionally causing secondary damage.",
            "They open a guard to see inside, sometimes without isolating the machine first.",
            "A colleague from another line comes over and offers a diagnosis based on a different machine.",
            "Someone clears the jam or wipes the failure evidence away before anyone photographs it.",
            "By the time the technician arrives, the machine state has changed and nobody can reconstruct what it looked like at failure.",
          ],
        },
        {
          type: "callout",
          label: "The core observation",
          text: "This window is not idle time being wasted. It is unmanaged activity being un-recorded. Those are very different problems, and only the second one is solvable with software.",
        },
      ],
    },
    {
      id: "what-triage-looks-like",
      heading: "What guided operator triage actually looks like",
      blocks: [
        {
          type: "p",
          text: "Guided triage is a short, machine-specific sequence presented to the operator immediately after they submit the breakdown report. It is not troubleshooting and it does not ask the operator to repair anything. It asks them to make the situation safe and observable.",
        },
        {
          type: "steps",
          items: [
            {
              title: "1. Stop and isolate, explicitly",
              text: "The first screen is the isolation step for that specific machine, with its actual isolation point named and pictured. Not a generic safety reminder - the lockout point for asset PR-04, with a photo of where it is.",
            },
            {
              title: "2. Capture the failure state before anything changes",
              text: "A prompt for one or two photos of the machine as it stopped. This is the highest-value thirty seconds in the whole incident, and it only happens if something asks for it at the right moment.",
            },
            {
              title: "3. Answer a short list of observable checks",
              text: "Three to six yes/no questions written for this machine: is the guard interlock lit, is there material in the feed, is the air pressure gauge in range. Observable facts only - nothing requiring diagnosis or tools.",
            },
            {
              title: "4. Record what is explicitly not permitted",
              text: "The flow states plainly which actions the operator must not take on this machine: do not restart, do not open the rear guard, do not clear the jam manually. Written per machine, because the answer differs per machine.",
            },
            {
              title: "5. Log what was attempted",
              text: "If the operator did try a restart before reporting, the flow captures it without blame. A technician who knows the machine was restarted twice is diagnosing a different problem than one who does not.",
            },
            {
              title: "6. Hand over a complete picture",
              text: "The technician's notification carries the photos, the check answers, and the attempted actions. They arrive knowing something, rather than arriving to be told a story.",
            },
          ],
        },
        {
          type: "stats",
          items: [
            ["15-40m", "typical unmanaged window"],
            ["3-6", "observable checks per machine"],
            ["2", "photos before anything is touched"],
            ["1", "auditable record of the gap"],
          ],
        },
      ],
    },
    {
      id: "why-nobody-does-this",
      heading: "Why no major CMMS productises this",
      blocks: [
        {
          type: "p",
          text: "This is not a gap because the idea is bad. It is a gap for structural reasons worth naming, because they also explain why it is defensible.",
        },
        {
          type: "ol",
          items: [
            "The category was designed around technicians. CMMS products are bought by maintenance departments and designed for maintenance staff. The operator is modelled as a request submitter, not as a participant.",
            "Per-user pricing works against it. If every operator needs a paid seat, the vendor's own commercial model discourages building operator-facing workflows nobody will license.",
            "The content is machine-specific. A triage flow for a knitting machine is not a triage flow for a boiler. That means configuration work per asset, which is harder to sell as a shrink-wrapped feature.",
            "It sits at the boundary between maintenance and safety, and neither department's software budget naturally owns it.",
          ],
        },
        {
          type: "p",
          text: "We describe this as a gap based on our review of publicly available competitor documentation, not on access to anyone's roadmap. If you are evaluating vendors, ask them directly what happens in the fifteen minutes after a breakdown is reported. The answers are informative.",
        },
      ],
    },
    {
      id: "the-safety-case",
      heading: "The safety and audit-trail case",
      blocks: [
        {
          type: "p",
          text: "Set the productivity argument aside for a moment. There is a separate case that stands on its own.",
        },
        {
          type: "ul",
          items: [
            "Machine-specific isolation instructions delivered at the moment of failure are more likely to be followed than the same instructions delivered in an induction six months ago.",
            "An explicit, per-machine list of prohibited actions is a control, and controls that are delivered at the point of risk are the ones that work.",
            "The record is auditable. You can demonstrate that the operator was instructed to isolate, saw the prohibition, and confirmed it - with timestamps, on the specific occasion.",
            "Near-misses become visible. When operators log attempted actions honestly, the pattern of unsafe improvisation stops being invisible to management.",
            "The evidence supports incident investigation. If something does go wrong, the reconstruction is a record rather than a set of interviews.",
          ],
        },
        {
          type: "callout",
          label: "On regulatory framing",
          text: "Guided triage supports good practice under general machinery-safety and lockout obligations, but no software makes you compliant with OSHA, HSE, or a local equivalent. Compliance is a function of your procedures, training, and enforcement. Treat the audit trail as evidence for a programme you already run.",
        },
      ],
    },
    {
      id: "building-triage-flows",
      heading: "Building triage flows for your own machines",
      blocks: [
        {
          type: "p",
          text: "The per-machine content is the work. It is also less work than it sounds, because the people who know the answers already work in your plant.",
        },
        {
          type: "ol",
          items: [
            "Start with the five machines that stop most often. Frequency, not criticality - you want the flows exercised quickly so you can fix them.",
            "Sit with the technician who fixes that machine most often and ask one question: what do you wish you knew before you walked over here?",
            "Ask the operators the opposite question: what do you normally do while waiting? The honest answer is the list of behaviours the flow needs to address.",
            "Write no more than six checks. A flow that takes longer than the walk from the maintenance office will be abandoned.",
            "Photograph the isolation point and the reference state. Photographs cross language barriers that text does not.",
            "Review after ten incidents. Cut checks that never produced useful information, and add the one question the technician kept having to ask on arrival.",
          ],
        },
        {
          type: "p",
          text: "After the first few machines, the pattern is reusable across similar assets and the marginal effort drops sharply. The first five are the investment.",
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
              q: "What is guided operator triage?",
              a: "Guided operator triage is a structured, machine-specific sequence presented to a machine operator immediately after they report a breakdown. It covers isolation, evidence capture, a short list of observable checks, and explicitly prohibited actions - turning the wait for a technician into a safe, recorded step.",
            },
            {
              q: "Is operator triage the same as troubleshooting?",
              a: "No. Troubleshooting asks someone to diagnose and fix. Triage asks the operator only to make the situation safe and observable, and to record what they see. No tools, no repair, no diagnosis.",
            },
            {
              q: "Does guided triage help with machinery safety compliance?",
              a: "It supports it by delivering machine-specific isolation instructions at the point of risk and creating a timestamped record that they were given and acknowledged. It does not by itself make an operation compliant - that depends on your procedures, training, and enforcement.",
            },
          ],
        },
      ],
    },
  ],
  related: ["how-to-report-a-machine-breakdown", "cryotos-alternative", "how-to-reduce-machine-downtime"],
};
