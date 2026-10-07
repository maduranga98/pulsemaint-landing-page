import Link from "next/link";

const LINK = /\[([^\]]+)\]\((\/[^)\s]*)\)/g;

/**
 * Renders `[anchor text](/internal/path/)` inside post copy as a real link.
 *
 * Posts are plain data, so contextual internal links are written inline in the
 * sentence they belong to rather than bolted on in a separate "see also" row.
 * Internal paths only: anything not starting with "/" is left as text.
 */
export function RichText({ text }: { text: string }) {
  const nodes: React.ReactNode[] = [];
  let last = 0;
  for (const match of text.matchAll(LINK)) {
    const index = match.index ?? 0;
    if (index > last) nodes.push(text.slice(last, index));
    nodes.push(
      <Link key={index} href={match[2]} className="text-pulse underline-offset-2 hover:underline">
        {match[1]}
      </Link>,
    );
    last = index + match[0].length;
  }
  if (last < text.length) nodes.push(text.slice(last));
  return <>{nodes}</>;
}
