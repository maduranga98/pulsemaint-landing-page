import type { GlossaryTerm } from "../glossary-types";

export const term: GlossaryTerm = {
  slug: "work-order",
  term: "Work order",
  metaDescription:
    "A work order is the record of one maintenance job: what, where, who, with which parts, and what was found. Definition, contents and why sign-off matters.",
  group: "Workflow",
  shortDefinition:
    "A work order is the record of one maintenance job: what is to be done, on which asset, by whom, with which parts, and what was found.",
  autoLink: ["work order", "work orders"],
  body: [
    {
      heading: "What a work order means in plain language",
      paragraphs: [
        "A work order is the unit of maintenance work. Every job, whether it is a breakdown repair, a scheduled inspection or a small adjustment, gets one. It follows the job from request to completion and stays on file afterwards as the record of what happened.",
        "A useful work order is specific. It names the asset, describes the problem or task, says who is assigned, lists the steps and parts, and ends with what was actually found and done.",
      ],
    },
    {
      heading: "Why it matters in maintenance",
      paragraphs: [
        "A work order without a sign-off step is a to-do list. The sign-off is what turns it into an audit trail: someone with authority confirms the work was done and the asset can return to service.",
        "Work orders are also the raw material for nearly every maintenance metric. [MTTR](/glossary/mttr/), cost per asset and [backlog](/glossary/maintenance-backlog/) are all calculated from them, so the quality of the data depends on how consistently they are completed.",
      ],
    },
    {
      heading: "What a work order usually contains",
      paragraphs: ["The exact fields vary, but most cover the same ground."],
      bullets: [
        "The asset, its location and the reported problem or task.",
        "Priority, type of work and who it is assigned to.",
        "A checklist or procedure, including any safety steps such as a [permit to work](/glossary/permit-to-work/).",
        "Parts used and time spent, ideally recorded in segments.",
        "Findings, the fix, and the sign-off.",
      ],
    },
    {
      heading: "A typical lifecycle",
      paragraphs: [
        "A work order moves from draft to approved, assigned, in progress, complete and closed. The stages let a supervisor see what is waiting for a technician, what is waiting for parts, and what is waiting for a sign-off.",
      ],
    },
  ],
  firmicore:
    "Firmicore work orders run through a full lifecycle from draft to closed, with multi-technician checklists, time-segment tracking, parts requests and a supervisor sign-off queue. Breakdown reports and preventive maintenance both feed the same work order system.",
  relatedTerms: ["planned-maintenance", "preventive-maintenance", "maintenance-backlog", "mttr", "permit-to-work"],
  relatedPosts: ["work-order-software", "/work-order-software/", "what-is-a-cmms"],
  faq: [
    {
      q: "What is the difference between a work request and a work order?",
      a: "A work request says that something needs attention. A work order is the approved, assigned job that records the work done. Many systems turn a request into a work order.",
    },
    {
      q: "Who closes a work order?",
      a: "Usually a supervisor, after checking the findings and confirming the asset can return to service. That step is what makes the record trustworthy.",
    },
  ],
  updated: "2026-10-07",
};
