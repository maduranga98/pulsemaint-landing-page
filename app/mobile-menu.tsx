"use client";

import Link from "next/link";
import { useState } from "react";

/**
 * The only client code in the site chrome: the hamburger toggle. Everything else
 * in the header and footer is server-rendered, so it ships as HTML, not JS.
 */
export function MobileMenu({ links }: { links: readonly (readonly [string, string])[] }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="rounded-md p-2 text-ink md:hidden"
        aria-label="Toggle navigation"
        aria-expanded={open}
      >
        <span className="block h-0.5 w-5 bg-current" />
        <span className="mt-1.5 block h-0.5 w-5 bg-current" />
        <span className="mt-1.5 block h-0.5 w-5 bg-current" />
      </button>
      {open ? (
        <div className="absolute inset-x-0 top-16 border-t border-white/8 bg-navy-950/95 px-5 py-4 md:hidden">
          <div className="flex flex-col gap-3">
            {links.map(([label, href]) => (
              <Link key={href} href={href} onClick={() => setOpen(false)} className="py-1 text-ink-dim">
                {label}
              </Link>
            ))}
            <Link href="/#book-demo" onClick={() => setOpen(false)} className="btn-glow mt-2 rounded-lg bg-power py-2.5 text-center text-sm font-medium text-white">
              Book a demo
            </Link>
          </div>
        </div>
      ) : null}
    </>
  );
}
