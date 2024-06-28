import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { AssignedAssetsService } from "./assignedAssets.service";
import { AssignedAssetsControllerBase } from "./base/assignedAssets.controller.base";

@swagger.ApiTags("assignedAssets")
@common.Controller("assignedAssets")
export class AssignedAssetsController extends AssignedAssetsControllerBase {
  constructor(
    protected readonly service: AssignedAssetsService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
