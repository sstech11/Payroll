import { ApprovalHierarchies as TApprovalHierarchies } from "../api/approvalHierarchies/ApprovalHierarchies";

export const APPROVALHIERARCHIES_TITLE_FIELD = "id";

export const ApprovalHierarchiesTitle = (
  record: TApprovalHierarchies
): string => {
  return record.id?.toString() || String(record.id);
};
