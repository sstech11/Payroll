import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { NotificationAndEscalationModuleBase } from "./base/notificationAndEscalation.module.base";
import { NotificationAndEscalationService } from "./notificationAndEscalation.service";
import { NotificationAndEscalationController } from "./notificationAndEscalation.controller";
import { NotificationAndEscalationResolver } from "./notificationAndEscalation.resolver";

@Module({
  imports: [NotificationAndEscalationModuleBase, forwardRef(() => AuthModule)],
  controllers: [NotificationAndEscalationController],
  providers: [
    NotificationAndEscalationService,
    NotificationAndEscalationResolver,
  ],
  exports: [NotificationAndEscalationService],
})
export class NotificationAndEscalationModule {}
