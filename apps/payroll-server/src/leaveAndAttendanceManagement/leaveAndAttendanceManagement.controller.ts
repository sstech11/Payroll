import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { LeaveAndAttendanceManagementService } from "./leaveAndAttendanceManagement.service";
import { LeaveAndAttendanceManagementControllerBase } from "./base/leaveAndAttendanceManagement.controller.base";

@swagger.ApiTags("leaveAndAttendanceManagements")
@common.Controller("leaveAndAttendanceManagements")
export class LeaveAndAttendanceManagementController extends LeaveAndAttendanceManagementControllerBase {
  constructor(
    protected readonly service: LeaveAndAttendanceManagementService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
