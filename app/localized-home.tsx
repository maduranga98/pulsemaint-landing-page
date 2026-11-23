import type { Metadata } from "next";
import Link from "next/link";
import { homeLanguageAlternates, LANGUAGE_LINKS, LOCALES } from "./i18n";
import type { LocalizedHomeCopy } from "./i18n";
import { Corners, Footer, Navbar, SectionLabel } from "./marketing-components";
import { jsonLdHtml } from "./page-metadata";
import { CONTENT_LAST_REVIEWED, MODULES, OG_IMAGE_ALT, OG_IMAGE_HEIGHT, OG_IMAGE_WIDTH, PRICING_TIERS, SITE_NAME, SITE_URL, ogImageUrl } from "./site-data";

/**
 * Metadata for a localized landing page. The hreflang set is the full cluster
 * (en, every locale, x-default), identical on every page in it, which is the
 * condition Google needs to honor the annotations.
 */
export function localizedHomeMetadata(copy: LocalizedHomeCopy): Metadata {
  return {
    title: { absolute: copy.title },
    description: copy.description,
    alternates: { canonical: copy.path, languages: homeLanguageAlternates() },
    openGraph: {
      title: copy.title,
      description: copy.description,
      url: `${SITE_URL}${copy.path}`,
      siteName: SITE_NAME,
      locale: copy.ogLocale,
      alternateLocale: ["en_US", ...LOCALES.filter((locale) => locale.lang !== copy.lang).map((locale) => locale.ogLocale)],
      type: "website",
      images: [{ url: ogImageUrl("home"), width: OG_IMAGE_WIDTH, height: OG_IMAGE_HEIGHT, alt: OG_IMAGE_ALT, type: "image/png" }],
    },
    twitter: {
      card: "summary_large_image",
      title: copy.title,
      description: copy.description,
      images: [{ url: ogImageUrl("home"), alt: OG_IMAGE_ALT }],
    },
  };
}

function jsonLd(copy: LocalizedHomeCopy) {
  const url = `${SITE_URL}${copy.path}`;
  return [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${url}#webpage`,
      url,
      name: copy.title,
      description: copy.description,
      inLanguage: copy.lang,
      isPartOf: { "@id": `${SITE_URL}/#website` },
      about: { "@id": `${SITE_URL}/#software` },
      dateModified: CONTENT_LAST_REVIEWED,
      // The English homepage is the same content in another language.
      workTranslation: { "@id": `${SITE_URL}/#webpage` },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "@id": `${url}#faq`,
      inLanguage: copy.lang,
      mainEntity: copy.faq.items.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: { "@type": "Answer", text: item.a },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: SITE_NAME, item: `${SITE_URL}/` },
        { "@type": "ListItem", position: 2, name: copy.breadcrumbName, item: url },
      ],
    },
  ];
}

function LanguageSwitcher({ current, label }: { current: string; label: string }) {
  return (
    <nav aria-label={label} className="flex flex-wrap items-center gap-2 font-mono text-[12px]">
      <span className="uppercase tracking-wider text-ink-mute">{label}:</span>
      {LANGUAGE_LINKS.map((link) =>
        link.lang === current ? (
          <span key={link.lang} lang={link.lang} aria-current="page" className="rounded-full border border-pulse/50 px-2.5 py-1 text-pulse">
            {link.label}
          </span>
        ) : (
          <Link key={link.lang} href={link.href} lang={link.lang} hrefLang={link.lang} className="rounded-full border border-white/10 px-2.5 py-1 text-ink-dim transition hover:border-pulse/40 hover:text-pulse">
            {link.label}
          </Link>
        ),
      )}
    </nav>
  );
}

const machineCount = (limits: string) => limits.split(" · ")[0].match(/[\d,]+/)?.[0];

export function LocalizedHome({ copy }: { copy: LocalizedHomeCopy }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdHtml(jsonLd(copy))} />
      <Navbar />
      {/* The root layout is shared, so <html lang> stays "en"; the content language is declared here and by hreflang. */}
      <main lang={copy.lang} className="localized">
        <section className="relative overflow-hidden pt-28 pb-16 sm:pt-32 sm:pb-20">
          <div className="bp-grid absolute inset-0 opacity-60" />
          <div className="relative mx-auto max-w-5xl px-5 sm:px-8">
            <LanguageSwitcher current={copy.lang} label={copy.languageLabel} />
            <div className="mt-8 inline-flex items-center rounded-full border border-pulse/40 px-3.5 py-1.5 text-[13px] text-pulse">{copy.hero.eyebrow}</div>
            <h1 className="mt-6 font-sora text-[34px] font-bold leading-[1.25] text-ink sm:text-[46px]">
              {copy.hero.h1}
              <br />
              <span className="text-pulse">{copy.hero.h1Accent}</span>
            </h1>
            <p lang="en" className="mt-4 font-sora text-lg font-semibold text-ink sm:text-xl">
              {copy.hero.tagline}
            </p>
            <p className="mt-5 max-w-3xl text-[17px] leading-relaxed text-ink-dim">{copy.hero.lede}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/#book-demo" className="btn-glow rounded-lg bg-power px-5 py-3 font-medium text-white">
                {copy.hero.primaryCta}
              </Link>
              <a href="#pricing" className="rounded-lg border border-white/15 px-5 py-3 font-medium text-ink transition hover:border-pulse/50 hover:text-pulse">
                {copy.hero.secondaryCta}
              </a>
            </div>
          </div>
        </section>

        <section id="what-is" className="border-y border-white/8 bg-navy-950 py-16 sm:py-20">
          <div className="mx-auto max-w-5xl px-5 sm:px-8">
            <SectionLabel>{copy.whatIs.label}</SectionLabel>
            <h2 className="mt-4 font-sora text-[26px] font-bold leading-snug sm:text-[32px]">{copy.whatIs.heading}</h2>
            <p className="mt-5 text-[16px] leading-relaxed text-ink-dim">{copy.whatIs.body}</p>
          </div>
        </section>

        <section id="problems" className="py-16 sm:py-20">
          <div className="mx-auto max-w-5xl px-5 sm:px-8">
            <SectionLabel tone="crit">{copy.problems.label}</SectionLabel>
            <h2 className="mt-4 font-sora text-[26px] font-bold leading-snug sm:text-[32px]">{copy.problems.heading}</h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {copy.problems.items.map(([title, body]) => (
                <div key={title} className="relative rounded-xl border border-white/8 bg-navy-800/40 p-5">
                  <Corners />
                  <h3 className="font-sora text-base font-semibold text-ink">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-dim">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="triage" className="border-y border-white/8 bg-navy-950 py-16 sm:py-20">
          <div className="mx-auto max-w-5xl px-5 sm:px-8">
            <SectionLabel>{copy.triage.label}</SectionLabel>
            <h2 className="mt-4 font-sora text-[26px] font-bold leading-snug sm:text-[32px]">{copy.triage.heading}</h2>
            <p className="mt-5 text-[16px] leading-relaxed text-ink-dim">{copy.triage.body}</p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {copy.triage.points.map(([title, body]) => (
                <div key={title} className="rounded-xl border border-pulse/25 bg-pulse/5 p-5">
                  <h3 className="font-sora text-base font-semibold text-ink">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-dim">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="modules" className="py-16 sm:py-20">
          <div className="mx-auto max-w-5xl px-5 sm:px-8">
            <SectionLabel>{copy.modules.label}</SectionLabel>
            <h2 className="mt-4 font-sora text-[26px] font-bold leading-snug sm:text-[32px]">{copy.modules.heading}</h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {MODULES.map((module) => {
                const [name, body] = copy.modules.items[module.slug] ?? [module.name, module.body];
                return (
                  <div key={module.slug} className="rounded-xl border border-white/8 bg-navy-800/40 p-5">
                    <div className="font-mono text-[11px] text-pulse">{module.num}</div>
                    <h3 className="mt-2 font-sora text-base font-semibold text-ink">{name}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-dim">{body}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section id="roles" className="border-y border-white/8 bg-navy-950 py-16 sm:py-20">
          <div className="mx-auto max-w-5xl px-5 sm:px-8">
            <SectionLabel>{copy.roles.label}</SectionLabel>
            <h2 className="mt-4 font-sora text-[26px] font-bold leading-snug sm:text-[32px]">{copy.roles.heading}</h2>
            <dl className="mt-8 grid gap-x-8 gap-y-5 sm:grid-cols-2">
              {copy.roles.items.map(([role, body]) => (
                <div key={role} className="border-l border-pulse/30 pl-4">
                  <dt className="font-sora text-[15px] font-semibold text-ink">{role}</dt>
                  <dd className="m-0 mt-1 text-sm leading-relaxed text-ink-dim">{body}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section id="pricing" className="py-16 sm:py-20">
          <div className="mx-auto max-w-5xl px-5 sm:px-8">
            <SectionLabel tone="uptime">{copy.pricing.label}</SectionLabel>
            <h2 className="mt-4 font-sora text-[26px] font-bold leading-snug sm:text-[32px]">{copy.pricing.heading}</h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {PRICING_TIERS.map((tier) => {
                const count = machineCount(tier.limits);
                return (
                  <div key={tier.name} className={`relative rounded-xl border p-5 ${tier.popular ? "border-pulse/50 bg-pulse/5" : "border-white/8 bg-navy-800/40"}`}>
                    <h3 lang="en" className="font-sora text-base font-semibold text-ink">
                      {tier.name}
                    </h3>
                    <div className="mt-3 font-sora text-2xl font-bold text-ink">
                      {tier.priceUSD === undefined ? copy.pricing.custom : `${tier.price}`}
                      {tier.priceUSD === undefined ? null : <span className="text-sm font-normal text-ink-mute">{copy.pricing.perMonth}</span>}
                    </div>
                    <p className="mt-2 text-sm text-ink-dim">{count ? copy.pricing.machines(count) : copy.pricing.contractLimit}</p>
                  </div>
                );
              })}
            </div>
            <p className="mt-6 text-sm leading-relaxed text-ink-mute">{copy.pricing.note}</p>
            <Link href="/pricing/" hrefLang="en" className="mt-4 inline-block text-sm font-medium text-pulse">
              {copy.pricing.cta} →
            </Link>
          </div>
        </section>

        <section id="industries" className="border-y border-white/8 bg-navy-950 py-16 sm:py-20">
          <div className="mx-auto max-w-5xl px-5 sm:px-8">
            <SectionLabel>{copy.industries.label}</SectionLabel>
            <h2 className="mt-4 font-sora text-[26px] font-bold leading-snug sm:text-[32px]">{copy.industries.heading}</h2>
            <ul className="mt-6 flex flex-wrap gap-2.5">
              {copy.industries.items.map((item) => (
                <li key={item} className="rounded-full border border-white/10 px-3.5 py-1.5 text-sm text-ink-dim">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="faq" className="py-16 sm:py-20">
          <div className="mx-auto max-w-5xl px-5 sm:px-8">
            <SectionLabel>{copy.faq.label}</SectionLabel>
            <h2 className="mt-4 font-sora text-[26px] font-bold leading-snug sm:text-[32px]">{copy.faq.heading}</h2>
            <div className="mt-8 divide-y divide-white/8 border-y border-white/8">
              {copy.faq.items.map((item) => (
                <div key={item.q} className="py-5">
                  <h3 className="font-sora text-[16px] font-semibold text-ink">{item.q}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-ink-dim">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-white/8 bg-navy-950 py-16 sm:py-20">
          <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
            <h2 className="font-sora text-[26px] font-bold leading-snug sm:text-[32px]">{copy.cta.heading}</h2>
            <p className="mt-4 text-[16px] leading-relaxed text-ink-dim">{copy.cta.body}</p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link href="/#book-demo" className="btn-glow rounded-lg bg-power px-5 py-3 font-medium text-white">
                {copy.cta.button}
              </Link>
              <Link href="/" hrefLang="en" className="rounded-lg border border-white/15 px-5 py-3 font-medium text-ink transition hover:border-pulse/50 hover:text-pulse">
                {copy.cta.englishLink}
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
