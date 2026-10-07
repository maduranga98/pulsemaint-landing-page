import type { GlossaryTerm } from "../glossary-types";

export const term: GlossaryTerm = {
  slug: "unplanned-downtime",
  term: "Unplanned downtime",
  metaDescription:
    "Unplanned downtime is production time lost to a failure that was not scheduled. Definition, what to count, and why reported figures are usually too low.",
  group: "Metrics",
  shortDefinition:
    "Unplanned downtime is production time lost to a failure that was not scheduled, measured from the moment output stops to the moment it resumes.",
  autoLink: ["unplanned downtime"],
  body: [
    {
      heading: "What unplanned downtime means in plain language",
      paragraphs: [
        "Unplanned downtime is the stop nobody arranged. A bearing seizes, a sensor fails or a belt snaps, and the line is down until it is fixed. It is the opposite of [planned downtime](/glossary/downtime/), where a stop is booked in advance for maintenance.",
        "The clock starts when output stops and ends when it resumes, not when the technician arrives and not when the repair is finished.",
      ],
    },
    {
      heading: "Why it matters in maintenance",
      paragraphs: [
        "The reported figure is almost always lower than the real one, because short stops, slow restarts, and scrap made during the ramp back up rarely get logged. If the number is understated, the case for fixing the causes looks weaker than it is.",
        "It is also the clearest measure of whether maintenance is working. Preventive work and better response should reduce unplanned downtime, and it is the number to watch alongside [MTBF](/glossary/mtbf/) and [MTTR](/glossary/mttr/).",
      ],
    },
    {
      heading: "What often goes uncounted",
      paragraphs: ["When you audit the figure, look for these gaps."],
      bullets: [
        "Short stops that operators clear themselves and never report.",
        "The slow restart after a repair, before the line is back at rate.",
        "Scrap or rework produced while the line stabilizes.",
        "Waiting time before anyone logged the fault.",
      ],
    },
    {
      heading: "Working with the number",
      paragraphs: [
        "Split unplanned downtime by machine, cause and shift. A single plant-wide total tells you there is a problem. The split tells you where to start, and it usually shows that a few machines account for most of the time.",
      ],
    },
  ],
  firmicore:
    "Firmicore records each breakdown against the machine with severity, type and root cause, and tracks work orders through to sign-off. Because reports start at the machine, the breakdown record exists from the moment of the fault rather than being reconstructed later.",
  relatedTerms: ["downtime", "reactive-maintenance", "mttr", "mtbf", "root-cause"],
  relatedPosts: ["the-real-cost-of-unplanned-downtime", "how-to-reduce-machine-downtime", "what-is-mttr"],
  faq: [
    {
      q: "What causes unplanned downtime?",
      a: "Most commonly equipment failure. Other causes include operator error, missing parts and power or utility interruptions. Recording a cause for every stop shows which ones dominate.",
    },
    {
      q: "How is unplanned downtime different from idle time?",
      a: "Unplanned downtime means the equipment failed. Idle time means it could run but was not producing, for reasons such as no material or no operator.",
    },
  ],
  updated: "2026-10-07",
};
