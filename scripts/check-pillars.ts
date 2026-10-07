/**
 * Content and SEO checks for the three pillar pages. No build needed.
 *
 *   npm run check:pillars
 *
 * Enforces the rules that are mechanical enough to check: lengths, word
 * counts, banned wording, link targets, and that prices and tier names are
 * never typed into the copy. Judgment calls (is the claim true, is the advice
 * sound) stay with the reviewer.
 */
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { posts } from "../app/blog-posts";
import { getTerm } from "../app/glossary-data";
import { PILLAR_PAGES } from "../app/pillar-pages";
import type { PillarBlock, PillarPageData } from "../app/pillar-types";
import { PRICING_TIERS } from "../app/site-data";

const errors: string[] = [];
const fail = (page: string, message: string) => errors.push(`${page}: ${message}`);
const words = (text: string) => text.split(/\s+/).filter(Boolean).length;

const BANNED: [RegExp, string][] = [
  [/[—–]/, "em or en dash"],
  [/\s-\s/, "spaced hyphen used as a dash"],
  [/whatsapp/i, "WhatsApp"],
  [/sri lanka|asean|southeast asia|south asia/i, "regional framing"],
  [/industry average|industry benchmark|world.class|best.in.class|award/i, "benchmark or award claim"],
  [/\b(revolutionary|cutting.edge|game.chang|seamless|unlock|supercharge|leverage)\b/i, "hype word"],
];
const UK_SPELLING = /\b(organisation|authorisation|programme|optimis|analyse\b|analysed|prioritis|standardis|colour|behaviour|centre|licence)/i;

function blockText(block: PillarBlock): string[] {
  switch (block.type) {
    case "p":
      return [block.text];
    case "h3":
      return [block.text];
    case "ul":
    case "ol":
      return block.items;
    case "callout":
      return [block.label ?? "", block.text];
    case "table":
      return [block.caption ?? "", ...block.headers, ...block.rows.flat()];
    case "steps":
      return block.items.flatMap((item) => [item.title, item.text]);
    case "stats":
      return block.items.flat();
    case "bars":
      return [block.caption ?? "", ...block.items.map((item) => item.label)];
    case "faq":
      return block.items.flatMap((item) => [item.q, item.a]);
    case "diagram":
      return [block.caption];
  }
}

/** Strips `[label](/path)` down to its label so link targets do not count as words. */
const plain = (text: string) => text.replace(/\[([^\]]+)\]\(\/[^)\s]*\)/g, "$1");

function sectionText(page: PillarPageData, index: number): string[] {
  const section = page.sections[index];
  return [section.heading, ...(index === 0 ? [page.answer] : []), ...section.blocks.flatMap(blockText)];
}

function bodyText(page: PillarPageData): string[] {
  return [
    page.h1,
    page.h1Accent,
    page.lede,
    ...page.sections.flatMap((_, index) => sectionText(page, index)),
    "Frequently asked questions",
    ...page.faq.flatMap((item) => [item.q, item.a]),
  ];
}

const KNOWN_PATHS = new Set(["/pricing/", "/features/", "/glossary/", "/blog/", ...PILLAR_PAGES.map((item) => item.path)]);
const FEATURE_ANCHORS = new Set(["machine-registry", "breakdown-management", "work-orders", "preventive-maintenance", "inventory-and-parts", "contractors", "shift-handovers", "training-and-certification", "guided-triage", "safety-workspace", "reports-and-analytics", "moe-dashboard"]);

function checkLink(slug: string, href: string) {
  const [path, anchor] = href.split("#");
  const blog = path.match(/^\/blog\/([^/]+)\/$/);
  const glossary = path.match(/^\/glossary\/([^/]+)\/$/);
  if (blog) {
    if (!posts.some((post) => post.slug === blog[1])) fail(slug, `link to unknown post ${href}`);
  } else if (glossary) {
    if (!getTerm(glossary[1])) fail(slug, `link to unknown glossary term ${href}`);
  } else if (!KNOWN_PATHS.has(path)) {
    fail(slug, `link to unknown path ${href}`);
  }
  if (anchor) {
    const target = PILLAR_PAGES.find((item) => item.path === path);
    if (target && !target.sections.some((section) => section.id === anchor) && anchor !== "faq") fail(slug, `unknown pillar anchor ${href}`);
    if (path === "/features/" && !FEATURE_ANCHORS.has(anchor)) fail(slug, `unknown features anchor ${href}`);
  }
}

const ids = new Set<string>();
for (const page of PILLAR_PAGES) {
  const slug = page.slug;
  if (ids.has(slug)) fail(slug, "duplicate slug");
  ids.add(slug);
  if (page.path !== `/${slug}/`) fail(slug, `path ${page.path} does not match slug`);

  if (page.title.length > 60) fail(slug, `title is ${page.title.length} characters`);
  if (page.description.length > 155) fail(slug, `description is ${page.description.length} characters`);

  const answerWords = words(plain(page.answer));
  if (answerWords < 40 || answerWords > 60) fail(slug, `answer is ${answerWords} words (want 40 to 60)`);

  const total = bodyText(page).reduce((sum, text) => sum + words(plain(text)), 0);
  if (total < 1800 || total > 2500) fail(slug, `${total} words (want 1,800 to 2,500)`);

  const h2Count = page.sections.length + 1;
  if (h2Count < 6 || h2Count > 8) fail(slug, `${h2Count} H2 sections including the FAQ (want 6 to 8)`);

  const firmicoreIndex = page.sections.findIndex((section) => section.id === "how-firmicore-handles-this");
  if (firmicoreIndex === -1) fail(slug, 'missing section "how-firmicore-handles-this"');
  else {
    const count = sectionText(page, firmicoreIndex).slice(1).reduce((sum, text) => sum + words(plain(text)), 0);
    if (count < 150 || count > 250) fail(slug, `"How Firmicore handles this" is ${count} words (want 150 to 250)`);
  }

  if (page.faq.length < 5 || page.faq.length > 6) fail(slug, `${page.faq.length} FAQ items (want 5 to 6)`);
  if (!page.sections.some((section) => section.blocks.some((block) => block.type === "table"))) fail(slug, "no comparison table");
  if (page.sections.flatMap((section) => section.blocks).filter((block) => block.type === "table").length !== 1) fail(slug, "want exactly one table");
  if (!/^\d{4}-\d{2}-\d{2}$/.test(page.updated) || !/^\d{4}-\d{2}-\d{2}$/.test(page.published)) fail(slug, "dates must be YYYY-MM-DD");

  // Banned wording and spelling, across the copy and the metadata.
  const everything = [...bodyText(page), page.title, page.description, page.ctaHeading, page.ctaBody, ...page.keepReading.map((link) => link.label)];
  for (const text of everything) {
    for (const [pattern, label] of BANNED) if (pattern.test(text)) fail(slug, `${label} in: "${text.slice(0, 70)}..."`);
    if (UK_SPELLING.test(text)) fail(slug, `UK spelling in: "${text.slice(0, 70)}..."`);
  }

  // "computerised" appears once in the body and once in one FAQ answer, on /cmms-software/ only.
  const joined = bodyText(page).join("\n");
  const uk = (joined.match(/computerised/gi) ?? []).length;
  if (slug === "cmms-software") {
    const inFaq = page.faq.filter((item) => /computerised/i.test(item.a)).length;
    const inBody = page.sections.flatMap((_, index) => sectionText(page, index)).filter((text) => /computerised/i.test(text)).length;
    if (inFaq !== 1 || inBody !== 1) fail(slug, `"computerised" must appear in exactly one body paragraph and one FAQ answer (body ${inBody}, faq ${inFaq})`);
  } else if (uk > 0) fail(slug, '"computerised" belongs on /cmms-software/ only');

  // Prices, limits and tier names come from PRICING_TIERS, never from the copy.
  const source = readFileSync(join(process.cwd(), "app", "pillar-pages", `${slug}.ts`), "utf8");
  if (/\$\s?\d/.test(source)) fail(slug, "hardcoded price in source");
  for (const tier of PRICING_TIERS.filter((item) => item.name !== "Enterprise")) {
    // "Enterprise" is also a generic word (an enterprise plan, a large enterprise), so only the named tiers are checked.
    if (new RegExp(`\\b${tier.name}\\b`).test(source.replace(/\$\{[^}]*\}/g, ""))) fail(slug, `tier name "${tier.name}" typed in source`);
  }
  if (/\b\d[\d,]*\s+(machines|users|items)\b/i.test(source)) fail(slug, "hardcoded machine or user limit in source");
  if (slug !== "cmms-software" && page.includeSoftwareSchema) fail(slug, "SoftwareApplication is /cmms-software/ only");

  // Links: every inline target resolves, and the required neighbours are present.
  const links = [...everything.join("\n").matchAll(/\]\((\/[^)\s]*)\)/g)].map((match) => match[1]);
  for (const href of [...links, ...page.keepReading.map((link) => link.href)]) checkLink(slug, href);
  const targets = new Set([...links, ...page.keepReading.map((link) => link.href)].map((href) => href.split("#")[0]));
  for (const other of PILLAR_PAGES.filter((item) => item.slug !== slug)) if (!targets.has(other.path)) fail(slug, `does not link to ${other.path}`);
  for (const required of ["/pricing/", "/features/"]) if (!targets.has(required)) fail(slug, `does not link to ${required}`);
  const blogLinks = [...targets].filter((target) => target.startsWith("/blog/") && target !== "/blog/");
  if (blogLinks.length < 3) fail(slug, `${blogLinks.length} distinct blog links (want at least 3)`);
  const glossaryLinks = [...targets].filter((target) => target.startsWith("/glossary/") && target !== "/glossary/");
  if (glossaryLinks.length < 5) fail(slug, `${glossaryLinks.length} distinct glossary links (want at least 5)`);

  console.log(`${slug.padEnd(34)} ${String(total).padStart(5)} words, answer ${answerWords}, ${h2Count} H2, ${page.faq.length} FAQ, ${blogLinks.length} posts, ${glossaryLinks.length} terms`);
}

if (errors.length) {
  console.error(`\nPillar check failed (${errors.length}):\n`);
  for (const message of errors) console.error(`  ${message}`);
  process.exit(1);
}
console.log("\nPillars OK.");
