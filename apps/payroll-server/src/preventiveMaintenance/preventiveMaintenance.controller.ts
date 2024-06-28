import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { PreventiveMaintenanceService } from "./preventiveMaintenance.service";
import { PreventiveMaintenanceControllerBase } from "./base/preventiveMaintenance.controller.base";

@swagger.ApiTags("preventiveMaintenances")
@common.Controller("preventiveMaintenances")
export class PreventiveMaintenanceController extends PreventiveMaintenanceControllerBase {
  constructor(
    protected readonly service: PreventiveMaintenanceService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
