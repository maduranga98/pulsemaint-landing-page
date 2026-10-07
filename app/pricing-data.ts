import { PRICING_TIERS, SITE_NAME, SITE_URL, type PricingTier } from "./site-data";

export function tierSlug(tier: PricingTier): string {
  return tier.name.toLowerCase().replace(/\s+/g, "-");
}

/**
 * AggregateOffer with one Offer per tier, generated from PRICING_TIERS.
 *
 * Shared by the site-wide SoftwareApplication in the layout and by /pricing/,
 * so the two can only differ in the URL they point at. A quote-only tier has no
 * price: emitting 0, or a price without a currency, would both read as free.
 */
export function pricingOffers(url: string, idBase: string) {
  const prices = PRICING_TIERS.flatMap((tier) => (tier.priceUSD === undefined ? [] : [tier.priceUSD]));

  return {
    "@type": "AggregateOffer",
    priceCurrency: "USD",
    lowPrice: String(Math.min(...prices)),
    highPrice: String(Math.max(...prices)),
    offerCount: PRICING_TIERS.length,
    url,
    offers: PRICING_TIERS.map((tier) => ({
      "@type": "Offer",
      "@id": `${idBase}#offer-${tierSlug(tier)}`,
      name: `${SITE_NAME} ${tier.name}`,
      description: tier.limits,
      category: "SubscriptionPlan",
      url,
      ...(tier.priceUSD === undefined
        ? { availability: "https://schema.org/InStock", priceSpecification: { "@type": "PriceSpecification", valueAddedTaxIncluded: false } }
        : {
            price: String(tier.priceUSD),
            priceCurrency: "USD",
            availability: "https://schema.org/InStock",
            priceSpecification: {
              "@type": "UnitPriceSpecification",
              price: String(tier.priceUSD),
              priceCurrency: "USD",
              unitCode: "MON",
              billingDuration: 1,
              billingIncrement: 1,
            },
          }),
      itemOffered: { "@id": `${SITE_URL}/#software` },
    })),
  };
}
