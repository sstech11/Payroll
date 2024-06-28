import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ApprovalHierarchiesServiceBase } from "./base/approvalHierarchies.service.base";

@Injectable()
export class ApprovalHierarchiesService extends ApprovalHierarchiesServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
