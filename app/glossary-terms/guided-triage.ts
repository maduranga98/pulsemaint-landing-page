import type { GlossaryTerm } from "../glossary-types";

export const term: GlossaryTerm = {
  slug: "guided-triage",
  term: "Guided triage",
  metaDescription:
    "Guided triage walks an operator through safe diagnostic steps before a technician arrives. Definition, why it matters and what makes a flow usable.",
  group: "Workflow",
  shortDefinition:
    "Guided triage is a branching troubleshooting flow that walks an operator through safe diagnostic steps, so a fault can be narrowed or made safe before a technician arrives.",
  autoLink: ["guided triage", "guided operator triage"],
  body: [
    {
      heading: "What guided triage means in plain language",
      paragraphs: [
        "When a machine stops, the operator is the first person on the scene, and usually not a maintenance specialist. Guided triage gives them a short sequence of questions, such as whether the guard is closed, whether there is an alarm and whether the feed is clear, with each answer leading to the next step. The outcome is either a quick fix the operator is allowed to make, or a clear report for the technician.",
        "It turns tribal knowledge into something any operator on any shift can follow.",
      ],
    },
    {
      heading: "Why it matters in maintenance",
      paragraphs: [
        "Many stops are minor and clear in minutes once someone checks the obvious things. Others should not be touched by an operator at all. Triage separates the two safely and records what was found, so the technician arrives with information instead of starting from nothing.",
        "It also protects people. A flow can stop and escalate whenever a step involves a hazard, rather than relying on each operator's judgment under pressure.",
      ],
    },
    {
      heading: "What makes a flow usable on the floor",
      paragraphs: [
        "On a plant floor it has to survive shared devices, gloves, poor light and weak connectivity near the machines, so each step has to be a single screen that queues offline.",
      ],
      bullets: [
        "One question per screen with large, simple answers.",
        "Plain language in the operators' own language.",
        "Safety stops built in wherever the next step involves a hazard.",
        "Authored per machine by supervisors, who know the actual faults.",
      ],
    },
  ],
  firmicore:
    "Guided triage is Firmicore's main differentiator. Branching troubleshooting flows run in several languages, and supervisors can build and edit flows per machine without engineering help. Scanning a machine's QR code opens reporting for that specific asset.",
  relatedTerms: ["qr-triggered-reporting", "reactive-maintenance", "mtta", "lockout-tagout", "unplanned-downtime"],
  relatedPosts: ["guided-operator-safety-triage", "guided-triage-for-shared-tablets", "how-to-report-a-machine-breakdown"],
  faq: [
    {
      q: "Does guided triage replace the technician?",
      a: "No. It narrows the fault and handles simple, safe checks so the technician arrives better informed, or is not needed for a trivial stop.",
    },
    {
      q: "Who writes the triage flows?",
      a: "Supervisors who know each machine. A flow written by the people who handle the faults is more accurate than a generic one.",
    },
  ],
  updated: "2026-10-07",
};
