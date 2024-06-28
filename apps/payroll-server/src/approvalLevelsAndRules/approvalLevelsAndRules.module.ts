import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ApprovalLevelsAndRulesModuleBase } from "./base/approvalLevelsAndRules.module.base";
import { ApprovalLevelsAndRulesService } from "./approvalLevelsAndRules.service";
import { ApprovalLevelsAndRulesController } from "./approvalLevelsAndRules.controller";
import { ApprovalLevelsAndRulesResolver } from "./approvalLevelsAndRules.resolver";

@Module({
  imports: [ApprovalLevelsAndRulesModuleBase, forwardRef(() => AuthModule)],
  controllers: [ApprovalLevelsAndRulesController],
  providers: [ApprovalLevelsAndRulesService, ApprovalLevelsAndRulesResolver],
  exports: [ApprovalLevelsAndRulesService],
})
export class ApprovalLevelsAndRulesModule {}
