import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AssignedAssetsResolverBase } from "./base/assignedAssets.resolver.base";
import { AssignedAssets } from "./base/AssignedAssets";
import { AssignedAssetsService } from "./assignedAssets.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => AssignedAssets)
export class AssignedAssetsResolver extends AssignedAssetsResolverBase {
  constructor(
    protected readonly service: AssignedAssetsService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
