import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPost, getRelated, posts } from "../../blog-posts";
import { ArticleThumb, CategoryBadge, ECGLine, Footer, Navbar, PostCard, SectionLabel, StatusPill } from "../../marketing-components";
import { ArticleBlock } from "./article-blocks";

type PageProps = {
  params: Promise<{ slug: string }>;
};

const SITE_URL = "https://firmicore.com";
const SITE_NAME = "Firmicore";
const LOGO_URL = `${SITE_URL}/logo.png`;

export async function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};

  // deck/excerpt run 165-250 chars and truncate in the SERP, so posts carry a
  // purpose-written metaDescription; the fallbacks only apply to new drafts.
  const description = post.metaDescription ?? post.excerpt;
  const title = post.seoTitle ?? post.title;
  const publishedTime = new Date(post.date).toISOString();
  const modifiedTime = post.updated ? new Date(post.updated).toISOString() : publishedTime;

  return {
    title,
    description,
    // Trailing slash is required: `trailingSlash: true` serves this route at
    // /blog/<slug>/ and 301s the unslashed form.
    alternates: { canonical: `/blog/${slug}/` },
    authors: [{ name: post.author }],
    openGraph: {
      title,
      description,
      url: `${SITE_URL}/blog/${slug}/`,
      siteName: SITE_NAME,
      locale: "en_US",
      type: "article",
      publishedTime,
      modifiedTime,
      authors: [post.author],
      section: post.category,
      // Image comes from the colocated opengraph-image route, which renders a
      // per-post card instead of the one shared /og-image.png.
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const sections = post.sections ?? [];
  const related = getRelated(post);
  const publishedISO = new Date(post.date).toISOString();
  const modifiedISO = post.updated ? new Date(post.updated).toISOString() : publishedISO;
  const postUrl = `${SITE_URL}/blog/${post.slug}/`;
  const initials = post.author
    .split(" ")
    .map((part) => part[0])
    .join("")
    .toUpperCase();

  const faqItems = sections.flatMap((section) =>
    section.blocks.flatMap((block) => (block.type === "faq" ? block.items : [])),
  );

  const jsonLd: Record<string, unknown>[] = [
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: post.title,
      description: post.metaDescription ?? post.excerpt,
      author: { "@type": "Person", name: post.author, jobTitle: post.role },
      publisher: {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        name: SITE_NAME,
        url: `${SITE_URL}/`,
        logo: { "@type": "ImageObject", url: LOGO_URL },
      },
      datePublished: publishedISO,
      dateModified: modifiedISO,
      mainEntityOfPage: { "@type": "WebPage", "@id": postUrl },
      url: postUrl,
      // Matches the file emitted by the colocated opengraph-image route. It is
      // extensionless, so firebase.json sets its Content-Type explicitly.
      image: {
        "@type": "ImageObject",
        url: `${postUrl}opengraph-image`,
        width: 1200,
        height: 630,
      },
      inLanguage: "en",
      articleSection: post.category,
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: SITE_NAME, item: `${SITE_URL}/` },
        { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog/` },
        { "@type": "ListItem", position: 3, name: post.title, item: postUrl },
      ],
    },
  ];

  if (faqItems.length > 0) {
    jsonLd.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqItems.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: { "@type": "Answer", text: item.a },
      })),
    });
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <Navbar />
      <main>
        <header className="relative overflow-hidden pt-28 pb-12 sm:pt-32 sm:pb-16">
          <div className="bp-grid absolute inset-0 opacity-30" />
          <div className="absolute inset-0 bg-[radial-gradient(800px_500px_at_80%_-10%,rgba(0,194,255,0.18),transparent_60%)]" />
          <div className="relative mx-auto max-w-3xl px-5 sm:px-8">
            <nav className="mb-8 flex items-center gap-2 font-mono text-[12px] text-ink-mute">
              <Link href="/" className="hover:text-pulse">Firmicore</Link>
              <span>/</span>
              <Link href="/blog/" className="hover:text-pulse">Blog</Link>
              <span>/</span>
              <span className="text-pulse">{post.category}</span>
            </nav>
            <div className="mb-5 flex items-center gap-3">
              <CategoryBadge category={post.category} />
              <span className="font-mono text-xs text-ink-mute">{post.read} · {post.date}</span>
            </div>
            <h1 className="font-sora text-[36px] font-bold leading-[1.05] sm:text-[52px]">{post.title}</h1>
            <p className="mt-5 text-[18px] leading-relaxed text-ink-dim sm:text-xl">{post.deck ?? post.excerpt}</p>
            <div className="mt-10 flex flex-wrap items-center gap-4 border-t border-white/8 pt-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-pulse to-power-400 font-sora font-bold text-navy-950">
                {initials}
              </div>
              <div>
                <div className="text-sm font-medium text-ink">{post.author}</div>
                <div className="font-mono text-xs text-ink-mute">{post.role}</div>
              </div>
              <div className="ml-auto flex gap-2">
                <StatusPill tone="mute">Save</StatusPill>
                <StatusPill tone="pulse">Share</StatusPill>
              </div>
            </div>
          </div>
        </header>

        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <div className="overflow-hidden rounded-2xl border border-white/8 bg-navy-950">
            <ArticleThumb category={post.category} />
          </div>
          {post.figure ? (
            <div className="mt-3 text-center font-mono text-xs text-ink-mute">{post.figure}</div>
          ) : null}
        </div>

        <section className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:px-8 lg:grid-cols-12">
          <aside className="hidden lg:col-span-3 lg:block">
            <div className="sticky top-24 rounded-xl border border-white/8 bg-navy-800/40 p-5">
              <div className="mb-4 font-mono text-[11px] uppercase tracking-[0.18em] text-ink-mute">On this page</div>
              {sections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="block border-l border-white/10 py-1.5 pl-3 text-sm text-ink-dim hover:border-pulse hover:text-pulse"
                >
                  {section.heading}
                </a>
              ))}
            </div>
          </aside>
          <article className="article-prose lg:col-span-9">
            {post.takeaways?.length ? (
              <div className="mb-10 rounded-2xl border border-white/10 bg-navy-800/50 p-6">
                <div className="mb-4 font-mono text-[11px] uppercase tracking-[0.18em] text-pulse">Key takeaways</div>
                <ul className="mb-0">
                  {post.takeaways.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ) : null}

            {post.intro?.map((text, index) => (
              <ArticleBlock key={text} block={{ type: "p", text }} lead={index === 0} />
            ))}

            {sections.map((section) => (
              <section key={section.id}>
                <h2 id={section.id}>{section.heading}</h2>
                {section.blocks.map((block, index) => (
                  <ArticleBlock key={index} block={block} />
                ))}
              </section>
            ))}

            <section className="relative my-12 overflow-hidden rounded-2xl border border-pulse/30 bg-gradient-to-br from-pulse/10 via-navy-800/60 to-power/10 p-8">
              <div className="absolute inset-0 opacity-35">
                <ECGLine height={150} />
              </div>
              <div className="relative">
                <SectionLabel>Stop guessing</SectionLabel>
                <h3 className="mt-3 font-sora text-3xl font-bold">Measure your real downtime cost.</h3>
                <p className="mt-2 max-w-lg text-ink-dim">Firmicore tracks reported and hidden maintenance drag from day one.</p>
                <Link href="/#cta-final" className="btn-glow mt-6 inline-block rounded-lg bg-power px-5 py-3 font-medium text-white">
                  Start Free
                </Link>
              </div>
            </section>

            <section className="my-16 rounded-2xl border border-white/8 bg-navy-800/40 p-6">
              <div className="font-sora text-lg font-semibold">About the author</div>
              <p className="mb-0 mt-2 text-sm leading-relaxed text-ink-dim">
                {post.author.split(" ")[0]} ({post.role}) works with manufacturing teams in Sri Lanka and Southeast Asia to design
                practical maintenance software for real factory constraints.
              </p>
            </section>
          </article>
        </section>

        <section className="mx-auto max-w-5xl border-t border-white/8 px-5 py-16 sm:px-8">
          <div className="mb-8 flex items-center justify-between">
            <h2 className="font-sora text-2xl font-semibold">Keep reading</h2>
            <Link href="/blog/" className="text-sm text-pulse">All essays</Link>
          </div>
          <div className="grid gap-5 sm:grid-cols-3">
            {related.map((item) => (
              <PostCard key={item.slug} post={item} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
