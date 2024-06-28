import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { StatutoryComplianceResolverBase } from "./base/statutoryCompliance.resolver.base";
import { StatutoryCompliance } from "./base/StatutoryCompliance";
import { StatutoryComplianceService } from "./statutoryCompliance.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => StatutoryCompliance)
export class StatutoryComplianceResolver extends StatutoryComplianceResolverBase {
  constructor(
    protected readonly service: StatutoryComplianceService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
