import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { PayrollProcessingModuleBase } from "./base/payrollProcessing.module.base";
import { PayrollProcessingService } from "./payrollProcessing.service";
import { PayrollProcessingController } from "./payrollProcessing.controller";
import { PayrollProcessingResolver } from "./payrollProcessing.resolver";

@Module({
  imports: [PayrollProcessingModuleBase, forwardRef(() => AuthModule)],
  controllers: [PayrollProcessingController],
  providers: [PayrollProcessingService, PayrollProcessingResolver],
  exports: [PayrollProcessingService],
})
export class PayrollProcessingModule {}
