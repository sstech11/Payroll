import { ExpenseCategoriesWhereInput } from "./ExpenseCategoriesWhereInput";
import { ExpenseCategoriesOrderByInput } from "./ExpenseCategoriesOrderByInput";

export type ExpenseCategoriesFindManyArgs = {
  where?: ExpenseCategoriesWhereInput;
  orderBy?: Array<ExpenseCategoriesOrderByInput>;
  skip?: number;
  take?: number;
};
