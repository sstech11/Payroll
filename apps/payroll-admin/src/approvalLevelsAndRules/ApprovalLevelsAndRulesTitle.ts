import { ApprovalLevelsAndRules as TApprovalLevelsAndRules } from "../api/approvalLevelsAndRules/ApprovalLevelsAndRules";

export const APPROVALLEVELSANDRULES_TITLE_FIELD = "id";

export const ApprovalLevelsAndRulesTitle = (
  record: TApprovalLevelsAndRules
): string => {
  return record.id?.toString() || String(record.id);
};
