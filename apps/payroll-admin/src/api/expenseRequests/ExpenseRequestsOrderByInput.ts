import { SortOrder } from "../../util/SortOrder";

export type ExpenseRequestsOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
