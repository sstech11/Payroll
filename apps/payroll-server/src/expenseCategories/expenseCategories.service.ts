import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ExpenseCategoriesServiceBase } from "./base/expenseCategories.service.base";

@Injectable()
export class ExpenseCategoriesService extends ExpenseCategoriesServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
