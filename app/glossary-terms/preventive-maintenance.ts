import type { GlossaryTerm } from "../glossary-types";

export const term: GlossaryTerm = {
  slug: "preventive-maintenance",
  term: "Preventive maintenance",
  aliases: ["PM"],
  heading: "Preventive maintenance (PM)",
  metaDescription:
    "Preventive maintenance is work scheduled by time or meter reading to prevent failures. Definition, calendar vs meter-based schedules and pitfalls.",
  group: "Strategy",
  shortDefinition:
    "Preventive maintenance is work scheduled by elapsed time or by meter reading to prevent a failure, rather than work triggered by a failure that already happened.",
  autoLink: ["preventive maintenance"],
  body: [
    {
      heading: "What preventive maintenance means in plain language",
      paragraphs: [
        "Preventive maintenance, often shortened to PM, is the routine care you do before something breaks: lubricating, inspecting, cleaning, tightening and replacing parts at set intervals. The point is to catch wear early and keep the machine in a condition where it is unlikely to fail unexpectedly.",
        "It is the most common form of [proactive maintenance](/glossary/proactive-maintenance/), and the usual starting point for a plant moving away from [reactive maintenance](/glossary/reactive-maintenance/).",
      ],
    },
    {
      heading: "Why it matters in maintenance",
      paragraphs: [
        "Preventive work is cheaper to do on your own terms than a repair done in an emergency. Planned stops are shorter, parts can be ordered ahead and the job can be done safely. Over time it reduces how often machines stop without warning.",
        "It only works if the tasks actually get done. A plan on paper that is not completed is the same as no plan, which is why [PM compliance](/glossary/pm-compliance/) is tracked.",
      ],
    },
    {
      heading: "Calendar-based and meter-based schedules",
      paragraphs: ["The trigger for a PM task is one of two things."],
      bullets: [
        "Calendar-based: repeats after elapsed time, for example every month. Simple to run, but it can service an idle machine on schedule.",
        "Meter-based: repeats after usage, such as running hours or cycles. It follows actual wear, but needs a reliable reading.",
      ],
    },
    {
      heading: "Common pitfalls",
      paragraphs: [
        "Over-maintaining low-risk assets wastes effort, and under-maintaining critical ones is where the failures come from. Tasks that nobody reviews tend to pile up over the years, so each PM task should earn its place by preventing a failure mode you can name.",
      ],
    },
  ],
  firmicore:
    "Firmicore preventive maintenance schedules run by calendar or by meter reading, with a PM calendar view and a compliance dashboard showing per-machine and per-technician trends. The [guide to preventive maintenance](/blog/what-is-preventive-maintenance/) goes deeper on setting up a program.",
  relatedTerms: ["scheduled-maintenance", "proactive-maintenance", "pm-compliance", "reactive-maintenance", "condition-based-maintenance"],
  relatedPosts: ["what-is-preventive-maintenance", "how-to-reduce-machine-downtime", "/maintenance-management-software/", "cmms-for-regulated-manufacturing"],
  faq: [
    {
      q: "What does PM stand for in maintenance?",
      a: "PM usually stands for preventive maintenance, though some plants also use it for planned maintenance. State which you mean in reports.",
    },
    {
      q: "How often should preventive maintenance be done?",
      a: "It depends on the asset, its duty and the manufacturer's guidance. Start from the manual, then adjust using the failure history of that machine.",
    },
  ],
  updated: "2026-10-07",
};
