import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { NotificationAndEscalationService } from "./notificationAndEscalation.service";
import { NotificationAndEscalationControllerBase } from "./base/notificationAndEscalation.controller.base";

@swagger.ApiTags("notificationAndEscalations")
@common.Controller("notificationAndEscalations")
export class NotificationAndEscalationController extends NotificationAndEscalationControllerBase {
  constructor(
    protected readonly service: NotificationAndEscalationService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
