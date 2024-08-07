/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { ApprovalProcessService } from "../approvalProcess.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { ApprovalProcessCreateInput } from "./ApprovalProcessCreateInput";
import { ApprovalProcess } from "./ApprovalProcess";
import { ApprovalProcessFindManyArgs } from "./ApprovalProcessFindManyArgs";
import { ApprovalProcessWhereUniqueInput } from "./ApprovalProcessWhereUniqueInput";
import { ApprovalProcessUpdateInput } from "./ApprovalProcessUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class ApprovalProcessControllerBase {
  constructor(
    protected readonly service: ApprovalProcessService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: ApprovalProcess })
  @nestAccessControl.UseRoles({
    resource: "ApprovalProcess",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createApprovalProcess(
    @common.Body() data: ApprovalProcessCreateInput
  ): Promise<ApprovalProcess> {
    return await this.service.createApprovalProcess({
      data: data,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [ApprovalProcess] })
  @ApiNestedQuery(ApprovalProcessFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "ApprovalProcess",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async approvalProcesses(
    @common.Req() request: Request
  ): Promise<ApprovalProcess[]> {
    const args = plainToClass(ApprovalProcessFindManyArgs, request.query);
    return this.service.approvalProcesses({
      ...args,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: ApprovalProcess })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "ApprovalProcess",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async approvalProcess(
    @common.Param() params: ApprovalProcessWhereUniqueInput
  ): Promise<ApprovalProcess | null> {
    const result = await this.service.approvalProcess({
      where: params,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: ApprovalProcess })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "ApprovalProcess",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateApprovalProcess(
    @common.Param() params: ApprovalProcessWhereUniqueInput,
    @common.Body() data: ApprovalProcessUpdateInput
  ): Promise<ApprovalProcess | null> {
    try {
      return await this.service.updateApprovalProcess({
        where: params,
        data: data,
        select: {
          createdAt: true,
          id: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: ApprovalProcess })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "ApprovalProcess",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteApprovalProcess(
    @common.Param() params: ApprovalProcessWhereUniqueInput
  ): Promise<ApprovalProcess | null> {
    try {
      return await this.service.deleteApprovalProcess({
        where: params,
        select: {
          createdAt: true,
          id: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
