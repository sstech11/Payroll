import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ExpenseRequestsModuleBase } from "./base/expenseRequests.module.base";
import { ExpenseRequestsService } from "./expenseRequests.service";
import { ExpenseRequestsController } from "./expenseRequests.controller";
import { ExpenseRequestsResolver } from "./expenseRequests.resolver";

@Module({
  imports: [ExpenseRequestsModuleBase, forwardRef(() => AuthModule)],
  controllers: [ExpenseRequestsController],
  providers: [ExpenseRequestsService, ExpenseRequestsResolver],
  exports: [ExpenseRequestsService],
})
export class ExpenseRequestsModule {}
