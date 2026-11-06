import type { BlogPost } from "../blog-data";

import { post as cmmsPricing } from "./cmms-pricing-per-machine-vs-per-user";
import { post as maintainxAlternative } from "./maintainx-alternative";
import { post as cryotosAlternative } from "./cryotos-alternative";
import { post as sapAlternative } from "./sap-plant-maintenance-alternative";
import { post as reportBreakdown } from "./how-to-report-a-machine-breakdown";
import { post as whatIsACmms } from "./what-is-a-cmms";
import { post as workOrderSoftware } from "./work-order-software";
import { post as reduceDowntime } from "./how-to-reduce-machine-downtime";
import { post as preventiveMaintenance } from "./what-is-preventive-maintenance";
import { post as operatorTriage } from "./guided-operator-safety-triage";
import { post as contractorManagement } from "./contractor-management-software-manufacturing";
import { post as smallManufacturers } from "./best-cmms-for-small-manufacturers";
import { post as regulatedManufacturing } from "./cmms-for-regulated-manufacturing";
import { post as whatIsMttr } from "./what-is-mttr";
import { post as unplannedDowntime } from "./the-real-cost-of-unplanned-downtime";
import { post as qrReporting } from "./why-qr-reporting-beats-paper-logs";
import { post as sharedTablets } from "./guided-triage-for-shared-tablets";
import { post as whyMachinesBreak } from "./why-machines-keep-breaking-down-root-cause-analysis";
import { post as oee } from "./oee-calculation-manufacturing";
import { post as fmea } from "./fmea-maintenance-guide";
import { post as conditionMonitoring } from "./condition-monitoring-program-manufacturing";
import { post as spareParts } from "./spare-parts-inventory-management";
import { post as maintenanceBacklog } from "./maintenance-backlog-calculation-reduction";
import { post as assetCriticality } from "./asset-criticality-analysis-manufacturing";
import { post as maintenanceChecklist } from "./machine-maintenance-checklist-daily-weekly-monthly";
import { post as maintenanceKpis } from "./maintenance-kpis-manufacturing";
import { post as workOrderPriority } from "./maintenance-work-order-prioritization";

/**
 * Ordered newest first. The first entry is used as the featured post on /blog.
 */
export const posts: BlogPost[] = [
  whyMachinesBreak,
  oee,
  fmea,
  conditionMonitoring,
  spareParts,
  maintenanceBacklog,
  assetCriticality,
  maintenanceChecklist,
  maintenanceKpis,
  workOrderPriority,
  cmmsPricing,
  maintainxAlternative,
  cryotosAlternative,
  sapAlternative,
  reportBreakdown,
  whatIsACmms,
  workOrderSoftware,
  reduceDowntime,
  preventiveMaintenance,
  operatorTriage,
  contractorManagement,
  smallManufacturers,
  regulatedManufacturing,
  whatIsMttr,
  unplannedDowntime,
  qrReporting,
  sharedTablets,
];

export function getPost(slug: string): BlogPost | undefined {
  return posts.find((post) => post.slug === slug);
}

/**
 * Related reading, picked by tag overlap so every post links to its nearest
 * neighbours without anyone curating the list. Shared tags weigh most, then a
 * shared category, then the optional hand-picked `related` boost. Ties keep the
 * newest-first order of `posts`, so the result is stable between builds.
 */
export function getRelated(post: BlogPost, limit = 3): BlogPost[] {
  const score = (item: BlogPost) =>
    item.tags.filter((tag) => post.tags.includes(tag)).length * 3 +
    (item.category === post.category ? 1 : 0) +
    ((post.related ?? []).includes(item.slug) ? 2 : 0);

  return posts
    .filter((item) => item.slug !== post.slug)
    .map((item, index) => ({ item, index, points: score(item) }))
    .sort((a, b) => b.points - a.points || a.index - b.index)
    .slice(0, limit)
    .map(({ item }) => item);
}
