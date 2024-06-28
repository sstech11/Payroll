import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { ExpenseRequestsResolverBase } from "./base/expenseRequests.resolver.base";
import { ExpenseRequests } from "./base/ExpenseRequests";
import { ExpenseRequestsService } from "./expenseRequests.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => ExpenseRequests)
export class ExpenseRequestsResolver extends ExpenseRequestsResolverBase {
  constructor(
    protected readonly service: ExpenseRequestsService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
