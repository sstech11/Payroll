import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ExpenseCategoriesModuleBase } from "./base/expenseCategories.module.base";
import { ExpenseCategoriesService } from "./expenseCategories.service";
import { ExpenseCategoriesController } from "./expenseCategories.controller";
import { ExpenseCategoriesResolver } from "./expenseCategories.resolver";

@Module({
  imports: [ExpenseCategoriesModuleBase, forwardRef(() => AuthModule)],
  controllers: [ExpenseCategoriesController],
  providers: [ExpenseCategoriesService, ExpenseCategoriesResolver],
  exports: [ExpenseCategoriesService],
})
export class ExpenseCategoriesModule {}
