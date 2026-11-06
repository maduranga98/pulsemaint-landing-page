import type { BlogPost } from "../blog-data";

export const post: BlogPost = {
  title: "Why Does the Same Machine Keep Breaking Down? A Practical Root Cause Analysis Guide",
  seoTitle: "Why Do Machines Keep Breaking Down? RCA Guide",
  slug: "why-machines-keep-breaking-down-root-cause-analysis",
  category: "Engineering",
  read: "9 min",
  date: "November 6, 2026",
  author: "Tharindu Jayasekara",
  role: "Founder, Lumora Ventures",
  excerpt:
    "Repeat failures usually mean the repair fixed a symptom, not the cause. A five-step root cause analysis process, with the 5 Whys and fishbone methods worked through.",
  metaDescription:
    "Discover why machines repeatedly fail, how to perform root cause analysis, and how manufacturing teams can prevent recurring equipment breakdowns.",
  deck: "A machine that keeps breaking down is telling you something has not been resolved. This guide covers why repeat failures happen and how to run a root cause analysis that actually stops them.",
  takeaways: [
    "Repeat failures usually mean the repair addressed the visible symptom, not the underlying cause.",
    "Root cause analysis (RCA) identifies why a failure happened and what must change so it does not recur.",
    "A root cause must be supported by evidence, not an assumption that sounds reasonable.",
    "The 5 Whys suits straightforward cause chains; a fishbone diagram suits failures with several possible contributors.",
    "An investigation only counts when corrective actions have an owner, a deadline and a verification step.",
  ],
  intro: [
    "A machine breaks down. The maintenance team investigates, replaces the faulty component and gets production running again. A few weeks later, the same machine stops for exactly the same reason.",
    "The problem is often not the repair itself. It is that the repair addressed the visible symptom without identifying the underlying cause.",
  ],
  sections: [
    {
      id: "why-machines-keep-breaking-down",
      heading: "Why do machines keep breaking down?",
      blocks: [
        {
          type: "p",
          text: "Repeated equipment failures usually indicate that something deeper in the maintenance process, operating environment or equipment condition has not been addressed. Five reasons are common.",
        },
        {
          type: "steps",
          items: [
            {
              title: "Symptoms get fixed, not causes",
              text: "A conveyor motor that overheats gets replaced, but ventilation, loading, bearings, misalignment, contaminated cooling or incorrect installation may be the real cause. Replacing the motor can simply restart the same failure cycle.",
            },
            {
              title: "Preventive schedules are ineffective",
              text: "Having a schedule does not mean the machine gets the right maintenance. A quarterly inspection may be too infrequent for the machine's actual usage and environment. Intervals should reflect manuals, conditions, failure history and wear patterns.",
            },
            {
              title: "Equipment history is incomplete",
              text: "When records sit in notebooks, spreadsheets and chat threads, recurring problems are hard to see. A technician may repair a pump without knowing the same bearing was replaced twice in six months.",
            },
            {
              title: "Operating conditions contribute",
              text: "Heat, dust, humidity, excessive load, vibration and poor operating practice accelerate deterioration. A component that lasts in one environment can fail much earlier in another.",
            },
            {
              title: "Corrective actions are not followed up",
              text: "If nobody owns a recommended action or checks that it worked, the recommendation stays unfinished. A proper investigation ends in a controlled action with an owner, a deadline and verification.",
            },
          ],
        },
      ],
    },
    {
      id: "what-is-rca",
      heading: "What is root cause analysis in maintenance?",
      blocks: [
        {
          type: "p",
          text: "Root cause analysis is a problem-solving process used to identify the underlying factors responsible for a failure. The objective is not just to explain what happened, but to identify changes that stop it recurring. Three concepts need to be kept apart.",
        },
        {
          type: "table",
          caption: "Symptom, immediate cause and root cause are different things.",
          headers: ["Concept", "Meaning", "Example"],
          rows: [
            ["Symptom", "What was observed", "Motor temperature increased"],
            ["Immediate cause", "What directly triggered the failure", "Motor protection tripped"],
            ["Root cause", "The underlying reason", "Cooling ventilation was repeatedly obstructed because inspection responsibilities were not defined"],
          ],
        },
        {
          type: "p",
          text: "The root cause should be supported by evidence, not by an assumption that merely sounds reasonable.",
        },
      ],
    },
    {
      id: "five-step-process",
      heading: "How to perform root cause analysis: a five-step process",
      blocks: [
        {
          type: "p",
          text: "**Step 1: Define the failure clearly.** Record the machine, date and time, failure description, operating conditions, production impact and previous related incidents. Avoid 'motor problem' or 'machine not working'. A better statement: 'Conveyor motor M-014 stopped because its thermal protection activated during normal production at approximately 80% of rated capacity.' A precise problem statement gives the investigation a clear starting point.",
        },
        {
          type: "p",
          text: "**Step 2: Collect evidence.** Before deciding what caused the failure, gather what is available:",
        },
        {
          type: "ul",
          items: [
            "Previous maintenance work orders.",
            "Machine operating hours.",
            "Temperature and vibration readings.",
            "Component replacement records.",
            "Operator observations.",
            "Photographs of damaged parts.",
            "Recent changes to the production process.",
          ],
        },
        {
          type: "p",
          text: "**Step 3: Use a root cause analysis technique.** Two common techniques are the 5 Whys and the fishbone diagram.",
        },
        {
          type: "table",
          caption: "The 5 Whys applied to a conveyor motor that stopped.",
          headers: ["Question", "Answer"],
          rows: [
            ["Why did the conveyor motor stop?", "It overheated."],
            ["Why did it overheat?", "Cooling airflow was insufficient."],
            ["Why was airflow insufficient?", "The ventilation opening was obstructed."],
            ["Why was it obstructed?", "Dust accumulated around the ventilation area."],
            ["Why was the accumulation not identified?", "No specific inspection task covered the ventilation opening."],
          ],
        },
        {
          type: "p",
          text: "The investigation now has a process-level cause that can be addressed. Five is a guideline, not a requirement: continue until the team reaches an evidence-supported, actionable cause.",
        },
        {
          type: "p",
          text: "A fishbone (Ishikawa) diagram organises possible causes into categories. It is most useful when several factors might contribute to the same failure. For manufacturing maintenance, useful categories are:",
        },
        {
          type: "ul",
          items: [
            "People: operator or technician experience.",
            "Machines: equipment condition and component defects.",
            "Methods: operating and maintenance procedures.",
            "Materials: spare parts and material quality.",
            "Measurement: sensor accuracy and inspection methods.",
            "Environment: temperature, humidity and contamination.",
          ],
        },
        {
          type: "p",
          text: "**Step 4: Implement corrective actions.** Once the root cause is verified, act on it. For the conveyor example: introduce a ventilation inspection task, define a cleaning frequency, assign responsibility to a specific role, record inspection completion and monitor motor temperature afterwards. A good corrective action addresses the cause rather than repeatedly treating the symptom.",
        },
        {
          type: "p",
          text: "**Step 5: Verify the failure has stopped recurring.** Compare subsequent failure history against the previous baseline using repeat failure frequency, downtime, MTBF trends, maintenance cost and completion of corrective actions. If the same problem continues, the investigation may have found an incomplete or incorrect root cause.",
        },
      ],
    },
    {
      id: "cmms",
      heading: "How can a CMMS help prevent repeated failures?",
      blocks: [
        {
          type: "p",
          text: "A computerised maintenance management system retains the information needed to investigate equipment problems. A connected record can bring together machine history, breakdown descriptions and severity, previous work orders, root cause classifications, parts usage, technician assignments and corrective action status, which makes patterns across incidents easier to see.",
        },
        {
          type: "p",
          text: "Firmicore connects machine records, breakdown management, work orders, preventive maintenance and inventory in one platform. Read our guides on [reducing machine downtime](/blog/how-to-reduce-machine-downtime/) and [machine breakdown reporting](/blog/how-to-report-a-machine-breakdown/).",
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
              q: "Why does the same machine keep breaking down?",
              a: "Repeated failures often occur because maintenance teams repair visible symptoms without resolving the underlying cause. Other contributing factors include poor maintenance planning, unsuitable operating conditions, incorrect replacement parts and incomplete equipment history.",
            },
            {
              q: "What is the best root cause analysis method for equipment failure?",
              a: "The 5 Whys works well when a failure has a relatively straightforward chain of causes. Fishbone diagrams are useful when several potential causes need investigating. Complex failures may require additional engineering analysis and testing.",
            },
            {
              q: "What is the difference between corrective maintenance and root cause analysis?",
              a: "Corrective maintenance restores equipment after a fault or failure. Root cause analysis investigates why the failure occurred and identifies actions that can prevent it recurring.",
            },
            {
              q: "How can a factory reduce recurring equipment failures?",
              a: "Maintain accurate equipment histories, investigate repeat failures, review maintenance schedules, monitor machine condition and verify corrective actions rather than simply closing repair jobs.",
            },
            {
              q: "Should every machine breakdown have a root cause investigation?",
              a: "No. Minor incidents do not need a full investigation. Give deeper attention to repeated failures, safety-related events, major production interruptions, high-cost repairs and failures on critical equipment.",
            },
          ],
        },
      ],
    },
    {
      id: "final-thoughts",
      heading: "Final thoughts",
      blocks: [
        {
          type: "p",
          text: "The most effective maintenance teams do more than restore equipment. They investigate recurring failures, learn from maintenance history and change the conditions that allow those failures to happen. Every breakdown should make the next breakdown less likely.",
        },
      ],
    },
  ],
  tags: ["downtime", "metrics", "root-cause-analysis", "breakdown-reporting"],
  related: ["how-to-reduce-machine-downtime", "how-to-report-a-machine-breakdown", "what-is-mttr"],
  sources: [
    { title: "Five Whys", url: "https://asq.org/quality-resources/five-whys", publisher: "ASQ" },
    { title: "Fishbone Diagram", url: "https://asq.org/quality-resources/fishbone", publisher: "ASQ" },
    { title: "Root Cause Analysis Tools", url: "https://asq.org/quality-resources/root-cause-analysis/tools", publisher: "ASQ" },
  ],
};
