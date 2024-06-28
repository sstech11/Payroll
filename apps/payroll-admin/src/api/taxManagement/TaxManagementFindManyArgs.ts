import { TaxManagementWhereInput } from "./TaxManagementWhereInput";
import { TaxManagementOrderByInput } from "./TaxManagementOrderByInput";

export type TaxManagementFindManyArgs = {
  where?: TaxManagementWhereInput;
  orderBy?: Array<TaxManagementOrderByInput>;
  skip?: number;
  take?: number;
};
