import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ApprovalHierarchiesModuleBase } from "./base/approvalHierarchies.module.base";
import { ApprovalHierarchiesService } from "./approvalHierarchies.service";
import { ApprovalHierarchiesController } from "./approvalHierarchies.controller";
import { ApprovalHierarchiesResolver } from "./approvalHierarchies.resolver";

@Module({
  imports: [ApprovalHierarchiesModuleBase, forwardRef(() => AuthModule)],
  controllers: [ApprovalHierarchiesController],
  providers: [ApprovalHierarchiesService, ApprovalHierarchiesResolver],
  exports: [ApprovalHierarchiesService],
})
export class ApprovalHierarchiesModule {}
