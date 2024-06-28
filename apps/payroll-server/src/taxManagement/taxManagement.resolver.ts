import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { TaxManagementResolverBase } from "./base/taxManagement.resolver.base";
import { TaxManagement } from "./base/TaxManagement";
import { TaxManagementService } from "./taxManagement.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => TaxManagement)
export class TaxManagementResolver extends TaxManagementResolverBase {
  constructor(
    protected readonly service: TaxManagementService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
