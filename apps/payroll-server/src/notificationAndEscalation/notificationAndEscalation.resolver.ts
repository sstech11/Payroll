import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { NotificationAndEscalationResolverBase } from "./base/notificationAndEscalation.resolver.base";
import { NotificationAndEscalation } from "./base/NotificationAndEscalation";
import { NotificationAndEscalationService } from "./notificationAndEscalation.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => NotificationAndEscalation)
export class NotificationAndEscalationResolver extends NotificationAndEscalationResolverBase {
  constructor(
    protected readonly service: NotificationAndEscalationService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
