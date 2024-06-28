import { LeaveAndAttendanceManagement as TLeaveAndAttendanceManagement } from "../api/leaveAndAttendanceManagement/LeaveAndAttendanceManagement";

export const LEAVEANDATTENDANCEMANAGEMENT_TITLE_FIELD = "id";

export const LeaveAndAttendanceManagementTitle = (
  record: TLeaveAndAttendanceManagement
): string => {
  return record.id?.toString() || String(record.id);
};
