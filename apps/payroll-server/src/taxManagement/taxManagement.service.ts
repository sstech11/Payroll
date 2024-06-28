import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TaxManagementServiceBase } from "./base/taxManagement.service.base";

@Injectable()
export class TaxManagementService extends TaxManagementServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
