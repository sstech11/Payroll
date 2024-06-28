import { ApprovalProcessWhereInput } from "./ApprovalProcessWhereInput";
import { ApprovalProcessOrderByInput } from "./ApprovalProcessOrderByInput";

export type ApprovalProcessFindManyArgs = {
  where?: ApprovalProcessWhereInput;
  orderBy?: Array<ApprovalProcessOrderByInput>;
  skip?: number;
  take?: number;
};
