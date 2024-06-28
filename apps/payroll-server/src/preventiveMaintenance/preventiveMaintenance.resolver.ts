import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { PreventiveMaintenanceResolverBase } from "./base/preventiveMaintenance.resolver.base";
import { PreventiveMaintenance } from "./base/PreventiveMaintenance";
import { PreventiveMaintenanceService } from "./preventiveMaintenance.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => PreventiveMaintenance)
export class PreventiveMaintenanceResolver extends PreventiveMaintenanceResolverBase {
  constructor(
    protected readonly service: PreventiveMaintenanceService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
