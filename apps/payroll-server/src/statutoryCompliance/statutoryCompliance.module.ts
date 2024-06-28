import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { StatutoryComplianceModuleBase } from "./base/statutoryCompliance.module.base";
import { StatutoryComplianceService } from "./statutoryCompliance.service";
import { StatutoryComplianceController } from "./statutoryCompliance.controller";
import { StatutoryComplianceResolver } from "./statutoryCompliance.resolver";

@Module({
  imports: [StatutoryComplianceModuleBase, forwardRef(() => AuthModule)],
  controllers: [StatutoryComplianceController],
  providers: [StatutoryComplianceService, StatutoryComplianceResolver],
  exports: [StatutoryComplianceService],
})
export class StatutoryComplianceModule {}
