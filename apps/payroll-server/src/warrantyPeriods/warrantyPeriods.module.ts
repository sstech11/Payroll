import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { WarrantyPeriodsModuleBase } from "./base/warrantyPeriods.module.base";
import { WarrantyPeriodsService } from "./warrantyPeriods.service";
import { WarrantyPeriodsController } from "./warrantyPeriods.controller";
import { WarrantyPeriodsResolver } from "./warrantyPeriods.resolver";

@Module({
  imports: [WarrantyPeriodsModuleBase, forwardRef(() => AuthModule)],
  controllers: [WarrantyPeriodsController],
  providers: [WarrantyPeriodsService, WarrantyPeriodsResolver],
  exports: [WarrantyPeriodsService],
})
export class WarrantyPeriodsModule {}
