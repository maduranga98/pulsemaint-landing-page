import type { GlossaryTerm } from "../glossary-types";

export const term: GlossaryTerm = {
  slug: "machine-maintenance",
  term: "Machine maintenance",
  metaDescription:
    "Machine maintenance is the routine care and repair that keeps production machines running safely. Types of work, a practical routine and what to record.",
  group: "Strategy",
  shortDefinition:
    "Machine maintenance is the inspection, servicing, adjustment and repair of production machines so that they keep running safely and reliably.",
  autoLink: ["machine maintenance"],
  body: [
    {
      heading: "What machine maintenance means in plain language",
      paragraphs: [
        "Machine maintenance is the day-to-day work of looking after the machines that make your product. It covers cleaning, lubrication, inspection and adjustment, replacing worn parts, and repairing faults when they happen. The scope is a single machine or a line, which is why the work is usually organized around each machine's own history.",
        "For the wider view that also includes utilities, tooling and other equipment, see [equipment maintenance](/glossary/equipment-maintenance/).",
      ],
    },
    {
      heading: "Why it matters in maintenance",
      paragraphs: [
        "When a production machine stops, the whole line behind it usually stops too. Keeping machines in good order protects output, product quality and the people working next to moving parts.",
        "Good machine maintenance also leaves a record. When each machine has its own history of faults, tasks and parts, you can see which machines cost the most to keep running.",
      ],
    },
    {
      heading: "Types of machine maintenance work",
      paragraphs: ["Most plants run a mix of these, chosen by how critical each machine is."],
      bullets: [
        "Operator care: daily cleaning, checks and reporting of unusual noise or heat by the people running the machine.",
        "[Preventive maintenance](/glossary/preventive-maintenance/): scheduled servicing by calendar or usage.",
        "[Condition-based maintenance](/glossary/condition-based-maintenance/): work triggered by what the machine shows.",
        "[Reactive maintenance](/glossary/reactive-maintenance/): repair after a failure, which should be a deliberate choice for cheap, non-critical machines.",
      ],
    },
    {
      heading: "What to record for each machine",
      paragraphs: [
        "A usable machine record has a unique identifier, its location, manuals and documents, linked spare parts, and a history of faults and work done. Without that, per-machine questions cannot be answered, which is why an [asset registry](/glossary/asset-registry/) comes first.",
      ],
    },
  ],
  firmicore:
    "Firmicore keeps a record for each machine, with a QR code, documents, linked spare parts and maintenance history. Operators report breakdowns by scanning the code, and guided operator triage can walk them through safe first checks before a technician arrives.",
  relatedTerms: ["equipment-maintenance", "preventive-maintenance", "reactive-maintenance", "asset-registry", "guided-triage"],
  relatedPosts: ["how-to-report-a-machine-breakdown", "what-is-preventive-maintenance", "how-to-reduce-machine-downtime"],
  faq: [
    {
      q: "What is the difference between machine maintenance and equipment maintenance?",
      a: "Machine maintenance refers to production machines. Equipment maintenance is the broader term that also covers supporting equipment such as utilities and tooling.",
    },
    {
      q: "Who does machine maintenance?",
      a: "Both operators and technicians. Operators handle daily care and report faults, and technicians handle servicing and repair.",
    },
  ],
  updated: "2026-10-07",
};
