import type { GlossaryTerm } from "../glossary-types";

export const term: GlossaryTerm = {
  slug: "permit-to-work",
  term: "Permit to work",
  aliases: ["PTW"],
  metaDescription:
    "A permit to work authorizes a high-risk job and records the precautions and who accepted them. Definition, contents and how it differs from LOTO.",
  group: "Safety",
  shortDefinition:
    "A permit to work is a documented authorization that a specific high-risk job may proceed, listing the precautions taken and the person who accepted them.",
  autoLink: ["permit to work", "permits to work", "permit-to-work"],
  body: [
    {
      heading: "What a permit to work means in plain language",
      paragraphs: [
        "A permit to work is a formal, written go-ahead for a dangerous job, such as hot work, confined space entry, work at height or work on energized equipment. It is not a work order. The work order says what to do. The permit says the job is safe to start and records how.",
        "A permit is specific to one job, location and time period. When the job finishes or conditions change, the permit is closed or reissued.",
      ],
    },
    {
      heading: "Why it matters in maintenance",
      paragraphs: [
        "Maintenance regularly puts people in contact with hazards that production staff do not face. A permit forces a pause before the job begins: has the energy been isolated, has the area been checked, does everyone involved know the limits? It also creates a record showing who agreed to what.",
        "The permit also separates responsibility. The person who authorizes the job, the person who accepts the precautions and the person who does the work are named, and that clarity matters most when something goes wrong.",
      ],
    },
    {
      heading: "What a permit usually records",
      paragraphs: ["Requirements differ by site and by the rules that apply to it, but most permits capture the same core items."],
      bullets: [
        "The job, the location and the equipment involved.",
        "The hazards identified and the precautions taken.",
        "Isolations applied, which links to [lockout/tagout](/glossary/lockout-tagout/).",
        "Who authorized it, who accepted it, and the time period it covers.",
        "Sign-off when the job is complete and the area is safe to restore.",
      ],
    },
    {
      heading: "Permit to work and lockout/tagout",
      paragraphs: [
        "They work together and are not the same thing. Lockout/tagout is the physical isolation of an energy source. A permit to work is the wider authorization that includes checking that isolation has been done. Check the rules that apply at your site for the exact requirements.",
      ],
    },
  ],
  firmicore:
    "Firmicore has a safety workspace that includes permit to work with precautions, incident, near-miss and hazard reporting, and a safety training calendar. Work orders can carry safety steps, so the precautions sit next to the job instead of in a separate binder.",
  relatedTerms: ["lockout-tagout", "near-miss", "work-order", "shift-handover", "root-cause"],
  relatedPosts: ["cmms-for-regulated-manufacturing", "guided-operator-safety-triage", "work-order-software"],
  faq: [
    {
      q: "Is a permit to work the same as a work order?",
      a: "No. A work order describes the job. A permit to work authorizes a high-risk job to start and records the precautions.",
    },
    {
      q: "Which jobs need a permit to work?",
      a: "That is set by your site's safety rules and the regulations that apply to it. Typical examples are hot work, confined spaces and work at height.",
    },
  ],
  updated: "2026-10-07",
};
