import Link from "next/link";
import { PRICING_TIERS } from "./site-data";

/**
 * The tier cards, shared by the homepage #pricing section and /pricing/ so both
 * render the one PRICING_TIERS list. `ctaHref` differs: the homepage jumps to
 * its own booking section, other pages go back to the homepage's.
 */
export function PricingCards({ ctaHref }: { ctaHref: string }) {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {PRICING_TIERS.map((tier) => (
        <div
          key={tier.name}
          className={`relative flex flex-col gap-3.5 rounded-2xl p-6 text-left lift ${
            tier.popular ? "border-2 border-power bg-power/15 shadow-glow" : "border border-white/8 bg-navy-800/40"
          }`}
        >
          {tier.popular ? (
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-power px-3 py-1 font-mono text-[10px] text-white">MOST POPULAR</div>
          ) : null}
          <h3 className="font-sora text-xl font-semibold">{tier.name}</h3>
          <div>
            <span className="font-sora text-3xl font-bold">{tier.price}</span>
            <span className="ml-1 text-sm text-ink-mute">{tier.period}</span>
          </div>
          {tier.annual ? <div className="text-xs text-ink-mute">{tier.annual}</div> : null}
          <div className="text-sm font-semibold text-ink-dim">{tier.limits}</div>
          <div className="flex flex-1 flex-col gap-1.5">
            {tier.features.map((feature) => (
              <div key={feature} className="flex gap-2 text-[12.5px] text-ink-dim">
                <span className="text-pulse">✓</span>
                {feature}
              </div>
            ))}
          </div>
          <Link href={ctaHref} className={`mt-2 block rounded-lg py-2.5 text-center text-sm font-medium ${tier.popular ? "btn-glow bg-power text-white" : "border border-white/15 text-ink hover:border-pulse/50"}`}>
            {tier.name === "Enterprise" ? "Talk to sales" : "Start trial"}
          </Link>
        </div>
      ))}
    </div>
  );
}
