import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { AdvanceTrackingModuleBase } from "./base/advanceTracking.module.base";
import { AdvanceTrackingService } from "./advanceTracking.service";
import { AdvanceTrackingController } from "./advanceTracking.controller";
import { AdvanceTrackingResolver } from "./advanceTracking.resolver";

@Module({
  imports: [AdvanceTrackingModuleBase, forwardRef(() => AuthModule)],
  controllers: [AdvanceTrackingController],
  providers: [AdvanceTrackingService, AdvanceTrackingResolver],
  exports: [AdvanceTrackingService],
})
export class AdvanceTrackingModule {}
