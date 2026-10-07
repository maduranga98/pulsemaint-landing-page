import type { Block, BlogPost, Section } from "./blog-data";
import { GLOSSARY, termPath } from "./glossary-data";

/**
 * Links the first mention of each glossary term in a blog post to its page.
 *
 * Runs at render time on the post data, before the blocks are handed to
 * RichText, so nothing in the source posts changes and a new term links itself
 * everywhere the moment its file lands.
 *
 * Rules:
 *  - Each term is linked once per post, at its first eligible mention in
 *    reading order: intro, then each section's blocks in order.
 *  - Only prose that RichText renders is touched: paragraphs, list items,
 *    callouts and step text. Headings, takeaways, tables, stats, bar charts
 *    and FAQ answers are never edited, and a mention there does not use up the
 *    term's one link.
 *  - Text already inside a `[label](/path)` link is skipped, so a hand-written
 *    link is never wrapped or doubled.
 *  - Phrases come from each term's `autoLink` list. An all-caps phrase (OEE)
 *    matches case-sensitively; any other phrase matches case-insensitively and
 *    allows a plural "s".
 *  - Where two phrases overlap ("unplanned downtime", "downtime") the earlier,
 *    then longer, match wins and the other term waits for its next mention.
 */

type Matcher = { slug: string; regex: RegExp };

function escapeRegex(value: string): string {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

const MATCHERS: Matcher[] = GLOSSARY.flatMap((entry) =>
  (entry.autoLink ?? [entry.term]).map((phrase) => {
    const acronym = phrase === phrase.toUpperCase() && /[A-Z]/.test(phrase);
    const body = escapeRegex(phrase) + (acronym ? "" : "s?");
    // Not preceded or followed by a word character, and not part of a path or anchor.
    return { slug: entry.slug, regex: new RegExp(`(?<![\\w/#-])${body}(?![\\w])`, acronym ? "g" : "gi") };
  }),
);

const EXISTING_LINK = /\[[^\]]*\]\([^)]*\)/g;

type Hit = { start: number; end: number; slug: string };

/** Links terms in one string; `done` carries the slugs already linked earlier in the post. */
function linkString(text: string, done: Set<string>): string {
  const protectedRanges = [...text.matchAll(EXISTING_LINK)].map((match) => [match.index ?? 0, (match.index ?? 0) + match[0].length]);
  const inProtected = (start: number, end: number) => protectedRanges.some(([from, to]) => start < to && end > from);

  const hits: Hit[] = [];
  for (const { slug, regex } of MATCHERS) {
    if (done.has(slug)) continue;
    regex.lastIndex = 0;
    for (const match of text.matchAll(regex)) {
      const start = match.index ?? 0;
      const end = start + match[0].length;
      if (!inProtected(start, end)) hits.push({ start, end, slug });
    }
  }
  if (hits.length === 0) return text;

  hits.sort((a, b) => a.start - b.start || b.end - b.start - (a.end - a.start));

  const chosen: Hit[] = [];
  let cursor = 0;
  for (const hit of hits) {
    if (hit.start < cursor || done.has(hit.slug)) continue;
    chosen.push(hit);
    done.add(hit.slug);
    cursor = hit.end;
  }

  let output = "";
  let last = 0;
  for (const hit of chosen) {
    output += `${text.slice(last, hit.start)}[${text.slice(hit.start, hit.end)}](${termPath(hit.slug)})`;
    last = hit.end;
  }
  return output + text.slice(last);
}

function linkBlock(block: Block, done: Set<string>): Block {
  switch (block.type) {
    case "p":
      return { ...block, text: linkString(block.text, done) };
    case "callout":
      return { ...block, text: linkString(block.text, done) };
    case "ul":
    case "ol":
      return { ...block, items: block.items.map((item) => linkString(item, done)) };
    case "steps":
      return { ...block, items: block.items.map((item) => ({ ...item, text: linkString(item.text, done) })) };
    default:
      return block;
  }
}

export type AutoLinkedPost = {
  post: BlogPost;
  /** Slugs linked in the body, in the order they first appear. */
  linked: string[];
};

export function autoLinkPost(post: BlogPost): AutoLinkedPost {
  const done = new Set<string>();
  const intro = post.intro?.map((text) => linkString(text, done));
  const sections: Section[] | undefined = post.sections?.map((section) => ({
    ...section,
    blocks: section.blocks.map((block) => linkBlock(block, done)),
  }));
  return { post: { ...post, intro, sections }, linked: [...done] };
}
