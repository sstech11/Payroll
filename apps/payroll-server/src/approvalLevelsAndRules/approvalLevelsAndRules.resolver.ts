import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { ApprovalLevelsAndRulesResolverBase } from "./base/approvalLevelsAndRules.resolver.base";
import { ApprovalLevelsAndRules } from "./base/ApprovalLevelsAndRules";
import { ApprovalLevelsAndRulesService } from "./approvalLevelsAndRules.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => ApprovalLevelsAndRules)
export class ApprovalLevelsAndRulesResolver extends ApprovalLevelsAndRulesResolverBase {
  constructor(
    protected readonly service: ApprovalLevelsAndRulesService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
