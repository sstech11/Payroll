import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { WarrantyPeriodsResolverBase } from "./base/warrantyPeriods.resolver.base";
import { WarrantyPeriods } from "./base/WarrantyPeriods";
import { WarrantyPeriodsService } from "./warrantyPeriods.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => WarrantyPeriods)
export class WarrantyPeriodsResolver extends WarrantyPeriodsResolverBase {
  constructor(
    protected readonly service: WarrantyPeriodsService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
