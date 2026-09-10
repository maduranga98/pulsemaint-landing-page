import type { MetadataRoute } from "next";
import { SITE_URL } from "./site-data";

export const dynamic = "force-static";

/**
 * Assistant and answer-engine crawlers, named explicitly.
 *
 * `User-agent: *` already permits all of these, but several of these agents are
 * disallowed by default in the boilerplate robots.txt shipped by hosts and CMS
 * templates, and some operators only treat a site as opted in when their agent
 * is named. Naming them is a positive signal and costs nothing.
 *
 * Split by purpose because they are not interchangeable:
 *  - *_TRAINING agents crawl for model training corpora.
 *  - *_RETRIEVAL agents fetch a page at answer time to cite it, which is the
 *    traffic that AEO/GEO is actually trying to earn.
 */
const TRAINING_AGENTS = [
  "GPTBot",
  "ClaudeBot",
  "Google-Extended",
  "Applebot-Extended",
  "meta-externalagent",
  "Amazonbot",
  "Bytespider",
  "cohere-ai",
  "CCBot",
  "Diffbot",
  "omgili",
];

const RETRIEVAL_AGENTS = [
  "OAI-SearchBot",
  "ChatGPT-User",
  "Claude-User",
  "Claude-SearchBot",
  "PerplexityBot",
  "Perplexity-User",
  "Google-CloudVertexBot",
  "DuckAssistBot",
  "YouBot",
  "MistralAI-User",
  "Meta-ExternalFetcher",
  "Applebot",
];

const SEARCH_AGENTS = ["Googlebot", "Googlebot-Image", "Bingbot", "DuckDuckBot", "Slurp", "Baiduspider", "YandexBot"];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      { userAgent: SEARCH_AGENTS, allow: "/" },
      { userAgent: RETRIEVAL_AGENTS, allow: "/" },
      { userAgent: TRAINING_AGENTS, allow: "/" },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    // Hostname only: the directive takes a host, not a URL.
    host: new URL(SITE_URL).host,
  };
}
