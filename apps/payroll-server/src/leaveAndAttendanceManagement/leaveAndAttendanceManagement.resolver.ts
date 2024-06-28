import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { LeaveAndAttendanceManagementResolverBase } from "./base/leaveAndAttendanceManagement.resolver.base";
import { LeaveAndAttendanceManagement } from "./base/LeaveAndAttendanceManagement";
import { LeaveAndAttendanceManagementService } from "./leaveAndAttendanceManagement.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => LeaveAndAttendanceManagement)
export class LeaveAndAttendanceManagementResolver extends LeaveAndAttendanceManagementResolverBase {
  constructor(
    protected readonly service: LeaveAndAttendanceManagementService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
