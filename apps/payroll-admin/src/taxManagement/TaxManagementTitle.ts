import { TaxManagement as TTaxManagement } from "../api/taxManagement/TaxManagement";

export const TAXMANAGEMENT_TITLE_FIELD = "id";

export const TaxManagementTitle = (record: TTaxManagement): string => {
  return record.id?.toString() || String(record.id);
};
