import { StatutoryCompliance as TStatutoryCompliance } from "../api/statutoryCompliance/StatutoryCompliance";

export const STATUTORYCOMPLIANCE_TITLE_FIELD = "id";

export const StatutoryComplianceTitle = (
  record: TStatutoryCompliance
): string => {
  return record.id?.toString() || String(record.id);
};
