import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { LeaveAndAttendanceManagementServiceBase } from "./base/leaveAndAttendanceManagement.service.base";

@Injectable()
export class LeaveAndAttendanceManagementService extends LeaveAndAttendanceManagementServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
