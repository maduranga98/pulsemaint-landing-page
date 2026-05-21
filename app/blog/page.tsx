import type { Metadata } from "next";
import Link from "next/link";
import { posts } from "../blog-data";
import { ArticleThumb, CategoryBadge, ECGLine, Footer, Navbar, PostCard, SectionLabel } from "../marketing-components";

export const metadata: Metadata = {
  title: "Blog",
  description: "PulseMaint field notes on factory maintenance, breakdown operations, product design, and plant reliability.",
};

export default function BlogPage() {
  const featured = posts[0];
  const allPosts = [...posts, ...posts.map((post, index) => ({ ...post, slug: `${post.slug}-${index + 2}`, title: `${post.title}: field note ${index + 2}` }))];

  return (
    <>
      <Navbar />
      <main>
        <section className="relative overflow-hidden pt-28 pb-12 sm:pt-32 sm:pb-16">
          <div className="bp-grid absolute inset-0 opacity-40" />
          <div className="absolute inset-0 bg-[radial-gradient(800px_500px_at_85%_-10%,rgba(0,194,255,0.2),transparent_60%)]" />
          <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
            <div className="max-w-3xl">
              <SectionLabel>The PulseMaint Journal</SectionLabel>
              <h1 className="mt-5 font-sora text-[44px] font-bold leading-[1.04] sm:text-[60px]">
                Insights from the <span className="text-pulse">factory floor.</span>
              </h1>
              <p className="mt-5 max-w-xl text-[17px] leading-relaxed text-ink-dim">
                Field notes on maintenance, manufacturing, and the messy reality of running a plant.
              </p>
            </div>
            <div className="mt-12 flex flex-wrap gap-2">
              {["All posts", "Operations", "Product", "Case study", "Engineering", "Industry"].map((category, index) => (
                <button
                  key={category}
                  className={`rounded-full px-4 py-2 text-[13px] font-medium ring-1 ${
                    index === 0 ? "bg-pulse/15 text-pulse ring-pulse/40" : "bg-navy-800/60 text-ink-dim ring-white/8"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 pb-16 sm:px-8">
          <Link href={`/blog/${featured.slug}`} className="group block overflow-hidden rounded-2xl border border-white/8 bg-navy-800/40 lift hover:border-pulse/40">
            <div className="grid lg:grid-cols-12">
              <div className="relative aspect-[16/10] bg-navy-950 lg:col-span-7 lg:aspect-auto">
                <ArticleThumb category={featured.category} />
                <div className="absolute left-4 top-4">
                  <CategoryBadge category="Featured" />
                </div>
              </div>
              <div className="flex flex-col p-6 sm:p-8 lg:col-span-5">
                <div className="mb-4 flex items-center gap-3">
                  <CategoryBadge category={featured.category} />
                  <span className="font-mono text-xs text-ink-mute">{featured.read} · {featured.date}</span>
                </div>
                <h2 className="font-sora text-[26px] font-semibold leading-[1.15] text-ink transition group-hover:text-pulse sm:text-[32px]">
                  {featured.title}
                </h2>
                <p className="mt-4 text-[15px] leading-relaxed text-ink-dim">{featured.excerpt}</p>
                <div className="mt-auto pt-6 text-sm font-medium text-pulse">Read sample article</div>
              </div>
            </div>
          </Link>
        </section>

        <section className="mx-auto max-w-7xl px-5 pb-20 sm:px-8">
          <div className="mb-8 flex items-end justify-between gap-6">
            <div>
              <SectionLabel>Latest essays</SectionLabel>
              <h2 className="mt-3 font-sora text-3xl font-bold">Structure for future posts</h2>
            </div>
            <span className="hidden font-mono text-xs text-ink-mute sm:inline">Updated weekly</span>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {allPosts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        </section>

        <section className="relative overflow-hidden py-20">
          <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 opacity-45">
            <ECGLine height={120} />
          </div>
          <div className="relative mx-auto max-w-3xl px-5 text-center sm:px-8">
            <SectionLabel>Get the dispatch</SectionLabel>
            <h2 className="mt-4 font-sora text-[32px] font-bold sm:text-[42px]">Field notes, every Thursday.</h2>
            <p className="mx-auto mt-3 max-w-lg text-sm text-ink-dim">One short essay on maintenance, operations, or factory life. No marketing noise.</p>
            <form className="mx-auto mt-7 flex max-w-lg flex-col gap-2 sm:flex-row">
              <input className="flex-1 rounded-lg border border-white/10 bg-navy-800/60 px-4 py-3 text-sm outline-none placeholder:text-ink-mute focus:border-pulse/60" placeholder="you@factory.com" />
              <button className="btn-glow rounded-lg bg-power px-5 py-3 text-sm font-medium text-white">Subscribe</button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
