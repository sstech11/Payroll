import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { EmployeeInformationManagementService } from "./employeeInformationManagement.service";
import { EmployeeInformationManagementControllerBase } from "./base/employeeInformationManagement.controller.base";

@swagger.ApiTags("employeeInformationManagements")
@common.Controller("employeeInformationManagements")
export class EmployeeInformationManagementController extends EmployeeInformationManagementControllerBase {
  constructor(
    protected readonly service: EmployeeInformationManagementService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
