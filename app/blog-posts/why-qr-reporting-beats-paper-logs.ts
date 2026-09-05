import type { BlogPost } from "../blog-data";

export const post: BlogPost = {
  title: "Why QR Reporting Beats Paper Logs",
  seoTitle: "Why QR Reporting Beats Paper Logs",
  slug: "why-qr-reporting-beats-paper-logs",
  category: "Product",
  read: "5 min",
  date: "May 14, 2026",
  author: "Tharindu Jayasekara",
  role: "Founder, Lumora Ventures",
  excerpt:
    "A practical look at moving breakdown capture from clipboards to machine-level QR flows without disrupting the floor.",
  metaDescription:
    "QR reporting is a data-quality fix, not a technology upgrade: it removes the field operators get wrong most often and starts the clock at the machine.",
  deck: "QR reporting is not a technology upgrade. It is a data-quality fix - it removes the one field operators get wrong most often, and it starts the clock at the machine.",
  intro: [
    "Paper logbooks survive because they work under pressure. Nothing needs charging, nothing needs a password, and everybody already knows how. Any replacement has to be at least as fast at the moment a machine stops, or it will not be used.",
  ],
  sections: [
    {
      id: "the-identity-problem",
      heading: "The machine identity problem",
      blocks: [
        {
          type: "p",
          text: "The single most damaging error in maintenance records is the machine name. Written by hand or typed under pressure, the same asset appears as three or four different strings across a year, and machine-level trends never emerge from the data.",
        },
        {
          type: "p",
          text: "A scanned QR label removes the field entirely. The asset, line, and location attach themselves, and the operator is left describing only what they actually observed.",
        },
      ],
    },
    {
      id: "what-changes",
      heading: "What changes on the floor",
      blocks: [
        {
          type: "ul",
          items: [
            "The report starts at the machine rather than at a desk, so the timestamp reflects the failure rather than the walk.",
            "A photo of the failure state is captured before anything is cleaned, restarted, or cleared.",
            "Severity is set against published definitions rather than tone of voice.",
            "The record is visible to the supervisor immediately, which removes the phone call that usually follows.",
          ],
        },
        {
          type: "callout",
          label: "Firmicore note",
          text: "Keep the paper log for the first month. Running both in parallel on one line tells you exactly which fields operators skip when they are in a hurry, and those are the fields to redesign.",
        },
      ],
    },
    {
      id: "rolling-it-out",
      heading: "Rolling it out without disrupting the floor",
      blocks: [
        {
          type: "steps",
          items: [
            { title: "Label one line first", text: "Print and mount durable labels on a single line. Placement matters more than the label - eye level, on the side the operator stands." },
            { title: "Keep the flow under a minute", text: "Six fields is the ceiling. Anything longer degrades during exactly the incidents you most want documented." },
            { title: "Provide a fallback channel", text: "Where phones are banned, supervisor-mediated capture from a shared device keeps the structured record without a device in the operator's hand." },
            { title: "Review after ten reports", text: "Cut the fields nobody fills in, and add the one question the technician keeps asking on arrival." },
          ],
        },
      ],
    },
  ],
  related: ["how-to-report-a-machine-breakdown", "guided-operator-safety-triage", "what-is-a-cmms"],
};
