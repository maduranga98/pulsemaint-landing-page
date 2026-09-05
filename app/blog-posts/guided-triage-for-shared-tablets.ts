import type { BlogPost } from "../blog-data";

export const post: BlogPost = {
  title: "Guided Triage for Shared Factory Tablets",
  seoTitle: "Guided Triage on Shared Factory Tablets",
  slug: "guided-triage-for-shared-tablets",
  category: "Engineering",
  read: "6 min",
  date: "May 8, 2026",
  author: "Tharindu Jayasekara",
  role: "Founder, Lumora Ventures",
  excerpt:
    "How to design safe-action flows when personal phones are restricted and operators rotate across shifts.",
  metaDescription:
    "Shared devices break the assumptions mobile software is built on: no personal login, no session, a new user every few minutes. How triage adapts.",
  deck: "Shared devices break most of the assumptions mobile software is built on: no personal login, no persistent session, and a different user every few minutes. Here is how triage flows have to change.",
  intro: [
    "A shared floor tablet is not a phone with more users. It is a public terminal in a hostile environment, and designing for it means giving up several conveniences that single-user mobile apps take for granted.",
  ],
  sections: [
    {
      id: "the-constraints",
      heading: "The constraints a shared device imposes",
      blocks: [
        {
          type: "ul",
          items: [
            "No persistent login. Whoever picks the device up next must not inherit the previous user's session or see their draft.",
            "Identity has to be lightweight. A password on a greasy screen with gloves on will be shared, written on the wall, or bypassed - a scanned badge or a short PIN is more honest.",
            "Sessions must expire fast and reset cleanly, because devices are put down mid-task constantly.",
            "The screen is read at arm's length in poor light. Type sizes and contrast that pass in the office fail on the floor.",
            "Connectivity is worse near the machines than anywhere else in the building, so every step must queue offline.",
          ],
        },
      ],
    },
    {
      id: "designing-the-flow",
      heading: "Designing the triage flow",
      blocks: [
        {
          type: "steps",
          items: [
            { title: "Identify by scan, not by typing", text: "Badge or QR identification attaches the reporter without a keyboard, which is what makes attribution survive contact with the floor." },
            { title: "One decision per screen", text: "Shared devices get put down. A flow with one question per screen resumes cleanly; a long form does not." },
            { title: "Machine-specific isolation first", text: "Name and picture the actual isolation point for that asset. Generic safety text is ignored because it is always the same." },
            { title: "State prohibited actions explicitly", text: "Do not restart, do not open the rear guard, do not clear the jam by hand - written per machine, because the answer differs per machine." },
            { title: "Auto-reset on completion", text: "Submit, confirm, and return to the idle screen without leaving anything behind for the next user." },
          ],
        },
        {
          type: "callout",
          label: "Firmicore note",
          text: "Test with gloves on, in the darkest corner of the plant, on the oldest device you own. Every shared-device design failure we have seen was invisible in the office and obvious within ten minutes on the floor.",
        },
      ],
    },
    {
      id: "shift-rotation",
      heading: "Designing for shift rotation",
      blocks: [
        {
          type: "p",
          text: "Operators rotate across shifts and lines, and turnover is high. Any flow that assumes accumulated familiarity with the software will degrade every time the roster changes.",
        },
        {
          type: "p",
          text: "The practical consequence is that the flow must be self-explanatory on first use, in the reader's own language, with photographs doing the work that instructions cannot. If a new operator on their first night shift cannot complete it unaided, it is not finished.",
        },
      ],
    },
  ],
  related: ["guided-operator-safety-triage", "how-to-report-a-machine-breakdown", "cryotos-alternative"],
};
