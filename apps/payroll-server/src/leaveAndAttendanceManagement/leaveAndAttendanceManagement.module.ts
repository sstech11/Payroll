import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { LeaveAndAttendanceManagementModuleBase } from "./base/leaveAndAttendanceManagement.module.base";
import { LeaveAndAttendanceManagementService } from "./leaveAndAttendanceManagement.service";
import { LeaveAndAttendanceManagementController } from "./leaveAndAttendanceManagement.controller";
import { LeaveAndAttendanceManagementResolver } from "./leaveAndAttendanceManagement.resolver";

@Module({
  imports: [
    LeaveAndAttendanceManagementModuleBase,
    forwardRef(() => AuthModule),
  ],
  controllers: [LeaveAndAttendanceManagementController],
  providers: [
    LeaveAndAttendanceManagementService,
    LeaveAndAttendanceManagementResolver,
  ],
  exports: [LeaveAndAttendanceManagementService],
})
export class LeaveAndAttendanceManagementModule {}
