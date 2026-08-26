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

/**
 * Ordered newest first. The first entry is used as the featured post on /blog.
 */
export const posts: BlogPost[] = [
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

export function getRelated(post: BlogPost, limit = 3): BlogPost[] {
  const picked = (post.related ?? [])
    .map((slug) => posts.find((item) => item.slug === slug))
    .filter((item): item is BlogPost => Boolean(item) && item!.slug !== post.slug);
  const fallback = posts.filter((item) => item.slug !== post.slug && !picked.includes(item));
  return [...picked, ...fallback].slice(0, limit);
}
