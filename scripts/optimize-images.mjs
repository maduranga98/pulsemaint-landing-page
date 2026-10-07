#!/usr/bin/env node
/**
 * Pre-converts source images to AVIF, WebP and PNG at the sizes the site
 * actually displays, with a content hash in every filename.
 *
 * `next/image` optimisation is unavailable under `output: "export"`, so this is
 * the replacement. Outputs land in public/img/ and are committed; the manifest
 * in app/image-manifest.json is what components import, so a changed source
 * produces new filenames and the old ones can be cached as immutable.
 *
 * Run: npm run images
 */
import { createHash } from "node:crypto";
import { mkdirSync, readFileSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import sharp from "sharp";

const OUT_DIR = "public/img";

/** name -> source file and the widths (CSS px x device pixel ratio) to emit. */
const IMAGES = {
  // Shown in a 40px square in the header and footer: 1x, 2x, 3x.
  logo: { src: "public/logo.png", widths: [40, 80, 120] },
};

const FORMATS = {
  avif: (img) => img.avif({ quality: 55, effort: 6 }),
  webp: (img) => img.webp({ quality: 82, effort: 6 }),
  png: (img) => img.png({ compressionLevel: 9, palette: true, quality: 90 }),
};

mkdirSync(OUT_DIR, { recursive: true });
const manifest = {};
const keep = new Set();

for (const [name, { src, widths }] of Object.entries(IMAGES)) {
  const source = readFileSync(src);
  // Emitted square, padded with transparency: the header renders the mark in a
  // square box with object-fit: contain, so this is pixel-identical on screen.
  const entry = { aspect: 1, files: {} };

  for (const width of widths) {
    const height = Math.round(width / entry.aspect);
    for (const [format, encode] of Object.entries(FORMATS)) {
      const buffer = await encode(sharp(source).resize(width, height, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })).toBuffer();
      const hash = createHash("sha256").update(buffer).digest("hex").slice(0, 10);
      const file = `${name}-${width}.${hash}.${format}`;
      writeFileSync(`${OUT_DIR}/${file}`, buffer);
      keep.add(file);
      (entry.files[format] ??= []).push({ width, height, path: `/img/${file}`, bytes: buffer.length });
    }
  }
  manifest[name] = entry;
}

for (const file of readdirSync(OUT_DIR)) if (!keep.has(file)) rmSync(`${OUT_DIR}/${file}`);
writeFileSync("app/image-manifest.json", `${JSON.stringify(manifest, null, 2)}\n`);
console.log(`Wrote ${keep.size} files to ${OUT_DIR} and app/image-manifest.json`);
