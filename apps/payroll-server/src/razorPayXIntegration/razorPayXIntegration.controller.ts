import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { RazorPayXIntegrationService } from "./razorPayXIntegration.service";
import { RazorPayXIntegrationControllerBase } from "./base/razorPayXIntegration.controller.base";

@swagger.ApiTags("razorPayXIntegrations")
@common.Controller("razorPayXIntegrations")
export class RazorPayXIntegrationController extends RazorPayXIntegrationControllerBase {
  constructor(
    protected readonly service: RazorPayXIntegrationService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
