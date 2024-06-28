import { EmployeeInformationManagement as TEmployeeInformationManagement } from "../api/employeeInformationManagement/EmployeeInformationManagement";

export const EMPLOYEEINFORMATIONMANAGEMENT_TITLE_FIELD = "id";

export const EmployeeInformationManagementTitle = (
  record: TEmployeeInformationManagement
): string => {
  return record.id?.toString() || String(record.id);
};
