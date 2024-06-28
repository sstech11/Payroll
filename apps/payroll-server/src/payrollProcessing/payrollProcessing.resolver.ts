import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { PayrollProcessingResolverBase } from "./base/payrollProcessing.resolver.base";
import { PayrollProcessing } from "./base/PayrollProcessing";
import { PayrollProcessingService } from "./payrollProcessing.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => PayrollProcessing)
export class PayrollProcessingResolver extends PayrollProcessingResolverBase {
  constructor(
    protected readonly service: PayrollProcessingService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
