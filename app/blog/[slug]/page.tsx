import type { Metadata } from "next";
import Link from "next/link";
import { posts } from "../../blog-data";
import { ArticleThumb, CategoryBadge, ECGLine, Footer, Navbar, PostCard, SectionLabel, StatusPill } from "../../marketing-components";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return [{ slug: "the-real-cost-of-unplanned-downtime" }];
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((item) => item.slug === slug) ?? posts[0];
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = posts.find((item) => item.slug === slug) ?? posts[0];

  return (
    <>
      <Navbar />
      <main>
        <header className="relative overflow-hidden pt-28 pb-12 sm:pt-32 sm:pb-16">
          <div className="bp-grid absolute inset-0 opacity-30" />
          <div className="absolute inset-0 bg-[radial-gradient(800px_500px_at_80%_-10%,rgba(0,194,255,0.18),transparent_60%)]" />
          <div className="relative mx-auto max-w-3xl px-5 sm:px-8">
            <nav className="mb-8 flex items-center gap-2 font-mono text-[12px] text-ink-mute">
              <Link href="/" className="hover:text-pulse">PulseMaint</Link>
              <span>/</span>
              <Link href="/blog" className="hover:text-pulse">Blog</Link>
              <span>/</span>
              <span className="text-pulse">{post.category}</span>
            </nav>
            <div className="mb-5 flex items-center gap-3">
              <CategoryBadge category={post.category} />
              <span className="font-mono text-xs text-ink-mute">{post.read} · {post.date}</span>
            </div>
            <h1 className="font-sora text-[36px] font-bold leading-[1.05] sm:text-[52px]">{post.title}</h1>
            <p className="mt-5 text-[18px] leading-relaxed text-ink-dim sm:text-xl">
              The visible repair bill is only the top layer. The real damage hides in lost throughput, scrap, overtime, missed orders,
              and the trust your team loses when every shift starts in reactive mode.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4 border-t border-white/8 pt-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-pulse to-power-400 font-sora font-bold text-navy-950">
                TJ
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
          <div className="mt-3 text-center font-mono text-xs text-ink-mute">
            Fig. 01 - Reported downtime cost vs hidden operational drag across a maintenance year.
          </div>
        </div>

        <section className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:px-8 lg:grid-cols-12">
          <aside className="hidden lg:col-span-3 lg:block">
            <div className="sticky top-24 rounded-xl border border-white/8 bg-navy-800/40 p-5">
              <div className="mb-4 font-mono text-[11px] uppercase tracking-[0.18em] text-ink-mute">On this page</div>
              {["The downtime iceberg", "What to measure", "A better operating loop", "Sample post structure"].map((item) => (
                <a key={item} href={`#${item.toLowerCase().replaceAll(" ", "-")}`} className="block border-l border-white/10 py-1.5 pl-3 text-sm text-ink-dim hover:border-pulse hover:text-pulse">
                  {item}
                </a>
              ))}
            </div>
          </aside>
          <article className="article-prose lg:col-span-9">
            <p className="text-[19px] leading-[1.7] text-ink first-letter:float-left first-letter:mr-3 first-letter:font-sora first-letter:text-[56px] first-letter:font-bold first-letter:leading-[0.9] first-letter:text-pulse">
              Unplanned downtime is usually discussed like a repair problem. A bearing failed, a motor tripped, a valve stuck open.
              Someone asks how long it took to fix. Someone else asks what part was replaced. The invoice gets filed and everyone moves on.
            </p>

            <h2 id="the-downtime-iceberg">The downtime iceberg</h2>
            <p>
              The most expensive parts of a stoppage rarely show up on the maintenance invoice. They sit in production schedules, quality
              rejects, overtime, customer penalties, and supervisor attention. In most factories, those costs are scattered across teams.
            </p>
            <div className="my-8 grid gap-3 sm:grid-cols-4">
              {[["3-5x", "hidden cost multiplier"], ["42m", "average MTTR target"], ["17", "active tickets"], ["99.2%", "uptime goal"]].map(([value, label]) => (
                <div key={label} className="rounded-lg border border-white/8 bg-navy-800/40 p-4">
                  <div className="font-sora text-3xl font-bold text-pulse">{value}</div>
                  <div className="mt-2 font-mono text-[11px] uppercase tracking-wider text-ink-mute">{label}</div>
                </div>
              ))}
            </div>

            <h2 id="what-to-measure">What to measure</h2>
            <p>
              Start with a minimum reliable dataset: machine, line, timestamp, reporter, severity, technician response time, parts used,
              root cause, safe actions taken, and final resolution. If your system cannot capture this under pressure, it will not survive
              a real breakdown.
            </p>
            <ul>
              <li>Use QR codes so reports start at the machine, not in a spreadsheet.</li>
              <li>Capture operator evidence before memory fades or the machine is cleaned.</li>
              <li>Separate response time from repair time so staffing issues become visible.</li>
              <li>Attach parts usage to work orders so inventory planning follows reality.</li>
            </ul>

            <div className="my-10 rounded-xl border border-pulse/35 bg-pulse/5 p-6">
              <div className="mb-2 font-mono text-[11px] uppercase tracking-[0.18em] text-pulse">PulseMaint note</div>
              <p className="mb-0 text-ink">
                The goal is not more forms. The goal is a lightweight operating loop where every breakdown makes the next response faster.
              </p>
            </div>

            <h2 id="a-better-operating-loop">A better operating loop</h2>
            <p>
              A modern maintenance flow should work like a control room: report instantly, route clearly, guide the first safe actions,
              log the repair, update the machine history, and recalculate the dashboard without manual reconciliation.
            </p>
            <div className="my-10 overflow-hidden rounded-xl border border-white/8 bg-navy-800/30 p-6">
              <div className="mb-5 font-mono text-[11px] uppercase tracking-[0.18em] text-ink-mute">Example flow</div>
              <div className="grid gap-3 sm:grid-cols-5">
                {["Report", "Triage", "Assign", "Repair", "Learn"].map((step, index) => (
                  <div key={step} className="rounded-lg border border-white/8 bg-navy-950/60 p-4">
                    <div className="font-mono text-xs text-pulse">0{index + 1}</div>
                    <div className="mt-2 font-sora font-semibold">{step}</div>
                  </div>
                ))}
              </div>
            </div>

            <h2 id="sample-post-structure">Sample post structure</h2>
            <p>
              This article is intentionally structured as a reusable template: hero metadata, author block, figure, sticky table of contents,
              lede, H2 sections, stat grid, callout, visual flow, CTA, author bio, and related posts. Future PulseMaint posts can follow the
              same rhythm while swapping the data and body copy.
            </p>

            <section className="relative my-12 overflow-hidden rounded-2xl border border-pulse/30 bg-gradient-to-br from-pulse/10 via-navy-800/60 to-power/10 p-8">
              <div className="absolute inset-0 opacity-35">
                <ECGLine height={150} />
              </div>
              <div className="relative">
                <SectionLabel>Stop guessing</SectionLabel>
                <h3 className="mt-3 font-sora text-3xl font-bold">Measure your real downtime cost.</h3>
                <p className="mt-2 max-w-lg text-ink-dim">PulseMaint tracks reported and hidden maintenance drag from day one.</p>
                <Link href="/#cta-final" className="btn-glow mt-6 inline-block rounded-lg bg-power px-5 py-3 font-medium text-white">
                  Start Free
                </Link>
              </div>
            </section>

            <section className="my-16 rounded-2xl border border-white/8 bg-navy-800/40 p-6">
              <div className="font-sora text-lg font-semibold">About the author</div>
              <p className="mb-0 mt-2 text-sm leading-relaxed text-ink-dim">
                Tharindu works with manufacturing teams in Sri Lanka and Southeast Asia to design practical maintenance software for real factory constraints.
              </p>
            </section>
          </article>
        </section>

        <section className="mx-auto max-w-5xl border-t border-white/8 px-5 py-16 sm:px-8">
          <div className="mb-8 flex items-center justify-between">
            <h2 className="font-sora text-2xl font-semibold">Keep reading</h2>
            <Link href="/blog" className="text-sm text-pulse">All essays</Link>
          </div>
          <div className="grid gap-5 sm:grid-cols-3">
            {posts.map((related) => (
              <PostCard key={related.slug} post={related} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
