import { PayrollProcessingWhereInput } from "./PayrollProcessingWhereInput";
import { PayrollProcessingOrderByInput } from "./PayrollProcessingOrderByInput";

export type PayrollProcessingFindManyArgs = {
  where?: PayrollProcessingWhereInput;
  orderBy?: Array<PayrollProcessingOrderByInput>;
  skip?: number;
  take?: number;
};
