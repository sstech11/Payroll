import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ReportTemplatesService } from "./reportTemplates.service";
import { ReportTemplatesControllerBase } from "./base/reportTemplates.controller.base";

@swagger.ApiTags("reportTemplates")
@common.Controller("reportTemplates")
export class ReportTemplatesController extends ReportTemplatesControllerBase {
  constructor(
    protected readonly service: ReportTemplatesService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
