import { ApprovalProcess as TApprovalProcess } from "../api/approvalProcess/ApprovalProcess";

export const APPROVALPROCESS_TITLE_FIELD = "id";

export const ApprovalProcessTitle = (record: TApprovalProcess): string => {
  return record.id?.toString() || String(record.id);
};
