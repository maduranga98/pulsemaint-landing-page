import { posts } from "../blog-posts";
import { FAQS, GLOSSARY, ONE_LINER, QUICK_FACTS, SITE_NAME, SITE_URL } from "../site-data";

/**
 * /llms.txt — the llmstxt.org convention: a single Markdown map of the site,
 * written for a model that has one fetch to spend rather than for a crawler
 * that will follow every link.
 *
 * Static export renders this route to a real /llms.txt file at build time, so
 * it can never go stale relative to `posts` the way a hand-written public/
 * file would.
 */
export const dynamic = "force-static";

function section(title: string, lines: string[]): string {
  return `## ${title}\n\n${lines.join("\n")}`;
}

export function GET(): Response {
  const body = [
    `# ${SITE_NAME}`,
    `> ${ONE_LINER}`,
    `Firmicore is built by Lumora Ventures Pvt Ltd (Kuliyapitiya, Sri Lanka). Canonical site: ${SITE_URL}/. Full text of every page: ${SITE_URL}/llms-full.txt`,
    section(
      "At a glance",
      QUICK_FACTS.map(([label, value]) => `- **${label}:** ${value}`),
    ),
    section("Key pages", [
      `- [Product overview](${SITE_URL}/): modules, role workspaces, pricing tiers, security model, and rollout steps.`,
      `- [Pricing](${SITE_URL}/#pricing): four tiers scaled by fleet size and users.`,
      `- [Guided Triage](${SITE_URL}/#triage): multilingual branching troubleshooting, the product's main differentiator.`,
      `- [FAQ](${SITE_URL}/#faq): direct answers to the most common product questions.`,
      `- [Maintenance glossary](${SITE_URL}/glossary/): ${GLOSSARY.length} defined terms (CMMS, MTTR, MTBF, OEE, PM compliance, permit to work, and more).`,
      `- [Blog](${SITE_URL}/blog/): ${posts.length} long-form articles on CMMS selection, downtime, and plant reliability.`,
    ]),
    section(
      "Frequently asked questions",
      FAQS.flatMap((item) => [`**${item.q}**`, item.a, ""]),
    ),
    section(
      "Glossary",
      GLOSSARY.map((entry) => `- **${entry.term}** (${SITE_URL}/glossary/#${entry.slug}): ${entry.definition}`),
    ),
    section(
      "Articles",
      posts.map(
        (post) =>
          `- [${post.title}](${SITE_URL}/blog/${post.slug}/) — ${post.metaDescription ?? post.excerpt} (${post.category}, ${post.read}, ${post.date})`,
      ),
    ),
    section("Contact", [
      "- Email: info@lumoraventures.com",
      "- Phone: +94 71 999 8500",
      "- Address: Kurunegala Road, Kuliyapitiya 60200, Sri Lanka",
    ]),
    `---\nContent may be quoted with attribution to ${SITE_NAME} (${SITE_URL}/). Pricing figures are indicative; confirm with sales before quoting a customer.`,
  ].join("\n\n");

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
