import manifest from "./image-manifest.json";

type ImageName = keyof typeof manifest;

/**
 * <picture> for the pre-converted assets from scripts/optimize-images.mjs.
 *
 * Static export has no image optimiser, so AVIF/WebP/PNG variants are made at
 * build-prep time and listed in image-manifest.json. Explicit width and height
 * reserve the box, so nothing shifts when the file arrives. Pass `priority`
 * only for the LCP image: it sets fetchPriority="high" and drops lazy loading.
 */
export function Picture({
  name,
  alt,
  width,
  height,
  sizes,
  className,
  priority = false,
  eager = priority,
}: {
  name: ImageName;
  alt: string;
  width: number;
  height: number;
  sizes: string;
  className?: string;
  priority?: boolean;
  /** Above the fold but not the LCP: loads eagerly at normal priority. */
  eager?: boolean;
}) {
  const { files } = manifest[name];
  const srcSet = (format: "avif" | "webp" | "png") => files[format].map((file) => `${file.path} ${file.width}w`).join(", ");
  const fallback = files.png[0];

  return (
    <picture>
      <source type="image/avif" srcSet={srcSet("avif")} sizes={sizes} />
      <source type="image/webp" srcSet={srcSet("webp")} sizes={sizes} />
      <img
        src={fallback.path}
        srcSet={srcSet("png")}
        sizes={sizes}
        alt={alt}
        width={width}
        height={height}
        decoding="async"
        loading={eager ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : "auto"}
        className={className}
      />
    </picture>
  );
}
