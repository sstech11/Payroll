import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { StatutoryComplianceServiceBase } from "./base/statutoryCompliance.service.base";

@Injectable()
export class StatutoryComplianceService extends StatutoryComplianceServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
