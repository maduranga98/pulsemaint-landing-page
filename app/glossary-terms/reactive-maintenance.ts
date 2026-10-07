import type { GlossaryTerm } from "../glossary-types";

export const term: GlossaryTerm = {
  slug: "reactive-maintenance",
  term: "Reactive maintenance",
  aliases: ["run-to-failure"],
  metaDescription:
    "Reactive maintenance, or run-to-failure, is repair work that starts after an asset has failed. Definition, when it is a valid choice, and its costs.",
  group: "Strategy",
  shortDefinition:
    "Reactive maintenance, also called run-to-failure, is repair work that starts only after an asset has already failed.",
  autoLink: ["reactive maintenance", "run-to-failure", "run to failure"],
  body: [
    {
      heading: "What reactive maintenance means in plain language",
      paragraphs: [
        "Reactive maintenance means waiting until something breaks and then fixing it. The machine runs until it fails, the line stops, and the repair begins. There is no inspection or servicing aimed at preventing the failure in the first place.",
        "It is sometimes called breakdown maintenance or run-to-failure, depending on whether the plant chose it deliberately.",
      ],
    },
    {
      heading: "Why it matters in maintenance",
      paragraphs: [
        "Reactive maintenance is not automatically wrong. It is wrong when it is the default for critical assets rather than a deliberate choice for cheap, non-critical ones. The question to ask is not whether a plant does any, but whether it chose it.",
        "The hidden cost is in the surprise. Emergency repairs involve waiting for parts, rushed work and a stopped line, which is why the same job usually costs more when it is not planned.",
      ],
    },
    {
      heading: "When run-to-failure is a sensible choice",
      paragraphs: ["Run-to-failure makes sense when all of these are true."],
      bullets: [
        "The asset is cheap and easily replaced.",
        "Its failure does not stop production or create a safety risk.",
        "Preventive work would cost more than the repair.",
      ],
    },
    {
      heading: "Moving away from reactive work",
      paragraphs: [
        "Start by recording every breakdown against the machine that failed. The records show which assets fail repeatedly, and those are the best candidates for [preventive maintenance](/glossary/preventive-maintenance/) or a [root cause](/glossary/root-cause/) review. Without that history, plants tend to keep fixing the same fault.",
      ],
    },
  ],
  firmicore:
    "Firmicore turns reactive work into data. Operators report a breakdown by scanning the machine's QR code, which attaches the report to the right asset, and each breakdown is tracked with severity, type and root cause. That history shows which machines to move to a preventive schedule.",
  relatedTerms: ["preventive-maintenance", "proactive-maintenance", "unplanned-downtime", "root-cause", "mtbf"],
  relatedPosts: ["how-to-report-a-machine-breakdown", "how-to-reduce-machine-downtime", "the-real-cost-of-unplanned-downtime"],
  faq: [
    {
      q: "Is reactive maintenance the same as corrective maintenance?",
      a: "They are close. Corrective maintenance is any repair that restores a faulty asset. Reactive describes repairs that begin only after the failure has stopped the asset.",
    },
    {
      q: "Can a plant avoid reactive maintenance completely?",
      a: "No. Some failures cannot be predicted. The aim is to reduce surprise failures on critical assets and to respond to the rest quickly.",
    },
  ],
  updated: "2026-10-07",
};
