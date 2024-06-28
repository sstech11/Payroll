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
  ExpenseCategories as PrismaExpenseCategories,
} from "@prisma/client";

export class ExpenseCategoriesServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.ExpenseCategoriesCountArgs, "select">
  ): Promise<number> {
    return this.prisma.expenseCategories.count(args);
  }

  async expenseCategoriesItems(
    args: Prisma.ExpenseCategoriesFindManyArgs
  ): Promise<PrismaExpenseCategories[]> {
    return this.prisma.expenseCategories.findMany(args);
  }
  async expenseCategories(
    args: Prisma.ExpenseCategoriesFindUniqueArgs
  ): Promise<PrismaExpenseCategories | null> {
    return this.prisma.expenseCategories.findUnique(args);
  }
  async createExpenseCategories(
    args: Prisma.ExpenseCategoriesCreateArgs
  ): Promise<PrismaExpenseCategories> {
    return this.prisma.expenseCategories.create(args);
  }
  async updateExpenseCategories(
    args: Prisma.ExpenseCategoriesUpdateArgs
  ): Promise<PrismaExpenseCategories> {
    return this.prisma.expenseCategories.update(args);
  }
  async deleteExpenseCategories(
    args: Prisma.ExpenseCategoriesDeleteArgs
  ): Promise<PrismaExpenseCategories> {
    return this.prisma.expenseCategories.delete(args);
  }
}