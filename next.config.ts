import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  experimental: {
    // Tailwind's CSS is small; inlining it removes the render-blocking
    // stylesheet request that sat on the LCP path for first-time visitors.
    inlineCss: true,
  },
};

export default nextConfig;
