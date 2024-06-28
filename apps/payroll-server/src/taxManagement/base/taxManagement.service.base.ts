/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, TaxManagement as PrismaTaxManagement } from "@prisma/client";

export class TaxManagementServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.TaxManagementCountArgs, "select">
  ): Promise<number> {
    return this.prisma.taxManagement.count(args);
  }

  async taxManagements(
    args: Prisma.TaxManagementFindManyArgs
  ): Promise<PrismaTaxManagement[]> {
    return this.prisma.taxManagement.findMany(args);
  }
  async taxManagement(
    args: Prisma.TaxManagementFindUniqueArgs
  ): Promise<PrismaTaxManagement | null> {
    return this.prisma.taxManagement.findUnique(args);
  }
  async createTaxManagement(
    args: Prisma.TaxManagementCreateArgs
  ): Promise<PrismaTaxManagement> {
    return this.prisma.taxManagement.create(args);
  }
  async updateTaxManagement(
    args: Prisma.TaxManagementUpdateArgs
  ): Promise<PrismaTaxManagement> {
    return this.prisma.taxManagement.update(args);
  }
  async deleteTaxManagement(
    args: Prisma.TaxManagementDeleteArgs
  ): Promise<PrismaTaxManagement> {
    return this.prisma.taxManagement.delete(args);
  }
}
