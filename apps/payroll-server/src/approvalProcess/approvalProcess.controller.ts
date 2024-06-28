import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ApprovalProcessService } from "./approvalProcess.service";
import { ApprovalProcessControllerBase } from "./base/approvalProcess.controller.base";

@swagger.ApiTags("approvalProcesses")
@common.Controller("approvalProcesses")
export class ApprovalProcessController extends ApprovalProcessControllerBase {
  constructor(
    protected readonly service: ApprovalProcessService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
