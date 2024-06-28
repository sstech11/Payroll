import { PreventiveMaintenance as TPreventiveMaintenance } from "../api/preventiveMaintenance/PreventiveMaintenance";

export const PREVENTIVEMAINTENANCE_TITLE_FIELD = "id";

export const PreventiveMaintenanceTitle = (
  record: TPreventiveMaintenance
): string => {
  return record.id?.toString() || String(record.id);
};
