import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { PayrollProcessingService } from "./payrollProcessing.service";
import { PayrollProcessingControllerBase } from "./base/payrollProcessing.controller.base";

@swagger.ApiTags("payrollProcessings")
@common.Controller("payrollProcessings")
export class PayrollProcessingController extends PayrollProcessingControllerBase {
  constructor(
    protected readonly service: PayrollProcessingService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
