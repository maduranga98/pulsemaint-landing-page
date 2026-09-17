import { ONE_LINER } from "../site-data";

/**
 * Shared 1200x630 social card, rendered by the /og/<name>.png route.
 *
 * Deliberately not an `opengraph-image.tsx` file convention: that convention
 * emits an extensionless URL (/blog/<slug>/opengraph-image), and Firebase
 * Hosting runs with `trailingSlash: true`, which appends a trailing slash to
 * any path that has no file extension. The card URL therefore redirected to a
 * path with no file behind it. A `.png` route is exempt from that rewrite by
 * definition, and the extension also gives Hosting the right Content-Type
 * without a hand-written header rule.
 */
export const OG_SIZE = { width: 1200, height: 630 };
export const OG_ALT = "Firmicore - mobile-first CMMS for factory maintenance";
export const OG_CONTENT_TYPE = "image/png";

const NAVY_950 = "#070f1e";
const NAVY_700 = "#16284a";
const PULSE = "#00c2ff";
const INK = "#e6ecf5";
const INK_DIM = "#a6b3c8";

/** First sentence of the one-liner: the full definition overruns the card. */
export const OG_TAGLINE = ONE_LINER.split(" for manufacturing")[0] + " for manufacturing and process plants.";

type CardProps = {
  title: string;
  /** Pill in the top-right corner, e.g. a post category. */
  badge: string;
  /** Sub-line under the rule. Omitted on post cards, where the title is long. */
  subtitle?: string;
  /** Bottom-left line, e.g. "Author · 7 min read". */
  footnote: string;
};

/**
 * Headline size is stepped by length so a long post title still fits the safe
 * area at three lines instead of overflowing the card.
 */
function headlineSize(title: string): number {
  if (title.length > 84) return 50;
  if (title.length > 60) return 60;
  return 72;
}

export function OgCard({ title, badge, subtitle, footnote }: CardProps) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: 72,
        background: NAVY_950,
        backgroundImage: "radial-gradient(900px 500px at 88% -12%, rgba(0,194,255,0.22), transparent 62%)",
        color: INK,
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
        <div style={{ width: 14, height: 14, borderRadius: 7, background: PULSE }} />
        <div style={{ fontSize: 26, letterSpacing: 6, color: INK_DIM }}>FIRMICORE</div>
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
          {badge}
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
        <div style={{ fontSize: headlineSize(title), fontWeight: 700, lineHeight: 1.1 }}>{title}</div>
        <div style={{ width: 140, height: 6, borderRadius: 3, background: PULSE }} />
        {subtitle ? <div style={{ fontSize: 28, color: INK_DIM, lineHeight: 1.35 }}>{subtitle}</div> : null}
      </div>

      <div style={{ display: "flex", alignItems: "center", fontSize: 24, color: INK_DIM }}>
        <div>{footnote}</div>
        <div style={{ marginLeft: "auto" }}>firmicore.com</div>
      </div>
    </div>
  );
}

