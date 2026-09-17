import { ImageResponse } from "next/og";
import { getPost, posts } from "../../blog-posts";
import { OG_CONTENT_TYPE, OG_SIZE, OG_TAGLINE, OgCard } from "../card";
import { SITE_NAME } from "../../site-data";

/** Site-wide card, used by the homepage, the blog index, and the glossary. */
const HOME_CARD = "home";

/**
 * One static PNG per card, emitted at /og/<name>.png.
 *
 * The `.png` suffix lives in the param rather than in the folder name because a
 * dynamic segment cannot carry an extension. It matters: Hosting appends a
 * trailing slash to every extensionless path, which is what broke the previous
 * extensionless `opengraph-image` routes.
 */
export function generateStaticParams() {
  return [{ card: `${HOME_CARD}.png` }, ...posts.map((post) => ({ card: `${post.slug}.png` }))];
}

export const dynamic = "force-static";

export async function GET(_request: Request, { params }: { params: Promise<{ card: string }> }) {
  const { card } = await params;
  const slug = card.replace(/\.png$/, "");

  if (slug === HOME_CARD) {
    return new ImageResponse(
      (
        <OgCard
          title="Strength at the core of every machine."
          badge="CMMS"
          subtitle={OG_TAGLINE}
          footnote={SITE_NAME}
        />
      ),
      { ...OG_SIZE, headers: { "Content-Type": OG_CONTENT_TYPE } },
    );
  }

  const post = getPost(slug);
  if (!post) {
    return new Response("Not found", { status: 404 });
  }

  return new ImageResponse(
    <OgCard title={post.title} badge={post.category} footnote={`${post.author} · ${post.read} read`} />,
    { ...OG_SIZE, headers: { "Content-Type": OG_CONTENT_TYPE } },
  );
}
