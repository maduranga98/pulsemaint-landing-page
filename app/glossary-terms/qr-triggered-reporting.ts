import type { GlossaryTerm } from "../glossary-types";

export const term: GlossaryTerm = {
  slug: "qr-triggered-reporting",
  term: "QR-triggered reporting",
  aliases: ["QR code breakdown reporting"],
  metaDescription:
    "QR-triggered reporting attaches a fault report to the right machine by scanning a code on it. Definition, why it beats paper logs and what to get right.",
  group: "Workflow",
  shortDefinition:
    "QR-triggered reporting attaches a fault report to the correct asset by scanning a code fixed to the machine, so the operator does not have to identify it by number.",
  autoLink: ["QR-triggered reporting", "QR reporting", "QR code reporting"],
  body: [
    {
      heading: "What QR-triggered reporting means in plain language",
      paragraphs: [
        "Each machine carries a printed QR code. When something goes wrong, the operator scans it with a phone or shared tablet, and the report opens already tied to that machine. They describe the problem; they do not have to find, remember or type an asset number.",
        "It is a small change in the workflow that changes what the records can tell you.",
      ],
    },
    {
      heading: "Why it matters in maintenance",
      paragraphs: [
        "Misattributed reports are the main reason paper and chat-based logs cannot produce per-machine history, so removing the typing step is what makes the history usable. If reports are filed against the wrong machine, or no machine, then [MTBF](/glossary/mtbf/) and cost per asset cannot be trusted.",
        "It also speeds up the first minutes of a breakdown. The report exists at the moment of the fault, with the machine, time and reporter already attached, which helps [MTTA](/glossary/mtta/).",
      ],
    },
    {
      heading: "What to get right",
      paragraphs: ["The scan is the easy part. These details decide whether people use it."],
      bullets: [
        "Put the code where an operator can reach it, at the machine and not in an office.",
        "Make the report short enough to finish with gloves on.",
        "Make sure every machine in the [asset registry](/glossary/asset-registry/) has a code, so there are no gaps.",
        "Let floor staff report without needing a personal desktop login.",
      ],
    },
  ],
  firmicore:
    "Every machine in Firmicore carries a QR code, and scanning it opens breakdown reporting for that specific asset. It is designed for shared floor tablets, so floor staff can report a breakdown without logging in to a desktop.",
  relatedTerms: ["guided-triage", "asset-registry", "mtta", "reactive-maintenance", "work-order"],
  relatedPosts: ["why-qr-reporting-beats-paper-logs", "how-to-report-a-machine-breakdown", "/work-order-software/", "guided-triage-for-shared-tablets"],
  faq: [
    {
      q: "Do operators need an account to report a fault?",
      a: "In Firmicore, floor staff can report a breakdown by scanning the machine's QR code without a desktop login. This is built for shared tablets where users rotate.",
    },
    {
      q: "What happens after the scan?",
      a: "The report is created against that machine and enters the breakdown and work order flow, where a supervisor can assign it.",
    },
  ],
  updated: "2026-10-07",
};
