import { resolveReading } from "./glossary-links";
import { termHeading, termUrl } from "./glossary-data";
import type { GlossaryTerm } from "./glossary-types";
import { SITE_URL } from "./site-data";

/**
 * One glossary term as Markdown for /llms-full.txt.
 *
 * Mirrors what the term page renders, so a model that fetches the single file
 * gets the same definition, formula, example and FAQ as a visitor does.
 */
export function glossaryTermToMarkdown(entry: GlossaryTerm): string {
  const parts: string[] = [`## ${termHeading(entry)}`, `Source: ${termUrl(entry.slug)} · Updated: ${entry.updated}`, entry.shortDefinition];

  entry.body.forEach((section, index) => {
    parts.push(`### ${section.heading}`, ...section.paragraphs);
    if (section.bullets?.length) parts.push(section.bullets.map((item) => `- ${item}`).join("\n"));

    if (index === 0 && entry.formula) {
      const { formula } = entry;
      parts.push(`**${formula.label ?? "Formula"}:** ${formula.expression}`);
      if (formula.parts?.length) parts.push(formula.parts.map((part) => `- **${part.name}:** ${part.meaning}`).join("\n"));
      if (formula.note) parts.push(formula.note);
    }
    if (index === 0 && entry.example) {
      parts.push(`**Example (hypothetical numbers): ${entry.example.title}**`, entry.example.lines.map((line) => `- ${line}`).join("\n"), entry.example.result);
    }
  });

  parts.push(`### How Firmicore relates`, entry.firmicore);

  if (entry.faq?.length) {
    parts.push(`### FAQ`, entry.faq.map((item) => `**Q: ${item.q}**\n\nA: ${item.a}`).join("\n\n"));
  }

  const reading = entry.relatedPosts.map(resolveReading).filter((link): link is NonNullable<typeof link> => link !== null);
  if (reading.length) parts.push(`### Related reading`, reading.map((link) => `- [${link.label}](${SITE_URL}${link.href})`).join("\n"));

  // Inline links are root-relative in the data; an LLM has no base URL to resolve them against.
  return parts.join("\n\n").replace(/\]\((\/[^)\s]*)\)/g, `](${SITE_URL}$1)`);
}
