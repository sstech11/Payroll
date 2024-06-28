import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ExpenseRequestsService } from "./expenseRequests.service";
import { ExpenseRequestsControllerBase } from "./base/expenseRequests.controller.base";

@swagger.ApiTags("expenseRequests")
@common.Controller("expenseRequests")
export class ExpenseRequestsController extends ExpenseRequestsControllerBase {
  constructor(
    protected readonly service: ExpenseRequestsService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
