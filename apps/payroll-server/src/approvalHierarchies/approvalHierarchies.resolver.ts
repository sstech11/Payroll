import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { ApprovalHierarchiesResolverBase } from "./base/approvalHierarchies.resolver.base";
import { ApprovalHierarchies } from "./base/ApprovalHierarchies";
import { ApprovalHierarchiesService } from "./approvalHierarchies.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => ApprovalHierarchies)
export class ApprovalHierarchiesResolver extends ApprovalHierarchiesResolverBase {
  constructor(
    protected readonly service: ApprovalHierarchiesService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
