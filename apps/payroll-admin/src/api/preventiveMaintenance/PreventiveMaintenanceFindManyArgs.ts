import { PreventiveMaintenanceWhereInput } from "./PreventiveMaintenanceWhereInput";
import { PreventiveMaintenanceOrderByInput } from "./PreventiveMaintenanceOrderByInput";

export type PreventiveMaintenanceFindManyArgs = {
  where?: PreventiveMaintenanceWhereInput;
  orderBy?: Array<PreventiveMaintenanceOrderByInput>;
  skip?: number;
  take?: number;
};
