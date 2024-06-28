import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { ApprovalProcessResolverBase } from "./base/approvalProcess.resolver.base";
import { ApprovalProcess } from "./base/ApprovalProcess";
import { ApprovalProcessService } from "./approvalProcess.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => ApprovalProcess)
export class ApprovalProcessResolver extends ApprovalProcessResolverBase {
  constructor(
    protected readonly service: ApprovalProcessService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
