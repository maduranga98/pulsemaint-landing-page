import { ImageResponse } from "next/og";
import { getPost, posts } from "../../blog-posts";

// `alt` must be a static export: generateImageMetadata would introduce a nested
// [__metadata_id__] route, which output: "export" cannot prerender.
export const alt = "Firmicore - mobile-first CMMS for factory maintenance";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * Static export needs the same param set as the page, so each post gets its own
 * card at build time instead of every page sharing /og-image.png.
 */
export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

const NAVY_950 = "#070f1e";
const NAVY_700 = "#16284a";
const PULSE = "#00c2ff";
const INK = "#e6ecf5";
const INK_DIM = "#a6b3c8";

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  const title = post?.title ?? "Firmicore";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: NAVY_950,
          backgroundImage: `radial-gradient(900px 500px at 88% -12%, rgba(0,194,255,0.22), transparent 62%)`,
          color: INK,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div style={{ width: 14, height: 14, borderRadius: 7, background: PULSE }} />
          <div style={{ fontSize: 26, letterSpacing: 6, color: INK_DIM }}>FIRMICORE</div>
          {post ? (
            <div
              style={{
                marginLeft: "auto",
                fontSize: 22,
                color: PULSE,
                border: `1px solid ${NAVY_700}`,
                borderRadius: 999,
                padding: "8px 20px",
              }}
            >
              {post.category}
            </div>
          ) : null}
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ fontSize: title.length > 60 ? 60 : 72, fontWeight: 700, lineHeight: 1.1 }}>
            {title}
          </div>
          <div style={{ width: 140, height: 6, borderRadius: 3, background: PULSE }} />
        </div>

        <div style={{ display: "flex", alignItems: "center", fontSize: 24, color: INK_DIM }}>
          <div>{post ? `${post.author} · ${post.read} read` : "firmicore.com"}</div>
          <div style={{ marginLeft: "auto" }}>firmicore.com</div>
        </div>
      </div>
    ),
    size,
  );
}
