import { ImageResponse } from "next/og";
import { ONE_LINER, SITE_NAME } from "./site-data";

// Site-wide social card. This replaces the static /og-image.png, which was
// authored at 484x516 while the metadata declared 1200x630 - every platform
// that trusts the declared size was letterboxing or rejecting the card.
export const alt = "Firmicore - mobile-first CMMS for factory maintenance";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Required with `output: "export"`. The per-post card gets this implicitly from
// generateStaticParams; a root-level image has no params, so it must say so.
export const dynamic = "force-static";

const NAVY_950 = "#070f1e";
const NAVY_700 = "#16284a";
const PULSE = "#00c2ff";
const INK = "#e6ecf5";
const INK_DIM = "#a6b3c8";

/** First sentence of the one-liner: the full definition overruns the card. */
const TAGLINE = ONE_LINER.split(" for manufacturing")[0] + " for manufacturing and process plants.";

export default function Image() {
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
            CMMS
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ fontSize: 76, fontWeight: 700, lineHeight: 1.08 }}>
            Strength at the core of every machine.
          </div>
          <div style={{ width: 140, height: 6, borderRadius: 3, background: PULSE }} />
          <div style={{ fontSize: 28, color: INK_DIM, lineHeight: 1.35 }}>{TAGLINE}</div>
        </div>

        <div style={{ display: "flex", alignItems: "center", fontSize: 24, color: INK_DIM }}>
          <div>{SITE_NAME}</div>
          <div style={{ marginLeft: "auto" }}>firmicore.com</div>
        </div>
      </div>
    ),
    size,
  );
}
