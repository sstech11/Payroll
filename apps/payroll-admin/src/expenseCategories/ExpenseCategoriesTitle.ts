import { ExpenseCategories as TExpenseCategories } from "../api/expenseCategories/ExpenseCategories";

export const EXPENSECATEGORIES_TITLE_FIELD = "id";

export const ExpenseCategoriesTitle = (record: TExpenseCategories): string => {
  return record.id?.toString() || String(record.id);
};
