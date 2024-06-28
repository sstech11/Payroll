import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ApprovalHierarchiesService } from "./approvalHierarchies.service";
import { ApprovalHierarchiesControllerBase } from "./base/approvalHierarchies.controller.base";

@swagger.ApiTags("approvalHierarchies")
@common.Controller("approvalHierarchies")
export class ApprovalHierarchiesController extends ApprovalHierarchiesControllerBase {
  constructor(
    protected readonly service: ApprovalHierarchiesService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
