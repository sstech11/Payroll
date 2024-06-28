import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ApprovalLevelsAndRulesServiceBase } from "./base/approvalLevelsAndRules.service.base";

@Injectable()
export class ApprovalLevelsAndRulesService extends ApprovalLevelsAndRulesServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
