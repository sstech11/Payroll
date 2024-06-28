import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { AssignedAssetsModuleBase } from "./base/assignedAssets.module.base";
import { AssignedAssetsService } from "./assignedAssets.service";
import { AssignedAssetsController } from "./assignedAssets.controller";
import { AssignedAssetsResolver } from "./assignedAssets.resolver";

@Module({
  imports: [AssignedAssetsModuleBase, forwardRef(() => AuthModule)],
  controllers: [AssignedAssetsController],
  providers: [AssignedAssetsService, AssignedAssetsResolver],
  exports: [AssignedAssetsService],
})
export class AssignedAssetsModule {}
