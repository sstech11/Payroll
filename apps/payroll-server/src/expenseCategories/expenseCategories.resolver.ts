import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { ExpenseCategoriesResolverBase } from "./base/expenseCategories.resolver.base";
import { ExpenseCategories } from "./base/ExpenseCategories";
import { ExpenseCategoriesService } from "./expenseCategories.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => ExpenseCategories)
export class ExpenseCategoriesResolver extends ExpenseCategoriesResolverBase {
  constructor(
    protected readonly service: ExpenseCategoriesService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
