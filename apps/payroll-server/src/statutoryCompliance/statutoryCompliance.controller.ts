import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { StatutoryComplianceService } from "./statutoryCompliance.service";
import { StatutoryComplianceControllerBase } from "./base/statutoryCompliance.controller.base";

@swagger.ApiTags("statutoryCompliances")
@common.Controller("statutoryCompliances")
export class StatutoryComplianceController extends StatutoryComplianceControllerBase {
  constructor(
    protected readonly service: StatutoryComplianceService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
