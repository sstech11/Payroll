import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { AdvanceTrackingService } from "./advanceTracking.service";
import { AdvanceTrackingControllerBase } from "./base/advanceTracking.controller.base";

@swagger.ApiTags("advanceTrackings")
@common.Controller("advanceTrackings")
export class AdvanceTrackingController extends AdvanceTrackingControllerBase {
  constructor(
    protected readonly service: AdvanceTrackingService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
