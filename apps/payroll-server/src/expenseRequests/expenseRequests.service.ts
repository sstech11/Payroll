import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ExpenseRequestsServiceBase } from "./base/expenseRequests.service.base";

@Injectable()
export class ExpenseRequestsService extends ExpenseRequestsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
