/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { ReportTemplates } from "./ReportTemplates";
import { ReportTemplatesCountArgs } from "./ReportTemplatesCountArgs";
import { ReportTemplatesFindManyArgs } from "./ReportTemplatesFindManyArgs";
import { ReportTemplatesFindUniqueArgs } from "./ReportTemplatesFindUniqueArgs";
import { DeleteReportTemplatesArgs } from "./DeleteReportTemplatesArgs";
import { ReportTemplatesService } from "../reportTemplates.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => ReportTemplates)
export class ReportTemplatesResolverBase {
  constructor(
    protected readonly service: ReportTemplatesService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "ReportTemplates",
    action: "read",
    possession: "any",
  })
  async _reportTemplatesItemsMeta(
    @graphql.Args() args: ReportTemplatesCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [ReportTemplates])
  @nestAccessControl.UseRoles({
    resource: "ReportTemplates",
    action: "read",
    possession: "any",
  })
  async reportTemplatesItems(
    @graphql.Args() args: ReportTemplatesFindManyArgs
  ): Promise<ReportTemplates[]> {
    return this.service.reportTemplatesItems(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => ReportTemplates, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "ReportTemplates",
    action: "read",
    possession: "own",
  })
  async reportTemplates(
    @graphql.Args() args: ReportTemplatesFindUniqueArgs
  ): Promise<ReportTemplates | null> {
    const result = await this.service.reportTemplates(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => ReportTemplates)
  @nestAccessControl.UseRoles({
    resource: "ReportTemplates",
    action: "delete",
    possession: "any",
  })
  async deleteReportTemplates(
    @graphql.Args() args: DeleteReportTemplatesArgs
  ): Promise<ReportTemplates | null> {
    try {
      return await this.service.deleteReportTemplates(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
