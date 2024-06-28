import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ApprovalProcessServiceBase } from "./base/approvalProcess.service.base";

@Injectable()
export class ApprovalProcessService extends ApprovalProcessServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
