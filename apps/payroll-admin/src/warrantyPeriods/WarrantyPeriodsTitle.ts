import { WarrantyPeriods as TWarrantyPeriods } from "../api/warrantyPeriods/WarrantyPeriods";

export const WARRANTYPERIODS_TITLE_FIELD = "id";

export const WarrantyPeriodsTitle = (record: TWarrantyPeriods): string => {
  return record.id?.toString() || String(record.id);
};
