import { posts } from "../blog-posts";
import { postToMarkdown } from "../llms-markdown";
import { FAQS, GLOSSARY, ONE_LINER, QUICK_FACTS, SITE_NAME, SITE_URL } from "../site-data";

/**
 * /llms-full.txt — every page's full text in one Markdown document.
 *
 * The point is grounding: an answer engine that fetches this once has the whole
 * corpus, including the tables and FAQ answers that get lost when a renderer
 * flattens the HTML.
 */
export const dynamic = "force-static";

export function GET(): Response {
  const body = [
    `# ${SITE_NAME} — full site text`,
    `> ${ONE_LINER}`,
    `Canonical site: ${SITE_URL}/. Generated from the site's own content at build time.`,
    "# Product",
    QUICK_FACTS.map(([label, value]) => `- **${label}:** ${value}`).join("\n"),
    "# Frequently asked questions",
    FAQS.map((item) => `## ${item.q}\n\n${item.a}`).join("\n\n"),
    "# Maintenance glossary",
    GLOSSARY.map((entry) =>
      [`## ${entry.term}`, entry.definition, entry.detail, entry.readMore ? `See also: ${SITE_URL}${entry.readMore.href}` : null]
        .filter(Boolean)
        .join("\n\n"),
    ).join("\n\n"),
    "# Articles",
    posts.map(postToMarkdown).join("\n\n---\n\n"),
    `---\nContent may be quoted with attribution to ${SITE_NAME} (${SITE_URL}/).`,
  ].join("\n\n");

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
