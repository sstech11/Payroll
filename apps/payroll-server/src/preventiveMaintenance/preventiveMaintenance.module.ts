import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { PreventiveMaintenanceModuleBase } from "./base/preventiveMaintenance.module.base";
import { PreventiveMaintenanceService } from "./preventiveMaintenance.service";
import { PreventiveMaintenanceController } from "./preventiveMaintenance.controller";
import { PreventiveMaintenanceResolver } from "./preventiveMaintenance.resolver";

@Module({
  imports: [PreventiveMaintenanceModuleBase, forwardRef(() => AuthModule)],
  controllers: [PreventiveMaintenanceController],
  providers: [PreventiveMaintenanceService, PreventiveMaintenanceResolver],
  exports: [PreventiveMaintenanceService],
})
export class PreventiveMaintenanceModule {}
