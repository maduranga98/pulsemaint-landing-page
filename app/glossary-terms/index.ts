import type { GlossaryTerm } from "../glossary-types";

import { term as assetLifecycleManagement } from "./asset-lifecycle-management";
import { term as assetRegistry } from "./asset-registry";
import { term as cmms } from "./cmms";
import { term as conditionBasedMaintenance } from "./condition-based-maintenance";
import { term as downtime } from "./downtime";
import { term as eam } from "./eam";
import { term as equipmentMaintenance } from "./equipment-maintenance";
import { term as guidedTriage } from "./guided-triage";
import { term as idleTime } from "./idle-time";
import { term as lockoutTagout } from "./lockout-tagout";
import { term as machineHealthScore } from "./machine-health-score";
import { term as machineMaintenance } from "./machine-maintenance";
import { term as maintenanceBacklog } from "./maintenance-backlog";
import { term as moe } from "./moe";
import { term as mro } from "./mro";
import { term as mroInventory } from "./mro-inventory";
import { term as mtbf } from "./mtbf";
import { term as mtta } from "./mtta";
import { term as mttr } from "./mttr";
import { term as multiTenancy } from "./multi-tenancy";
import { term as nearMiss } from "./near-miss";
import { term as oee } from "./oee";
import { term as permitToWork } from "./permit-to-work";
import { term as plannedMaintenance } from "./planned-maintenance";
import { term as pmCompliance } from "./pm-compliance";
import { term as preventiveMaintenance } from "./preventive-maintenance";
import { term as proactiveMaintenance } from "./proactive-maintenance";
import { term as qrTriggeredReporting } from "./qr-triggered-reporting";
import { term as reactiveMaintenance } from "./reactive-maintenance";
import { term as rootCause } from "./root-cause";
import { term as scheduledMaintenance } from "./scheduled-maintenance";
import { term as shiftHandover } from "./shift-handover";
import { term as unplannedDowntime } from "./unplanned-downtime";
import { term as workOrder } from "./work-order";

/**
 * Every glossary term, one file per term. Order here does not matter: the hub
 * and the sitemap read the A to Z order from glossary-data.ts. A new term is a
 * new file plus one line in each of the two lists below.
 */
export const terms: GlossaryTerm[] = [
  assetLifecycleManagement,
  assetRegistry,
  cmms,
  conditionBasedMaintenance,
  downtime,
  eam,
  equipmentMaintenance,
  guidedTriage,
  idleTime,
  lockoutTagout,
  machineHealthScore,
  machineMaintenance,
  maintenanceBacklog,
  moe,
  mro,
  mroInventory,
  mtbf,
  mtta,
  mttr,
  multiTenancy,
  nearMiss,
  oee,
  permitToWork,
  plannedMaintenance,
  pmCompliance,
  preventiveMaintenance,
  proactiveMaintenance,
  qrTriggeredReporting,
  reactiveMaintenance,
  rootCause,
  scheduledMaintenance,
  shiftHandover,
  unplannedDowntime,
  workOrder,
];
