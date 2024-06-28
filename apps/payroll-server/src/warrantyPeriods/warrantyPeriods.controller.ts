import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { WarrantyPeriodsService } from "./warrantyPeriods.service";
import { WarrantyPeriodsControllerBase } from "./base/warrantyPeriods.controller.base";

@swagger.ApiTags("warrantyPeriods")
@common.Controller("warrantyPeriods")
export class WarrantyPeriodsController extends WarrantyPeriodsControllerBase {
  constructor(
    protected readonly service: WarrantyPeriodsService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
