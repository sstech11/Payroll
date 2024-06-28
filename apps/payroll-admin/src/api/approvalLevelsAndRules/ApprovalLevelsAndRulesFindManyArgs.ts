import { ApprovalLevelsAndRulesWhereInput } from "./ApprovalLevelsAndRulesWhereInput";
import { ApprovalLevelsAndRulesOrderByInput } from "./ApprovalLevelsAndRulesOrderByInput";

export type ApprovalLevelsAndRulesFindManyArgs = {
  where?: ApprovalLevelsAndRulesWhereInput;
  orderBy?: Array<ApprovalLevelsAndRulesOrderByInput>;
  skip?: number;
  take?: number;
};
