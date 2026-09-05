import type { BlogPost } from "../blog-data";

export const post: BlogPost = {
  title: "CMMS Pricing Explained: Per-Machine vs Per-User Models Compared",
  seoTitle: "CMMS Pricing: Per-Machine vs Per-User",
  slug: "cmms-pricing-per-machine-vs-per-user",
  category: "Pricing",
  read: "9 min",
  date: "August 20, 2026",
  author: "Tharindu Jayasekara",
  role: "Founder, Lumora Ventures",
  excerpt:
    "Most CMMS vendors charge per user. That makes the software more expensive exactly when you want more of the plant using it. Here is what both models cost at 20, 50 and 100 machines.",
  metaDescription:
    "Per-user pricing caps how many people you let into your CMMS; per-machine ties cost to the asset. The arithmetic for both, plus the hidden costs.",
  deck: "Per-user pricing quietly caps how many people you let into your maintenance system. Per-machine pricing ties cost to the thing you are actually maintaining. Here is the arithmetic for both, plus the hidden costs that neither pricing page mentions.",
  figure: "Fig. 01 - Modelled annual cost of per-user vs per-machine CMMS licensing across three factory sizes.",
  takeaways: [
    "Per-user CMMS pricing scales with headcount, so the cost of adding an operator to the system is the same as adding a technician - even though the operator may log in twice a month.",
    "Per-machine pricing scales with your asset register, which is the thing maintenance work is actually attached to, and it makes unlimited users economically safe.",
    "In a modelled 50-seat deployment at $65/user/month, per-user licensing runs about $39,000 a year. The same plant with 60 machines on per-machine pricing lands in a very different bracket.",
    "Per-user pricing genuinely wins when you have very few machines and a small, fixed maintenance team - a workshop with 8 assets and 3 technicians is not the per-machine case.",
    "The costs that break budgets are usually not the headline rate: seat minimums, annual-only billing, feature gating by tier, storage overages, and paid onboarding.",
  ],
  intro: [
    "Almost every established CMMS on the market charges per user, per month. It is a familiar SaaS pattern borrowed from CRM and project management tools, and for those categories it makes sense: the person using the software is the person creating the value.",
    "Maintenance software does not work that way. The value sits in the machine history, and the people who produce the most valuable data - the operators standing next to the machine when it stops - are the least frequent users of the system. Per-user pricing charges you most for exactly the users you most want to add.",
    "This post walks through what each model actually costs, using transparent assumptions you can re-run with your own numbers.",
  ],
  sections: [
    {
      id: "what-per-user-pricing-costs-at-scale",
      heading: "What per-user CMMS pricing actually costs at scale",
      blocks: [
        {
          type: "p",
          text: "Take a mid-sized plant: 50 people who need some level of access. That is not an aggressive number. It is a maintenance manager, two supervisors, eight technicians, a storekeeper, a couple of planners, and roughly 36 machine operators across three shifts.",
        },
        {
          type: "p",
          text: "At a mid-tier rate of $65 per user per month - broadly where the premium tiers of the larger vendors sit at list price - that is $3,250 a month, or $39,000 a year, before implementation, integrations, or overage. Every new hire adds $780 a year. Every seasonal shift adds a line item.",
        },
        {
          type: "callout",
          label: "Check the current rate",
          text: "Vendor pricing moves, and published rates are list prices before negotiation. Treat every figure in this post as a model you re-run with quotes you have actually received, not as a price quote.",
        },
        {
          type: "p",
          text: "The predictable outcome is seat rationing. Plants buy 12 seats instead of 50 and route everything through supervisors. The operators - the people with the most direct evidence about what failed and why - end up reporting breakdowns verbally, and the machine history you are paying for gets thinner rather than richer.",
        },
        {
          type: "stats",
          items: [
            ["$39,000", "modelled 50-user annual cost"],
            ["$780", "cost of adding one user per year"],
            ["3", "shifts that each need floor access"],
            ["0", "operators most plants can afford to license"],
          ],
        },
      ],
    },
    {
      id: "how-per-machine-pricing-works",
      heading: "How per-machine pricing works and why it changes the incentive",
      blocks: [
        {
          type: "p",
          text: "Per-machine pricing charges for the assets you register in the system, and leaves user accounts unmetered. You pay for the 60 machines on your floor. Whether 12 or 200 people log in against those machines does not change the invoice.",
        },
        {
          type: "p",
          text: "The practical effect is that the economics stop fighting the workflow. There is no reason to withhold access from a night-shift operator, a new hire, or a line lead who only needs the system when something breaks. Adoption stops being a budget decision and becomes a training decision.",
        },
        {
          type: "ul",
          items: [
            "Cost tracks the asset register, which changes slowly and predictably, rather than headcount, which churns.",
            "Unlimited accounts make QR-code and shop-floor reporting viable, because casual reporters cost nothing.",
            "Decommissioning a machine reduces cost, which gives you a reason to keep the asset register accurate.",
            "Budgeting is easier: capital planning already tracks machines, so the finance conversation uses numbers that already exist.",
          ],
        },
        {
          type: "p",
          text: "The trade-off is real and worth stating plainly: if you have very few machines and a lot of people, per-machine pricing costs you more. That case is covered further down.",
        },
      ],
    },
    {
      id: "cost-comparison-by-factory-size",
      heading: "Side-by-side cost comparison at three factory sizes",
      blocks: [
        {
          type: "p",
          text: "The table below models annual licensing cost only - not implementation, training, or integration work - at three plant profiles. User counts assume roughly 0.8 users per machine, which is typical for a plant that wants operators reporting directly.",
        },
        {
          type: "table",
          caption: "Modelled annual licensing cost. Per-user column assumes $65/user/month list pricing; per-machine assumes a mid-tier asset rate. Re-run with your own quotes.",
          headers: ["Plant profile", "Machines", "Users needing access", "Per-user model (annual)", "Per-machine model (annual)"],
          rows: [
            ["Small factory", "20", "16", "$12,480", "Scales with 20 assets"],
            ["Mid-sized plant", "50", "40", "$31,200", "Scales with 50 assets"],
            ["Multi-line plant", "100", "80", "$62,400", "Scales with 100 assets"],
          ],
        },
        {
          type: "bars",
          caption: "Per-user annual licensing cost by plant size (modelled at $65/user/month)",
          note: "The curve is driven by headcount, not by how many machines you maintain.",
          items: [
            { label: "20 machines / 16 users", value: 12480, display: "$12,480" },
            { label: "50 machines / 40 users", value: 31200, display: "$31,200" },
            { label: "100 machines / 80 users", value: 62400, display: "$62,400" },
          ],
        },
        {
          type: "p",
          text: "The pattern that matters is not the absolute number - it is the slope. Under per-user pricing, the cost of running maintenance software rises every time the plant hires, and rises fastest in exactly the scenario you want to encourage: more of the floor participating in reporting.",
        },
      ],
    },
    {
      id: "when-per-user-pricing-makes-sense",
      heading: "When per-user pricing actually makes sense",
      blocks: [
        {
          type: "p",
          text: "Per-user pricing is not a trick. There are configurations where it is straightforwardly the cheaper and simpler option, and it is worth being honest about them.",
        },
        {
          type: "ul",
          items: [
            "Asset-heavy, people-light operations are the wrong shape for it - but people-light, asset-light operations are fine. A workshop with 8 machines and 3 technicians will pay less per user.",
            "Facilities and property maintenance, where the 'asset' is a building with hundreds of ambiguous line items, is easier to price per user than per asset.",
            "Teams that deliberately want a closed system - where only trained planners touch the CMMS and operators report through a supervisor - are not paying for access they wanted anyway.",
            "Free tiers with low user caps are a legitimate way to trial a tool before committing to any model.",
          ],
        },
        {
          type: "p",
          text: "The decision rule is simple: divide your machine count by the number of people who would ideally have access. If that ratio is well below one - many more people than machines - per-user pricing deserves a serious look. If it is near or above one, per-machine pricing usually wins, and wins by more every year the headcount grows.",
        },
      ],
    },
    {
      id: "hidden-costs",
      heading: "Hidden costs to watch for in either model",
      blocks: [
        {
          type: "p",
          text: "The headline rate is the part of the contract vendors compete on, which means it is rarely where the margin is. These are the line items worth pulling into the open before you sign.",
        },
        {
          type: "steps",
          items: [
            {
              title: "Seat minimums and annual commitments",
              text: "A $20/user/month rate with a 25-seat minimum is a $6,000 floor, whatever your actual usage. Ask what happens if you need 11 seats.",
            },
            {
              title: "Feature gating by tier",
              text: "Preventive maintenance scheduling, custom reports, API access, and mobile offline mode are common upsells. Price the tier that contains the features you actually need, not the entry tier.",
            },
            {
              title: "Storage and attachment overages",
              text: "Photo-heavy breakdown reporting produces a lot of data. Check whether image and document storage is metered, and at what rate.",
            },
            {
              title: "Onboarding and data migration",
              text: "Asset register import, historical work order migration, and training are frequently priced separately as a one-off, and can exceed a year of licensing.",
            },
            {
              title: "Integration and API limits",
              text: "If you need ERP or inventory integration, confirm whether the API is included, rate-limited, or an add-on tier.",
            },
            {
              title: "Read-only and light users",
              text: "Some vendors offer cheaper viewer seats. Confirm exactly what a viewer can and cannot do - if they cannot submit a breakdown report, the seat does not solve your access problem.",
            },
          ],
        },
        {
          type: "callout",
          label: "Firmicore note",
          text: "Ask every vendor the same question: what does it cost to give a night-shift operator the ability to report a breakdown from the machine? The answer to that one question tells you more about the pricing model than the pricing page does.",
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
              q: "What is per-machine CMMS pricing?",
              a: "Per-machine pricing charges based on the number of assets registered in the maintenance system rather than the number of user accounts. User access is unlimited, so the cost of the software tracks the size of your asset register instead of your headcount.",
            },
            {
              q: "Is per-machine pricing always cheaper than per-user pricing?",
              a: "No. If you have far more users than machines - for example a facilities team maintaining a small number of large assets - per-user pricing can be cheaper. The rough test is your machine-to-user ratio: below one favours per-user, near or above one favours per-machine.",
            },
            {
              q: "How much does a CMMS cost per year?",
              a: "It depends entirely on the model. Modelled at a $65/user/month list rate, 40 users costs roughly $31,200 a year. Entry tiers of most vendors start far lower but gate preventive maintenance scheduling and reporting features. Always price the tier that includes the features you need.",
            },
            {
              q: "Why do most CMMS vendors charge per user?",
              a: "Per-user pricing is the default SaaS convention, and it is simple to meter. It fits categories where every user is a heavy user. Maintenance is different, because the most valuable data often comes from occasional users - operators reporting a breakdown once or twice a month.",
            },
          ],
        },
      ],
    },
  ],
  related: ["maintainx-alternative", "best-cmms-for-small-manufacturers", "what-is-a-cmms"],
};
