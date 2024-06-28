import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { TaxManagementService } from "./taxManagement.service";
import { TaxManagementControllerBase } from "./base/taxManagement.controller.base";

@swagger.ApiTags("taxManagements")
@common.Controller("taxManagements")
export class TaxManagementController extends TaxManagementControllerBase {
  constructor(
    protected readonly service: TaxManagementService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
