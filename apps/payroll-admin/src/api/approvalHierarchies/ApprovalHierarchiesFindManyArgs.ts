import { ApprovalHierarchiesWhereInput } from "./ApprovalHierarchiesWhereInput";
import { ApprovalHierarchiesOrderByInput } from "./ApprovalHierarchiesOrderByInput";

export type ApprovalHierarchiesFindManyArgs = {
  where?: ApprovalHierarchiesWhereInput;
  orderBy?: Array<ApprovalHierarchiesOrderByInput>;
  skip?: number;
  take?: number;
};
