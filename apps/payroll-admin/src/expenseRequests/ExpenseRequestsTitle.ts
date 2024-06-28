import { ExpenseRequests as TExpenseRequests } from "../api/expenseRequests/ExpenseRequests";

export const EXPENSEREQUESTS_TITLE_FIELD = "id";

export const ExpenseRequestsTitle = (record: TExpenseRequests): string => {
  return record.id?.toString() || String(record.id);
};
