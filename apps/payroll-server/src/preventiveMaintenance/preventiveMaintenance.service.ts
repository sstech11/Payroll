import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PreventiveMaintenanceServiceBase } from "./base/preventiveMaintenance.service.base";

@Injectable()
export class PreventiveMaintenanceService extends PreventiveMaintenanceServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
