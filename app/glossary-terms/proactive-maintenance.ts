import type { GlossaryTerm } from "../glossary-types";

export const term: GlossaryTerm = {
  slug: "proactive-maintenance",
  term: "Proactive maintenance",
  metaDescription:
    "Proactive maintenance acts before a failure and fixes causes, not symptoms. Definition, examples, and how it differs from reactive and preventive work.",
  group: "Strategy",
  shortDefinition:
    "Proactive maintenance is work done to stop failures from happening, by removing their causes and catching problems early, rather than waiting for equipment to break.",
  autoLink: ["proactive maintenance"],
  body: [
    {
      heading: "What proactive maintenance means in plain language",
      paragraphs: [
        "Proactive maintenance is an approach, not a single task. The aim is to find out why equipment fails and act on those causes before the next failure arrives. That can mean correcting how a machine is lubricated, aligned or cleaned, as well as running scheduled tasks and inspections.",
        "It sits at the opposite end from [reactive maintenance](/glossary/reactive-maintenance/), where work starts only after something has stopped.",
      ],
    },
    {
      heading: "Why it matters in maintenance",
      paragraphs: [
        "Repeat failures are expensive because the same cause keeps costing time and parts. A proactive approach treats a failure as information. The question after a breakdown is not only how to fix it but what would stop it recurring.",
        "It also moves work out of emergencies. Jobs found in advance can be planned, so the right person and the right part are ready when the machine is stopped on purpose.",
      ],
    },
    {
      heading: "Common proactive practices",
      paragraphs: ["Proactive maintenance usually combines several methods rather than relying on one."],
      bullets: [
        "[Preventive maintenance](/glossary/preventive-maintenance/): tasks done on a calendar or meter interval.",
        "[Condition-based maintenance](/glossary/condition-based-maintenance/): work triggered when a measured condition crosses a threshold.",
        "[Root cause](/glossary/root-cause/) analysis: investigating repeat failures and fixing the underlying condition.",
        "Operator checks: daily inspections by the people running the machine.",
      ],
    },
    {
      heading: "Proactive versus preventive",
      paragraphs: [
        "Preventive maintenance is one proactive method: it schedules known tasks. Proactive maintenance is wider, because it also asks why failures happen and changes the conditions that cause them. A plant can complete every preventive task on time and still be reactive in how it treats repeat faults.",
      ],
    },
  ],
  firmicore:
    "Firmicore supports the proactive side with preventive maintenance schedules, calendar or meter based, and a machine health score ranked across the fleet. Breakdowns are recorded with severity, type and root cause, so repeat failures are visible rather than remembered.",
  relatedTerms: ["preventive-maintenance", "reactive-maintenance", "condition-based-maintenance", "root-cause", "planned-maintenance"],
  relatedPosts: ["what-is-preventive-maintenance", "how-to-reduce-machine-downtime", "what-is-a-cmms"],
  faq: [
    {
      q: "Is proactive maintenance the same as preventive maintenance?",
      a: "Not exactly. Preventive maintenance is a set of scheduled tasks. Proactive maintenance includes those tasks and also addresses the causes of failure.",
    },
    {
      q: "Does proactive maintenance mean no breakdowns?",
      a: "No. It reduces avoidable failures, but some will still happen. The goal is fewer surprises and faster recovery when they do.",
    },
  ],
  updated: "2026-10-07",
};
