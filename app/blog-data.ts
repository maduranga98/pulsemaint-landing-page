export type BlogPost = {
  title: string;
  slug: string;
  category: string;
  read: string;
  date: string;
  author: string;
  role: string;
  excerpt: string;
};

export const posts: BlogPost[] = [
  {
    title: "The Real Cost of Unplanned Downtime",
    slug: "the-real-cost-of-unplanned-downtime",
    category: "Operations",
    read: "8 min",
    date: "May 21, 2026",
    author: "Tharindu Jayasekara",
    role: "Founder, Lumora Ventures",
    excerpt:
      "The visible repair bill is rarely the problem. Lost output, overtime, scrap, and delayed customer orders usually cost far more.",
  },
  {
    title: "Why QR Reporting Beats Paper Logs",
    slug: "why-qr-reporting-beats-paper-logs",
    category: "Product",
    read: "5 min",
    date: "May 14, 2026",
    author: "Nadeesha Perera",
    role: "Product Lead",
    excerpt: "A practical look at moving breakdown capture from clipboards to machine-level QR flows without disrupting the floor.",
  },
  {
    title: "Guided Triage for Shared Factory Tablets",
    slug: "guided-triage-for-shared-tablets",
    category: "Engineering",
    read: "6 min",
    date: "May 8, 2026",
    author: "Kasun Fernando",
    role: "Engineering",
    excerpt: "How to design safe-action flows when personal phones are restricted and operators rotate across shifts.",
  },
];
