import type { Block, BlogPost } from "./blog-data";
import { SITE_URL } from "./site-data";

/**
 * Renders article blocks as plain Markdown for /llms-full.txt.
 *
 * Retrieval systems chunk on headings and lose structure buried in JSX, so the
 * tables, steps, and FAQs that carry the actual answers are re-emitted here in
 * a form that survives chunking.
 */
export function blockToMarkdown(block: Block): string {
  switch (block.type) {
    case "p":
      return block.text;
    case "ul":
      return block.items.map((item) => `- ${item}`).join("\n");
    case "ol":
      return block.items.map((item, index) => `${index + 1}. ${item}`).join("\n");
    case "callout":
      return `> **${block.label ?? "Note"}:** ${block.text}`;
    case "stats":
      return block.items.map(([value, label]) => `- **${value}** — ${label}`).join("\n");
    case "table": {
      const head = `| ${block.headers.join(" | ")} |`;
      const rule = `| ${block.headers.map(() => "---").join(" | ")} |`;
      const body = block.rows.map((row) => `| ${row.join(" | ")} |`).join("\n");
      return [block.caption ? `_${block.caption}_` : "", head, rule, body].filter(Boolean).join("\n");
    }
    case "steps":
      return block.items.map((item, index) => `${index + 1}. **${item.title}** — ${item.text}`).join("\n");
    case "bars": {
      const rows = block.items.map((item) => `- ${item.label}: ${item.display}`).join("\n");
      return [block.caption ? `_${block.caption}_` : "", rows, block.note ? `_${block.note}_` : ""].filter(Boolean).join("\n");
    }
    case "faq":
      return block.items.map((item) => `**Q: ${item.q}**\n\nA: ${item.a}`).join("\n\n");
  }
}

export function postToMarkdown(post: BlogPost): string {
  const parts: string[] = [
    `## ${post.title}`,
    `Source: ${SITE_URL}/blog/${post.slug}/`,
    `Published: ${post.date}${post.updated ? ` · Updated: ${post.updated}` : ""} · Author: ${post.author}, ${post.role} · Category: ${post.category}`,
    post.deck ?? post.excerpt,
  ];

  if (post.takeaways?.length) {
    parts.push(`### Key takeaways\n\n${post.takeaways.map((item) => `- ${item}`).join("\n")}`);
  }

  post.intro?.forEach((text) => parts.push(text));

  post.sections?.forEach((section) => {
    parts.push(`### ${section.heading}`);
    section.blocks.forEach((block) => parts.push(blockToMarkdown(block)));
  });

  return parts.join("\n\n");
}

/** Rough word count of the rendered article, used for schema `wordCount`. */
export function wordCount(post: BlogPost): number {
  return postToMarkdown(post).split(/\s+/).filter(Boolean).length;
}
