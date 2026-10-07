import type { GlossaryTerm } from "../glossary-types";

export const term: GlossaryTerm = {
  slug: "lockout-tagout",
  term: "Lockout/tagout",
  aliases: ["LOTO"],
  heading: "Lockout/tagout (LOTO)",
  metaDescription:
    "Lockout/tagout (LOTO) isolates and locks an energy source before maintenance, with a tag naming who applied the lock. Definition and good practice.",
  group: "Safety",
  shortDefinition:
    "Lockout/tagout is the practice of physically isolating and locking an energy source before maintenance work, with a tag identifying who applied the lock.",
  autoLink: ["lockout/tagout", "lockout-tagout", "LOTO"],
  body: [
    {
      heading: "What lockout/tagout means in plain language",
      paragraphs: [
        "Before anyone works inside or near a machine, its energy has to be shut off and stopped from coming back on. Lockout/tagout, often shortened to LOTO, does this with a physical lock on the isolation point, such as a breaker, valve or disconnect, and a tag showing who applied it and why.",
        "Only the person who applied the lock removes it. That simple rule is what stops a machine being restarted while someone is still inside it.",
      ],
    },
    {
      heading: "Why it matters in maintenance",
      paragraphs: [
        "Maintenance work often involves opening guards and reaching into equipment that could move, heat, pressurize or discharge. Accidental start-up is among the most serious risks in the plant, and a lock is a barrier that does not depend on anyone remembering.",
        "Isolation instructions only work when they name the actual isolation point for that asset. Generic safety text is ignored because it is identical everywhere.",
      ],
    },
    {
      heading: "What good isolation instructions include",
      paragraphs: ["Each machine should have its own procedure."],
      bullets: [
        "Every energy source: electrical, pneumatic, hydraulic, thermal, gravity and stored energy.",
        "The exact location of each isolation point.",
        "How to verify the machine is isolated before work starts, such as trying to start it.",
        "Who is authorized to apply and remove locks.",
      ],
    },
    {
      heading: "Rules that apply",
      paragraphs: [
        "In the US, OSHA's control of hazardous energy standard, 29 CFR 1910.147, covers lockout/tagout for general industry. In the UK, HSE guidance on safe isolation applies. Check the requirements for your site and jurisdiction. LOTO is usually paired with a [permit to work](/glossary/permit-to-work/) for high-risk jobs.",
      ],
    },
  ],
  firmicore:
    "Firmicore's safety workspace includes permit to work with precautions, and work orders can carry the steps a job needs. Keeping isolation steps attached to the machine's record means the technician sees the procedure for that asset, not a generic page.",
  relatedTerms: ["permit-to-work", "near-miss", "work-order", "machine-maintenance", "asset-registry"],
  relatedPosts: ["cmms-for-regulated-manufacturing", "guided-operator-safety-triage", "work-order-software"],
  faq: [
    {
      q: "What is the difference between lockout and tagout?",
      a: "Lockout uses a physical lock to hold an isolation point off. Tagout uses a tag as a warning. Many procedures use both together, and a lock provides stronger protection than a tag alone.",
    },
    {
      q: "Who may remove a lock?",
      a: "Only the person who applied it, unless a site procedure defines a controlled alternative.",
    },
  ],
  updated: "2026-10-07",
};
