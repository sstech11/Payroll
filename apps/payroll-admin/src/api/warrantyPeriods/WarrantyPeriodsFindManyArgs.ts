import { WarrantyPeriodsWhereInput } from "./WarrantyPeriodsWhereInput";
import { WarrantyPeriodsOrderByInput } from "./WarrantyPeriodsOrderByInput";

export type WarrantyPeriodsFindManyArgs = {
  where?: WarrantyPeriodsWhereInput;
  orderBy?: Array<WarrantyPeriodsOrderByInput>;
  skip?: number;
  take?: number;
};
