import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { WarrantyPeriodsServiceBase } from "./base/warrantyPeriods.service.base";

@Injectable()
export class WarrantyPeriodsService extends WarrantyPeriodsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
