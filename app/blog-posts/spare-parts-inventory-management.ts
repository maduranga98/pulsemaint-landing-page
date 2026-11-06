import type { BlogPost } from "../blog-data";

export const post: BlogPost = {
  title: "How to Manage Spare Parts Inventory in a Manufacturing Plant",
  seoTitle: "Spare Parts Inventory Management for Plants",
  slug: "spare-parts-inventory-management",
  category: "Operations",
  read: "9 min",
  date: "November 6, 2026",
  author: "Tharindu Jayasekara",
  role: "Founder, Lumora Ventures",
  excerpt:
    "A missing bearing turns a small repair into a long stoppage. How to identify critical spares, run ABC analysis, and calculate reorder points and safety stock.",
  metaDescription:
    "Learn how to manage spare parts inventory, calculate reorder points, identify critical components, and prevent costly stockouts in manufacturing plants.",
  deck: "The technician is ready, the work area is ready and production is waiting, but the bearing is not in the store. Spare-parts management balances availability against inventory cost.",
  takeaways: [
    "Not all spares are equal: criticality, failure likelihood, lead time, alternatives and cost all matter.",
    "ABC analysis ranks by annual consumption value, not by operational criticality. Use both.",
    "Reorder point = expected demand during lead time + safety stock.",
    "Inventory position must include outstanding orders and reserved stock, not just what is on the shelf.",
    "More stock is not automatically better; excess inventory costs money and can become obsolete.",
  ],
  intro: [
    "A machine breaks down because of a damaged bearing. The team identifies the problem and prepares the repair, but the bearing is not in the store. The machine stays stopped while the factory looks for a supplier. This is an inventory problem that has become a production problem.",
  ],
  sections: [
    {
      id: "why-it-matters",
      heading: "Why spare parts management matters",
      blocks: [
        {
          type: "p",
          text: "A standard bolt may come from several suppliers. A specialised pump component may have a long lead time and no substitute. Managing both identically creates either unnecessary cost or exposure to downtime. Effective management helps to:",
        },
        {
          type: "ul",
          items: [
            "Reduce stockouts of critical components.",
            "Avoid unnecessary purchases.",
            "Improve repair readiness.",
            "Control inventory cost.",
            "Track actual parts consumption.",
            "Improve purchasing decisions.",
            "Connect parts usage with equipment history.",
          ],
        },
      ],
    },
    {
      id: "mro",
      heading: "What is MRO inventory?",
      blocks: [
        {
          type: "p",
          text: "MRO stands for Maintenance, Repair and Operations: the parts, supplies and consumables used to support the operation and maintenance of a facility, not usually sold as part of the finished product.",
        },
        {
          type: "table",
          headers: ["Category", "Examples"],
          rows: [
            ["Mechanical components", "Bearings, belts, seals, couplings"],
            ["Electrical components", "Fuses, relays, contactors, cables"],
            ["Lubricants", "Grease, hydraulic oil, machine oil"],
            ["Pneumatic components", "Valves, fittings, cylinders"],
            ["Maintenance consumables", "Filters, cleaning supplies, fasteners"],
            ["Safety-related supplies", "Approved maintenance PPE and replacement safety components"],
          ],
        },
      ],
    },
    {
      id: "critical-spares",
      heading: "How to identify critical spare parts",
      blocks: [
        {
          type: "ol",
          items: [
            "Equipment criticality: a spare for a machine that can stop the whole line deserves higher priority than one for non-critical equipment.",
            "Failure likelihood: use failure records and expected component life.",
            "Supplier lead time: a part available locally within hours is a different risk from one that takes weeks.",
            "Availability of alternatives: do not assume another part is compatible because it looks similar; substitutes must be approved.",
            "Financial impact: weigh the cost of stocking against the operational cost of not having it. A critical part can justify holding stock even when expensive.",
          ],
        },
      ],
    },
    {
      id: "abc-analysis",
      heading: "ABC analysis for spare parts",
      blocks: [
        {
          type: "callout",
          label: "Formula",
          text: "Annual Consumption Value = Annual Quantity Used × Unit Purchase Cost.",
        },
        {
          type: "table",
          headers: ["Category", "Meaning", "Management approach"],
          rows: [
            ["A", "Higher annual consumption value", "More detailed monitoring and control"],
            ["B", "Medium annual consumption value", "Regular review"],
            ["C", "Lower annual consumption value", "Simpler controls where appropriate"],
          ],
        },
        {
          type: "p",
          text: "Set the percentage boundaries from your own inventory distribution. Note that ABC analysis does not measure operational criticality: a cheap item with tiny annual consumption can still stop an important line. Use it alongside equipment criticality and lead time.",
        },
      ],
    },
    {
      id: "reorder-point",
      heading: "How to calculate a reorder point",
      blocks: [
        {
          type: "callout",
          label: "Formula",
          text: "Reorder Point = Expected Demand During Lead Time + Safety Stock.",
        },
        {
          type: "p",
          text: "Worked example: a factory uses about four filters a week and the supplier takes three weeks to deliver, so demand during lead time is 4 × 3 = 12 filters. With five filters of safety stock, the reorder point is 12 + 5 = 17. When the inventory position reaches 17, purchasing is triggered.",
        },
        {
          type: "p",
          text: "Inventory position should count outstanding orders and stock reserved for other jobs, not only the physical quantity in the store. This is a simplified calculation; real planning should also account for consumption variability, delivery uncertainty, minimum order quantities and service-level requirements.",
        },
      ],
    },
    {
      id: "safety-stock",
      heading: "How to determine safety stock",
      blocks: [
        {
          type: "p",
          text: "Safety stock is extra inventory held against uncertainty, such as deliveries that sometimes take longer than the usual two weeks. Consider demand variation, supplier reliability, lead time, the consequences of a stockout and whether alternative suppliers exist. Higher stock is not automatically better: excess inventory adds storage cost, ties up working capital and can become obsolete.",
        },
      ],
    },
    {
      id: "seven-ways",
      heading: "Seven practical ways to improve spare parts management",
      blocks: [
        {
          type: "steps",
          items: [
            {
              title: "Centralise the parts catalogue",
              text: "One record per part: unique number, description, manufacturer, approved specification, compatible machines, location, supplier and unit cost. This ends multiple names for the same component.",
            },
            {
              title: "Link parts to equipment",
              text: "Record which machines use each part, so the impact of a shortage is visible.",
            },
            {
              title: "Record every stock movement",
              text: "Receipts, issues, returns, transfers and adjustments. Without them, system stock drifts away from the physical count.",
            },
            {
              title: "Monitor critical stock",
              text: "Review critical components regularly against reorder points, lead times and equipment criticality.",
            },
            {
              title: "Standardise where practical",
              text: "Compatible components can reduce the number of items stocked, but substitutions must be approved by responsible technical staff.",
            },
            {
              title: "Review obsolete inventory",
              text: "Find parts tied to retired or modified equipment. Holding them adds cost without improving availability.",
            },
            {
              title: "Analyse consumption",
              text: "Machines that consume the most parts may have recurring failures, poor installation practice or deteriorating equipment.",
            },
          ],
        },
      ],
    },
    {
      id: "cmms",
      heading: "How a CMMS improves spare parts management",
      blocks: [
        {
          type: "p",
          text: "A CMMS ties maintenance work to inventory. A technician requests a bearing for a work order, the store keeper reviews it, the part is issued and the movement becomes part of the maintenance record. Firmicore provides an inventory and parts module with a categorised catalogue, stock movement records, multi-stage approval workflows, purchase orders, supplier management and low-stock alerts on applicable plans. See how it fits with [work orders](/work-order-software/) and the wider [maintenance platform](/maintenance-management-software/).",
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
              q: "How many spare parts should a manufacturing plant keep?",
              a: "There is no standard quantity. Stock levels depend on equipment criticality, consumption, supplier lead time, stockout consequences and component availability.",
            },
            {
              q: "What is the difference between MRO and raw-material inventory?",
              a: "MRO inventory supports equipment maintenance and facility operations. Raw materials are consumed or transformed during production of the finished product.",
            },
            {
              q: "What is a spare-parts reorder point?",
              a: "The inventory level at which replenishment should be initiated. It commonly equals expected consumption during supplier lead time plus safety stock.",
            },
            {
              q: "How can factories reduce excess spare-parts inventory?",
              a: "Review consumption patterns, remove obsolete items, set realistic reorder points, improve supplier coordination and separate critical components from low-impact stock.",
            },
            {
              q: "Why is spare-parts tracking important for maintenance teams?",
              a: "Parts consumption shows maintenance cost, recurring failures, machine reliability and replacement needs.",
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
          text: "Good spare-parts management means the right parts are available when maintenance needs them, without tying up capital in stock that rarely moves. When machine records, work orders and inventory are connected, a factory sees what it consumes and why.",
        },
      ],
    },
  ],
  tags: ["inventory", "work-orders", "downtime"],
  related: ["work-order-software", "asset-criticality-analysis-manufacturing", "how-to-reduce-machine-downtime"],
  sources: [
    {
      title: "Understanding Reorder Point Planning",
      url: "https://learning.sap.com/courses/consumption-based-planning-and-forecasting-in-sap-cloud-erp/understanding-the-net-requirements-calculation-for-reorder-point-planning",
      publisher: "SAP Learning",
    },
  ],
};
