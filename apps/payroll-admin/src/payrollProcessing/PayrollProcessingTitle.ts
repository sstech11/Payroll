import { PayrollProcessing as TPayrollProcessing } from "../api/payrollProcessing/PayrollProcessing";

export const PAYROLLPROCESSING_TITLE_FIELD = "id";

export const PayrollProcessingTitle = (record: TPayrollProcessing): string => {
  return record.id?.toString() || String(record.id);
};
