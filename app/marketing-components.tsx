"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import type { BlogPost } from "./blog-data";

export type { BlogPost };

type Tone = "pulse" | "power" | "uptime" | "warn" | "crit" | "mute";

const toneClasses: Record<Tone, string> = {
  pulse: "bg-pulse/10 text-pulse ring-pulse/30",
  power: "bg-power/10 text-power-400 ring-power/30",
  uptime: "bg-uptime/10 text-uptime ring-uptime/30",
  warn: "bg-warn/10 text-warn ring-warn/30",
  crit: "bg-crit/10 text-crit ring-crit/30",
  mute: "bg-white/5 text-ink-dim ring-white/10",
};

export function PulseLogo() {
  return (
    <div className="flex items-center gap-2.5">
      <Image
        src="/logo.png"
        alt=""
        width={44}
        height={44}
        className="h-10 w-10 rounded-lg object-contain shadow-[0_0_18px_rgba(0,194,255,0.22)]"
        priority
      />
      <span className="font-sora text-lg font-bold tracking-normal text-ink">
        Pulse<span className="text-pulse">Maint</span>
      </span>
    </div>
  );
}

export function ECGLine({ className = "", height = 120 }: { className?: string; height?: number }) {
  const path =
    "M0 50 " +
    Array.from({ length: 8 }, (_, i) => {
      const x = i * 250;
      return `L${x + 60} 50 L${x + 82} 50 L${x + 92} 28 L${x + 103} 72 L${x + 116} 18 L${x + 129} 82 L${x + 142} 50 L${x + 250} 50`;
    }).join(" ");

  return (
    <svg viewBox="0 0 2000 100" preserveAspectRatio="none" className={className} style={{ height, width: "100%" }} aria-hidden="true">
      <defs>
        <linearGradient id="ecg-grad" x1="0" x2="1">
          <stop offset="0" stopColor="#00C2FF" stopOpacity="0" />
          <stop offset="0.18" stopColor="#00C2FF" />
          <stop offset="0.82" stopColor="#1A56DB" />
          <stop offset="1" stopColor="#1A56DB" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={path} className="ecg-line" fill="none" stroke="url(#ecg-grad)" strokeWidth="2" />
    </svg>
  );
}

export function SectionLabel({ children, tone = "pulse" }: { children: React.ReactNode; tone?: Tone }) {
  const dot = tone === "crit" ? "bg-crit" : tone === "uptime" ? "bg-uptime" : tone === "power" ? "bg-power-400" : "bg-pulse";
  return (
    <div className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-ink-dim">
      <span className={`h-1.5 w-1.5 rounded-full ${dot} dot-pulse`} />
      <span>{children}</span>
    </div>
  );
}

export function StatusPill({ children, tone = "pulse" }: { children: React.ReactNode; tone?: Tone }) {
  return <span className={`inline-flex items-center rounded-full px-2.5 py-1 text-[10px] font-mono uppercase tracking-wider ring-1 ${toneClasses[tone]}`}>{children}</span>;
}

export function Navbar() {
  const [open, setOpen] = useState(false);
  const links = [
    ["Features", "/#features"],
    ["Pricing", "/#pricing"],
    ["Industries", "/#industries"],
    ["Roadmap", "/#roadmap"],
    ["Blog", "/blog"],
  ];

  return (
    <header className="nav-blur fixed inset-x-0 top-0 z-50">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
        <Link href="/" aria-label="PulseMaint home">
          <PulseLogo />
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {links.map(([label, href]) => (
            <Link key={href} href={href} className="text-sm text-ink-dim transition hover:text-ink">
              {label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-3 md:flex">
          <a href="#" className="text-sm text-ink-dim transition hover:text-ink">
            Sign in
          </a>
          <Link href="/#cta-final" className="btn-glow rounded-lg bg-power px-4 py-2 text-sm font-medium text-white">
            Start Free
          </Link>
        </div>
        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="rounded-md p-2 text-ink md:hidden"
          aria-label="Toggle navigation"
        >
          <span className="block h-0.5 w-5 bg-current" />
          <span className="mt-1.5 block h-0.5 w-5 bg-current" />
          <span className="mt-1.5 block h-0.5 w-5 bg-current" />
        </button>
      </div>
      {open ? (
        <div className="border-t border-white/8 bg-navy-950/95 px-5 py-4 md:hidden">
          <div className="flex flex-col gap-3">
            {links.map(([label, href]) => (
              <Link key={href} href={href} onClick={() => setOpen(false)} className="py-1 text-ink-dim">
                {label}
              </Link>
            ))}
            <Link href="/#cta-final" onClick={() => setOpen(false)} className="btn-glow mt-2 rounded-lg bg-power py-2.5 text-center text-sm font-medium text-white">
              Start Free
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}

export function Footer() {
  const columns = [
    { title: "Product", links: [["Features", "/#features"], ["Pricing", "/#pricing"], ["Roadmap", "/#roadmap"], ["Blog", "/blog"]] },
    { title: "Company", links: [["About", "#"], ["Contact", "#"], ["Careers", "#"], ["LinkedIn", "#"]] },
    { title: "Markets", links: [["Sri Lanka", "/#industries"], ["Bangladesh", "/#industries"], ["UAE", "/#industries"], ["Malaysia", "/#industries"]] },
    { title: "Legal", links: [["Privacy", "#"], ["Terms", "#"], ["Security", "#"], ["GDPR", "#"]] },
  ];

  return (
    <footer className="border-t border-white/8 bg-navy-950">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <PulseLogo />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-dim">
            The mobile-first maintenance platform for factory floors. Built by Lumora Ventures in Colombo, Sri Lanka.
          </p>
          <div className="mt-5 flex items-center gap-2 font-mono text-xs text-ink-mute">
            <span className="h-1.5 w-1.5 rounded-full bg-uptime dot-pulse" />
            All systems operational
          </div>
        </div>
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-4 lg:col-span-8">
          {columns.map((column) => (
            <div key={column.title}>
              <div className="mb-4 font-mono text-[11px] uppercase tracking-wider text-ink-mute">{column.title}</div>
              <ul className="space-y-2.5">
                {column.links.map(([label, href]) => (
                  <li key={label}>
                    <Link href={href} className="text-sm text-ink-dim transition hover:text-pulse">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="mx-auto flex max-w-7xl flex-col gap-3 border-t border-white/8 px-5 py-6 font-mono text-xs text-ink-mute sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <span>© 2026 Lumora Ventures Pvt Ltd · pulsemaint.com</span>
        <span>v1.0 · shipping Q3 2026</span>
      </div>
    </footer>
  );
}

/*
 * UI-only component module. Blog data lives in app/blog-data.ts so server
 * pages can read it during prerender without crossing a client boundary.
 */

/*
type BlogPost = {
  title: string;
  slug: string;
  category: string;
  read: string;
  date: string;
  author: string;
  role: string;
  excerpt: string;
};
*/

export function CategoryBadge({ category }: { category: string }) {
  const tone: Tone = category === "Operations" ? "crit" : category === "Product" ? "power" : category === "Engineering" ? "pulse" : "uptime";
  return <StatusPill tone={tone}>{category}</StatusPill>;
}

export function ArticleThumb({ category = "Product" }: { category?: string }) {
  const accent = category === "Operations" ? "#EF4444" : category === "Engineering" ? "#00C2FF" : category === "Case study" ? "#10B981" : "#3B72E8";
  return (
    <svg viewBox="0 0 500 280" className="h-full w-full" preserveAspectRatio="none" aria-hidden="true">
      <defs>
        <pattern id={`grid-${category}`} width="24" height="24" patternUnits="userSpaceOnUse">
          <path d="M24 0H0v24" fill="none" stroke="rgba(255,255,255,.06)" />
        </pattern>
        <linearGradient id={`thumb-${category}`} x1="0" x2="1" y1="0" y2="1">
          <stop offset="0" stopColor={accent} stopOpacity=".28" />
          <stop offset="1" stopColor="#0A1628" stopOpacity=".8" />
        </linearGradient>
      </defs>
      <rect width="500" height="280" fill="#070F1E" />
      <rect width="500" height="280" fill={`url(#grid-${category})`} />
      <rect width="500" height="280" fill={`url(#thumb-${category})`} />
      {[50, 200, 350].map((x, column) => (
        <g key={x}>
          <rect x={x} y="52" width="108" height="176" rx="8" fill="rgba(255,255,255,.04)" stroke="rgba(255,255,255,.12)" />
          <circle cx={x + 18} cy="72" r="4" fill={column === 0 ? "#EF4444" : column === 1 ? "#3B72E8" : "#10B981"} />
          <rect x={x + 32} y="68" width="56" height="8" rx="4" fill="rgba(255,255,255,.25)" />
          <rect x={x + 14} y="94" width="80" height="44" rx="6" fill={`${accent}22`} stroke={`${accent}66`} />
          <rect x={x + 14} y="150" width="80" height="44" rx="6" fill="rgba(255,255,255,.04)" stroke="rgba(255,255,255,.1)" />
        </g>
      ))}
    </svg>
  );
}

export function PostCard({ post }: { post: BlogPost }) {
  return (
    <Link href={`/blog/${post.slug}`} className="group flex h-full flex-col overflow-hidden rounded-xl border border-white/8 bg-navy-800/40 lift hover:border-pulse/35">
      <div className="aspect-[16/9] bg-navy-950">
        <ArticleThumb category={post.category} />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <div className="mb-3 flex items-center gap-2">
          <CategoryBadge category={post.category} />
          <span className="font-mono text-[11px] text-ink-mute">{post.read}</span>
        </div>
        <h3 className="font-sora text-lg font-semibold leading-snug text-ink transition group-hover:text-pulse">{post.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-ink-dim">{post.excerpt}</p>
        <div className="mt-auto pt-5 font-mono text-[11px] text-ink-mute">{post.date}</div>
      </div>
    </Link>
  );
}
