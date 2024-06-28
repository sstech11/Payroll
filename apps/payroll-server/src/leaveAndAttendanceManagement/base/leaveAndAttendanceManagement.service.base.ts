/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  LeaveAndAttendanceManagement as PrismaLeaveAndAttendanceManagement,
} from "@prisma/client";

export class LeaveAndAttendanceManagementServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.LeaveAndAttendanceManagementCountArgs, "select">
  ): Promise<number> {
    return this.prisma.leaveAndAttendanceManagement.count(args);
  }

  async leaveAndAttendanceManagements(
    args: Prisma.LeaveAndAttendanceManagementFindManyArgs
  ): Promise<PrismaLeaveAndAttendanceManagement[]> {
    return this.prisma.leaveAndAttendanceManagement.findMany(args);
  }
  async leaveAndAttendanceManagement(
    args: Prisma.LeaveAndAttendanceManagementFindUniqueArgs
  ): Promise<PrismaLeaveAndAttendanceManagement | null> {
    return this.prisma.leaveAndAttendanceManagement.findUnique(args);
  }
  async createLeaveAndAttendanceManagement(
    args: Prisma.LeaveAndAttendanceManagementCreateArgs
  ): Promise<PrismaLeaveAndAttendanceManagement> {
    return this.prisma.leaveAndAttendanceManagement.create(args);
  }
  async updateLeaveAndAttendanceManagement(
    args: Prisma.LeaveAndAttendanceManagementUpdateArgs
  ): Promise<PrismaLeaveAndAttendanceManagement> {
    return this.prisma.leaveAndAttendanceManagement.update(args);
  }
  async deleteLeaveAndAttendanceManagement(
    args: Prisma.LeaveAndAttendanceManagementDeleteArgs
  ): Promise<PrismaLeaveAndAttendanceManagement> {
    return this.prisma.leaveAndAttendanceManagement.delete(args);
  }
}
