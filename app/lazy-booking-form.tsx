"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";

const BookingForm = dynamic(() => import("./booking-form").then((mod) => mod.BookingForm), { ssr: false });

/**
 * Defers the booking form (its code, plus the country and timezone tables it
 * drags in) until the visitor is near it. It sits far below the fold, so
 * loading it with the first paint only adds script that blocks the hero.
 *
 * The placeholder holds the form's footprint so the section does not jump when
 * the real form mounts, and the observer's margin starts the load well before
 * the section scrolls into view or an in-page #book-demo link lands on it.
 */
export function LazyBookingForm() {
  const holder = useRef<HTMLDivElement>(null);
  const [near, setNear] = useState(false);

  useEffect(() => {
    const node = holder.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setNear(true);
          observer.disconnect();
        }
      },
      { rootMargin: "800px 0px" },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={holder} className="min-h-[760px]">
      {near ? <BookingForm /> : <p className="text-sm text-ink-mute">Loading the booking form…</p>}
    </div>
  );
}
