import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ApprovalProcessModuleBase } from "./base/approvalProcess.module.base";
import { ApprovalProcessService } from "./approvalProcess.service";
import { ApprovalProcessController } from "./approvalProcess.controller";
import { ApprovalProcessResolver } from "./approvalProcess.resolver";

@Module({
  imports: [ApprovalProcessModuleBase, forwardRef(() => AuthModule)],
  controllers: [ApprovalProcessController],
  providers: [ApprovalProcessService, ApprovalProcessResolver],
  exports: [ApprovalProcessService],
})
export class ApprovalProcessModule {}
