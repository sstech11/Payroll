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
  PayrollProcessing as PrismaPayrollProcessing,
} from "@prisma/client";

export class PayrollProcessingServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.PayrollProcessingCountArgs, "select">
  ): Promise<number> {
    return this.prisma.payrollProcessing.count(args);
  }

  async payrollProcessings(
    args: Prisma.PayrollProcessingFindManyArgs
  ): Promise<PrismaPayrollProcessing[]> {
    return this.prisma.payrollProcessing.findMany(args);
  }
  async payrollProcessing(
    args: Prisma.PayrollProcessingFindUniqueArgs
  ): Promise<PrismaPayrollProcessing | null> {
    return this.prisma.payrollProcessing.findUnique(args);
  }
  async createPayrollProcessing(
    args: Prisma.PayrollProcessingCreateArgs
  ): Promise<PrismaPayrollProcessing> {
    return this.prisma.payrollProcessing.create(args);
  }
  async updatePayrollProcessing(
    args: Prisma.PayrollProcessingUpdateArgs
  ): Promise<PrismaPayrollProcessing> {
    return this.prisma.payrollProcessing.update(args);
  }
  async deletePayrollProcessing(
    args: Prisma.PayrollProcessingDeleteArgs
  ): Promise<PrismaPayrollProcessing> {
    return this.prisma.payrollProcessing.delete(args);
  }
}
