import type { BlogPost } from "../blog-data";

export const post: BlogPost = {
  title: "How to Report a Machine Breakdown: From Paper Logs to QR Code Reporting",
  slug: "how-to-report-a-machine-breakdown",
  category: "Guides",
  read: "8 min",
  date: "July 24, 2026",
  author: "Tharindu Jayasekara",
  role: "Founder, Lumora Ventures",
  excerpt:
    "A breakdown report is the first and most fragile link in the maintenance chain. Get it wrong and every downstream metric is guesswork. Here is what good looks like.",
  deck: "Most maintenance data problems are not analysis problems. They are intake problems. This is a practical guide to the five ways breakdowns get reported, what a good report captures, and how to make it work on floors where phones are banned.",
  figure: "Fig. 01 - Breakdown reporting channels and the data each one reliably captures.",
  takeaways: [
    "A good breakdown report captures machine, timestamp, reporter, symptom, severity, and a photo - in under a minute, at the machine.",
    "Paper logs and verbal reports fail on timestamp accuracy and audit trail, which makes MTTR and root-cause analysis unreliable.",
    "QR-code reporting works because the machine identity is scanned rather than typed, eliminating the most common data error.",
    "On floors where personal phones are prohibited, supervisor-mediated reporting from a shared station preserves the structured record.",
    "Once intake is digital, MTTR, failure frequency by machine, and parts consumption become measurable rather than anecdotal.",
  ],
  intro: [
    "Ask a plant manager what their mean time to repair is and you will usually get a number. Ask where that number comes from and the answer is often a spreadsheet built from a logbook filled in at the end of a shift, from memory.",
    "The problem is not the analysis. It is that the first record - the moment someone noticed the machine had stopped - was never captured accurately. Everything downstream inherits that error.",
  ],
  sections: [
    {
      id: "why-paper-fails",
      heading: "Why paper and verbal breakdown reporting fails",
      blocks: [
        {
          type: "p",
          text: "Paper logs are not stupid. They are fast, they survive power cuts, and everybody understands them. They fail for structural reasons that no amount of discipline fixes.",
        },
        {
          type: "ul",
          items: [
            "Timestamps are reconstructed, not recorded. A log filled in at shift end contains estimates, and the estimate is always rounder and later than reality.",
            "Machine identity is typed or written, so the same asset appears three different ways and machine-level trends never emerge.",
            "There is no evidence. By the time anyone investigates, the machine has been cleaned, restarted, and the visual clue is gone.",
            "There is no audit trail. Nobody can show who reported what, when, and what was done in response - which matters as soon as a safety incident or a customer audit occurs.",
            "The handoff is lossy. Verbal reporting through a supervisor drops detail with every retelling, and detail is precisely what root-cause analysis needs.",
          ],
        },
        {
          type: "p",
          text: "The cost is not the paper. It is that six months later you cannot answer a simple question: which machine cost us the most downtime, and why.",
        },
      ],
    },
    {
      id: "five-reporting-channels",
      heading: "The five common breakdown-reporting channels",
      blocks: [
        {
          type: "table",
          caption: "Each channel has a floor condition it suits. Most plants need two.",
          headers: ["Channel", "Best for", "Main weakness"],
          rows: [
            ["QR scan at the machine", "Plants where a device is available at or near the machine", "Requires labels to be printed, mounted, and kept legible"],
            ["WhatsApp bot", "Floors where personal phones are allowed and already used", "Fails entirely where phones are prohibited"],
            ["Browser form on a shared terminal", "Line-end stations and control rooms", "The walk to the terminal delays the report"],
            ["Supervisor-mediated capture", "Mobile-banned and contamination-controlled floors", "Depends on supervisor availability at the moment of failure"],
            ["Automated IoT or sensor trigger", "High-value assets with existing instrumentation", "Detects the stop, not the reason - a human still has to describe it"],
          ],
        },
        {
          type: "callout",
          label: "Firmicore note",
          text: "Do not pick one channel and mandate it. Pick the primary channel your floor conditions allow, then add one fallback for when it is unavailable. Reports that cannot be filed do not become delayed reports - they become no reports.",
        },
      ],
    },
    {
      id: "what-a-good-report-captures",
      heading: "Step by step: what a good digital breakdown report captures",
      blocks: [
        {
          type: "p",
          text: "The target is a complete structured record in under sixty seconds. Anything longer and reporting quality degrades during exactly the incidents you most want documented.",
        },
        {
          type: "steps",
          items: [
            {
              title: "1. Identify the machine without typing",
              text: "Scan the QR label. The asset, line, and location are attached automatically, and the single largest source of data error - a mistyped or invented machine name - disappears.",
            },
            {
              title: "2. Stamp the time automatically",
              text: "The report time is recorded by the system, not entered by the reporter. This is what makes response time measurable later.",
            },
            {
              title: "3. Capture the symptom in the reporter's own language",
              text: "A short structured symptom list plus a free-text field, available in the operator's own language. Do not force a diagnosis at this stage - the operator knows what they saw, not what failed.",
            },
            {
              title: "4. Take a photo before anything is touched",
              text: "One photo of the failure state is worth more than a paragraph written afterwards. Make it a prompt, not an optional extra field at the bottom.",
            },
            {
              title: "5. Set severity against a shared definition",
              text: "Three levels are enough - line stopped, degraded output, safe to run until scheduled. Publish the definitions so severity means the same thing on every shift.",
            },
            {
              title: "6. Record who reported it",
              text: "Not to assign blame, but because the technician arriving in eight minutes needs to know who to ask what happened.",
            },
          ],
        },
        {
          type: "stats",
          items: [
            ["6", "fields for a complete report"],
            ["<60s", "target time to submit"],
            ["1", "photo before the machine is touched"],
            ["0", "typed machine names"],
          ],
        },
      ],
    },
    {
      id: "mobile-banned-floors",
      heading: "Supervisor-mediated reporting for mobile-banned floors",
      blocks: [
        {
          type: "p",
          text: "This is the case most maintenance software ignores, and it is common: food and pharmaceutical production areas, plants with contamination controls, and sites where personal phones are prohibited for safety or quality reasons.",
        },
        {
          type: "p",
          text: "The usual advice - 'just give everyone the mobile app' - is not available. What works instead is a deliberate two-step flow that keeps the structured record without putting a device in the operator's hand.",
        },
        {
          type: "ol",
          items: [
            "The operator raises the breakdown verbally or with a physical signal, exactly as they do today. Nothing changes at the point of failure.",
            "The supervisor captures the structured record at a shared floor station or handheld device, with the operator present and named as the reporter.",
            "The report is timestamped at capture, and the delay between failure and capture is itself recorded rather than hidden - so you can see how much of your response time is intake lag.",
            "The photo is taken by the supervisor's shared device, which is permitted on the floor where personal phones are not.",
          ],
        },
        {
          type: "callout",
          label: "Why the intake lag field matters",
          text: "If you do not measure the gap between failure and report, every improvement you make to technician response time will be invisible - because the reporting delay dominates and nobody is looking at it.",
        },
      ],
    },
    {
      id: "what-changes-downstream",
      heading: "What changes downstream once reporting is digital",
      blocks: [
        {
          type: "p",
          text: "Digital intake is not an end in itself. It is what makes the following possible, none of which is reliably available from a logbook.",
        },
        {
          type: "ul",
          items: [
            "MTTR becomes real, because both the start and end timestamps are system-recorded rather than remembered.",
            "Response time separates from repair time, which turns a vague 'maintenance is slow' complaint into a specific staffing or routing question.",
            "Failure frequency per machine emerges, because every report is attached to a scanned asset rather than a typed name.",
            "Root cause analysis has evidence - photos, symptom descriptions, and what the operator had already tried.",
            "Parts consumption ties to specific assets, which makes spares stocking a calculation instead of a guess.",
          ],
        },
        {
          type: "p",
          text: "The sequence matters. Plants that buy analytics before fixing intake end up with dashboards built on reconstructed data, which is worse than no dashboard because it looks authoritative.",
        },
      ],
    },
    {
      id: "faq",
      heading: "Frequently asked questions",
      blocks: [
        {
          type: "faq",
          items: [
            {
              q: "How do you report a machine breakdown properly?",
              a: "Capture six things at the machine, in under a minute: the machine identity (scanned, not typed), an automatic timestamp, the symptom in the reporter's own words, a photo of the failure state before anything is touched, a severity level against published definitions, and the reporter's name.",
            },
            {
              q: "What is QR code machine reporting?",
              a: "Each machine carries a printed QR label. Scanning it opens a pre-filled breakdown report already attached to that asset, so the reporter only describes the symptom. It removes machine-identification errors and cuts reporting time to well under a minute.",
            },
            {
              q: "How do you digitise breakdown reporting when phones are banned on the floor?",
              a: "Use supervisor-mediated capture from a shared, permitted device. The operator reports verbally as they do today, the supervisor records the structured report with the operator named as reporter, and the system logs the intake delay separately so it stays visible.",
            },
          ],
        },
      ],
    },
  ],
  related: ["what-is-a-cmms", "how-to-reduce-machine-downtime", "guided-operator-safety-triage"],
};
