import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PayrollProcessingServiceBase } from "./base/payrollProcessing.service.base";

@Injectable()
export class PayrollProcessingService extends PayrollProcessingServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
