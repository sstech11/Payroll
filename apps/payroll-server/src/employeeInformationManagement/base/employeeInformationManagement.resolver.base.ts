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
import { EmployeeInformationManagement } from "./EmployeeInformationManagement";
import { EmployeeInformationManagementCountArgs } from "./EmployeeInformationManagementCountArgs";
import { EmployeeInformationManagementFindManyArgs } from "./EmployeeInformationManagementFindManyArgs";
import { EmployeeInformationManagementFindUniqueArgs } from "./EmployeeInformationManagementFindUniqueArgs";
import { DeleteEmployeeInformationManagementArgs } from "./DeleteEmployeeInformationManagementArgs";
import { EmployeeInformationManagementService } from "../employeeInformationManagement.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => EmployeeInformationManagement)
export class EmployeeInformationManagementResolverBase {
  constructor(
    protected readonly service: EmployeeInformationManagementService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "EmployeeInformationManagement",
    action: "read",
    possession: "any",
  })
  async _employeeInformationManagementsMeta(
    @graphql.Args() args: EmployeeInformationManagementCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [EmployeeInformationManagement])
  @nestAccessControl.UseRoles({
    resource: "EmployeeInformationManagement",
    action: "read",
    possession: "any",
  })
  async employeeInformationManagements(
    @graphql.Args() args: EmployeeInformationManagementFindManyArgs
  ): Promise<EmployeeInformationManagement[]> {
    return this.service.employeeInformationManagements(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => EmployeeInformationManagement, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "EmployeeInformationManagement",
    action: "read",
    possession: "own",
  })
  async employeeInformationManagement(
    @graphql.Args() args: EmployeeInformationManagementFindUniqueArgs
  ): Promise<EmployeeInformationManagement | null> {
    const result = await this.service.employeeInformationManagement(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => EmployeeInformationManagement)
  @nestAccessControl.UseRoles({
    resource: "EmployeeInformationManagement",
    action: "delete",
    possession: "any",
  })
  async deleteEmployeeInformationManagement(
    @graphql.Args() args: DeleteEmployeeInformationManagementArgs
  ): Promise<EmployeeInformationManagement | null> {
    try {
      return await this.service.deleteEmployeeInformationManagement(args);
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
