import type { PillarPageData } from "../pillar-types";

import { page as cmmsSoftware } from "./cmms-software";
import { page as maintenanceManagementSoftware } from "./maintenance-management-software";
import { page as workOrderSoftware } from "./work-order-software";

/**
 * The three pillar pages. Each owns one search intent, so they link to each
 * other rather than overlapping:
 *   /cmms-software/                   buyer's guide to the product category
 *   /maintenance-management-software/ the switch from spreadsheets, paper and ERP modules
 *   /work-order-software/             how a job flows from request to close out
 */
export const PILLAR_PAGES: PillarPageData[] = [cmmsSoftware, maintenanceManagementSoftware, workOrderSoftware];

export function getPillar(slug: string): PillarPageData {
  const found = PILLAR_PAGES.find((item) => item.slug === slug);
  if (!found) throw new Error(`Unknown pillar page: ${slug}`);
  return found;
}

/** Newest `updated` across the pillars, for hubs that list them. */
export function pillarsLastUpdated(): string {
  return PILLAR_PAGES.reduce((latest, item) => (item.updated > latest ? item.updated : latest), "0000-00-00");
}
