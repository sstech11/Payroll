import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { ReportTemplatesResolverBase } from "./base/reportTemplates.resolver.base";
import { ReportTemplates } from "./base/ReportTemplates";
import { ReportTemplatesService } from "./reportTemplates.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => ReportTemplates)
export class ReportTemplatesResolver extends ReportTemplatesResolverBase {
  constructor(
    protected readonly service: ReportTemplatesService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
