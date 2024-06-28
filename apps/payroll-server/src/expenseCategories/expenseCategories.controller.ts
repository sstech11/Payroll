import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ExpenseCategoriesService } from "./expenseCategories.service";
import { ExpenseCategoriesControllerBase } from "./base/expenseCategories.controller.base";

@swagger.ApiTags("expenseCategories")
@common.Controller("expenseCategories")
export class ExpenseCategoriesController extends ExpenseCategoriesControllerBase {
  constructor(
    protected readonly service: ExpenseCategoriesService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
