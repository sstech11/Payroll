import { EmployeeInformationManagementWhereInput } from "./EmployeeInformationManagementWhereInput";
import { EmployeeInformationManagementOrderByInput } from "./EmployeeInformationManagementOrderByInput";

export type EmployeeInformationManagementFindManyArgs = {
  where?: EmployeeInformationManagementWhereInput;
  orderBy?: Array<EmployeeInformationManagementOrderByInput>;
  skip?: number;
  take?: number;
};
