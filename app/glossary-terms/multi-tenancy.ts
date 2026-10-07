import type { GlossaryTerm } from "../glossary-types";

export const term: GlossaryTerm = {
  slug: "multi-tenancy",
  term: "Multi-tenancy",
  aliases: ["multi-tenant"],
  metaDescription:
    "Multi-tenancy is one application serving many organizations with each one's data fully isolated. What it means for a cloud CMMS and what to ask a vendor.",
  group: "Systems",
  shortDefinition:
    "Multi-tenancy is an architecture where one application instance serves many customer organizations while keeping each organization's data fully isolated from the others.",
  autoLink: ["multi-tenancy", "multi-tenant"],
  body: [
    {
      heading: "What multi-tenancy means in plain language",
      paragraphs: [
        "In a multi-tenant system, many companies use the same running software, each in their own private space, known as a tenant. Each plant sees only its own machines, work orders and people. The alternative is a separate copy of the software for every customer, which costs more to run and update.",
        "Most cloud software works this way. The word matters for maintenance buyers because maintenance records are operational data that no competitor or other customer should ever see.",
      ],
    },
    {
      heading: "Why it matters in maintenance",
      paragraphs: [
        "A cloud CMMS holds your equipment history, safety records and contractor details. Isolation between tenants is what keeps that private, so the way it is enforced is worth understanding before you buy.",
        "Multi-tenant products usually update for everyone at once, which means no on-site servers to maintain and fewer version differences between customers.",
      ],
    },
    {
      heading: "What to ask a vendor",
      paragraphs: ["Isolation has to be enforced on every read and write on the server, not by hiding data in the interface."],
      bullets: [
        "Where is tenant isolation enforced, in the interface or on the server?",
        "How is access controlled by role within a tenant?",
        "Where is the data hosted, and who can access it on the vendor side?",
        "Can data be exported if you leave?",
      ],
    },
  ],
  firmicore:
    "Firmicore is multi-tenant by design. Each tenant's data is isolated, and role-based access control is enforced on every route and every write, not just in the interface. The platform runs on Firebase Auth, Firestore, Storage and Cloud Functions.",
  relatedTerms: ["cmms", "eam", "asset-registry", "work-order", "asset-lifecycle-management"],
  relatedPosts: ["what-is-a-cmms", "best-cmms-for-small-manufacturers", "cmms-for-regulated-manufacturing"],
  faq: [
    {
      q: "Is multi-tenant less secure than single-tenant?",
      a: "Not inherently. Security depends on how isolation and access control are enforced. Ask where those checks happen and how they are tested.",
    },
    {
      q: "What is a tenant?",
      a: "A tenant is one customer organization using the shared application, with its own separate data and users.",
    },
  ],
  updated: "2026-10-07",
};
