import { ExpenseRequestsWhereInput } from "./ExpenseRequestsWhereInput";
import { ExpenseRequestsOrderByInput } from "./ExpenseRequestsOrderByInput";

export type ExpenseRequestsFindManyArgs = {
  where?: ExpenseRequestsWhereInput;
  orderBy?: Array<ExpenseRequestsOrderByInput>;
  skip?: number;
  take?: number;
};
