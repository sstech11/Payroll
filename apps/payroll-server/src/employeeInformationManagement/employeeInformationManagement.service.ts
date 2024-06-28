import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { EmployeeInformationManagementServiceBase } from "./base/employeeInformationManagement.service.base";

@Injectable()
export class EmployeeInformationManagementService extends EmployeeInformationManagementServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
