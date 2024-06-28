import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { RazorPayXIntegrationModuleBase } from "./base/razorPayXIntegration.module.base";
import { RazorPayXIntegrationService } from "./razorPayXIntegration.service";
import { RazorPayXIntegrationController } from "./razorPayXIntegration.controller";
import { RazorPayXIntegrationResolver } from "./razorPayXIntegration.resolver";

@Module({
  imports: [RazorPayXIntegrationModuleBase, forwardRef(() => AuthModule)],
  controllers: [RazorPayXIntegrationController],
  providers: [RazorPayXIntegrationService, RazorPayXIntegrationResolver],
  exports: [RazorPayXIntegrationService],
})
export class RazorPayXIntegrationModule {}
