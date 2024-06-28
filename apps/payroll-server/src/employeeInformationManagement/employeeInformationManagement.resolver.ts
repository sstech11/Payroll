import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { EmployeeInformationManagementResolverBase } from "./base/employeeInformationManagement.resolver.base";
import { EmployeeInformationManagement } from "./base/EmployeeInformationManagement";
import { EmployeeInformationManagementService } from "./employeeInformationManagement.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => EmployeeInformationManagement)
export class EmployeeInformationManagementResolver extends EmployeeInformationManagementResolverBase {
  constructor(
    protected readonly service: EmployeeInformationManagementService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
