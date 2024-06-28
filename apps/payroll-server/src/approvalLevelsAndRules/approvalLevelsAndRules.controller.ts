import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ApprovalLevelsAndRulesService } from "./approvalLevelsAndRules.service";
import { ApprovalLevelsAndRulesControllerBase } from "./base/approvalLevelsAndRules.controller.base";

@swagger.ApiTags("approvalLevelsAndRules")
@common.Controller("approvalLevelsAndRules")
export class ApprovalLevelsAndRulesController extends ApprovalLevelsAndRulesControllerBase {
  constructor(
    protected readonly service: ApprovalLevelsAndRulesService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
