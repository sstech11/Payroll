import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AdvanceTrackingResolverBase } from "./base/advanceTracking.resolver.base";
import { AdvanceTracking } from "./base/AdvanceTracking";
import { AdvanceTrackingService } from "./advanceTracking.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => AdvanceTracking)
export class AdvanceTrackingResolver extends AdvanceTrackingResolverBase {
  constructor(
    protected readonly service: AdvanceTrackingService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
