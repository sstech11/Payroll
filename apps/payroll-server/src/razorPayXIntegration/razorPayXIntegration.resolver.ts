import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { RazorPayXIntegrationResolverBase } from "./base/razorPayXIntegration.resolver.base";
import { RazorPayXIntegration } from "./base/RazorPayXIntegration";
import { RazorPayXIntegrationService } from "./razorPayXIntegration.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => RazorPayXIntegration)
export class RazorPayXIntegrationResolver extends RazorPayXIntegrationResolverBase {
  constructor(
    protected readonly service: RazorPayXIntegrationService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
