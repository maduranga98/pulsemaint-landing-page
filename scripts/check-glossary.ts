/**
 * Content and SEO checks for the glossary data. No build needed.
 *
 *   npm run check:glossary
 *
 * Enforces the rules that are mechanical enough to check: lengths, word counts,
 * link targets, banned wording. Judgment calls (is the claim true, is the
 * example sensible) stay with the reviewer.
 */
import { posts } from "../app/blog-posts";
import { GLOSSARY, getTerm, termTitle } from "../app/glossary-data";
import type { GlossaryTerm } from "../app/glossary-types";

const PILLARS = new Set(["/cmms-software/", "/maintenance-management-software/", "/work-order-software/"]);

/** Slugs that existed when the glossary was a single page. All must keep their own page. */
const ORIGINAL_SLUGS = [
  "cmms", "eam", "work-order", "preventive-maintenance", "reactive-maintenance", "condition-based-maintenance", "mttr", "mtbf",
  "mtta", "unplanned-downtime", "oee", "moe", "machine-health-score", "pm-compliance", "maintenance-backlog", "guided-triage",
  "shift-handover", "permit-to-work", "near-miss", "lockout-tagout", "root-cause", "asset-registry", "mro-inventory",
  "qr-triggered-reporting", "multi-tenancy",
];

const REQUESTED_SLUGS = [
  "oee", "mtbf", "mttr", "eam", "cmms", "proactive-maintenance", "condition-based-maintenance", "scheduled-maintenance",
  "planned-maintenance", "machine-maintenance", "equipment-maintenance", "idle-time", "mro", "asset-lifecycle-management", "downtime",
];

const BANNED: [RegExp, string][] = [
  [/[\u2014\u2013]/, "em or en dash"],
  [/whatsapp/i, "WhatsApp"],
  [/sri lanka|asean|southeast asia|south asia/i, "regional framing"],
  [/industry average|world.class|industry benchmark/i, "benchmark claim"],
  [/\b(computerised|organisation|authorisation|programme|optimis|analyse\b|analysed|analysing|prioritis|standardis|colour|behaviour|centre|licence)/i, "UK spelling in body copy"],
];

const errors: string[] = [];
const fail = (term: GlossaryTerm | string, message: string) => errors.push(`${typeof term === "string" ? term : term.slug}: ${message}`);

const words = (text: string) => text.split(/\s+/).filter(Boolean).length;

/** Text rendered in the page body, which is what the 300 to 700 word budget applies to. */
function pageText(entry: GlossaryTerm): string[] {
  return [
    entry.shortDefinition,
    ...entry.body.flatMap((section) => [section.heading, ...section.paragraphs, ...(section.bullets ?? [])]),
    entry.formula?.expression ?? "",
    ...(entry.formula?.parts ?? []).flatMap((part) => [part.name, part.meaning]),
    entry.formula?.note ?? "",
    entry.example?.title ?? "",
    ...(entry.example?.lines ?? []),
    entry.example?.result ?? "",
    entry.firmicore,
    ...(entry.faq ?? []).flatMap((item) => [item.q, item.a]),
  ];
}

function allText(entry: GlossaryTerm): string[] {
  return [entry.term, entry.fullName ?? "", entry.metaDescription, termTitle(entry), ...pageText(entry)];
}

const slugs = new Set<string>();
for (const entry of GLOSSARY) {
  if (slugs.has(entry.slug)) fail(entry, "duplicate slug");
  slugs.add(entry.slug);
  if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(entry.slug)) fail(entry, "slug is not kebab-case");

  const definitionWords = words(entry.shortDefinition);
  if (definitionWords >= 30) fail(entry, `shortDefinition is ${definitionWords} words (limit 29)`);

  const title = termTitle(entry);
  if (title.length > 60) fail(entry, `title is ${title.length} characters: "${title}"`);
  if (entry.metaDescription.length > 155) fail(entry, `metaDescription is ${entry.metaDescription.length} characters`);

  const total = pageText(entry).reduce((sum, text) => sum + words(text), 0);
  if (total < 300 || total > 700) fail(entry, `${total} words (want 300 to 700)`);

  if (entry.body[0] === undefined) fail(entry, "no body");
  if (entry.body[1]?.heading !== "Why it matters in maintenance") fail(entry, 'second section must be "Why it matters in maintenance"');
  if (entry.body.length < 3) fail(entry, "fewer than 3 body sections");

  if (entry.relatedTerms.length < 3 || entry.relatedTerms.length > 5) fail(entry, `${entry.relatedTerms.length} related terms (want 3 to 5)`);
  for (const related of entry.relatedTerms) {
    if (related === entry.slug) fail(entry, "relates to itself");
    if (!getTerm(related)) fail(entry, `unknown related term "${related}"`);
  }
  const blogReading = entry.relatedPosts.filter((item) => !item.startsWith("/"));
  if (blogReading.length < 2) fail(entry, "needs at least 2 blog posts in relatedPosts");
  for (const item of entry.relatedPosts) {
    if (item.startsWith("/") ? !PILLARS.has(item) : !posts.some((post) => post.slug === item)) fail(entry, `unknown relatedPosts entry "${item}"`);
  }

  if (entry.faq && (entry.faq.length < 2 || entry.faq.length > 3)) fail(entry, `${entry.faq.length} FAQ items (want 2 to 3)`);
  if (!/^\d{4}-\d{2}-\d{2}$/.test(entry.updated)) fail(entry, "updated must be YYYY-MM-DD");
  if (entry.formula && !entry.example) fail(entry, "formula without a worked example");

  const sentences = entry.firmicore.split(/(?<=[.!?])\s+/).filter(Boolean).length;
  if (sentences < 2 || sentences > 3) fail(entry, `"How Firmicore relates" has ${sentences} sentences (want 2 to 3)`);

  for (const text of allText(entry)) {
    for (const [pattern, label] of BANNED) if (pattern.test(text)) fail(entry, `${label} in: "${text.slice(0, 70)}..."`);
    for (const match of text.matchAll(/\]\((\/[^)\s]*)\)/g)) {
      const href = match[1];
      const glossary = href.match(/^\/glossary\/([^/]+)\/$/);
      const blog = href.match(/^\/blog\/([^/]+)\/$/);
      if (glossary ? !getTerm(glossary[1]) : blog ? !posts.some((post) => post.slug === blog[1]) : true) fail(entry, `inline link to unknown path ${href}`);
    }
  }
}

for (const slug of ORIGINAL_SLUGS) if (!slugs.has(slug)) fail(slug, "original term has no page");
for (const slug of REQUESTED_SLUGS) if (!slugs.has(slug)) fail(slug, "requested term is missing");
if (slugs.has("overall-equipment-effectiveness")) fail("overall-equipment-effectiveness", "must not be a separate page");
const oee = getTerm("oee");
if (oee && !(oee.shortDefinition.includes("overall equipment effectiveness") && oee.fullName === "Overall Equipment Effectiveness")) {
  fail("oee", "must name the long form in its opening sentence and fullName");
}

if (errors.length) {
  console.error(`Glossary check failed (${errors.length}):\n`);
  for (const message of errors) console.error(`  ${message}`);
  process.exit(1);
}
console.log(`Glossary OK: ${GLOSSARY.length} terms, ${ORIGINAL_SLUGS.length} original and ${REQUESTED_SLUGS.length} requested slugs present.`);
