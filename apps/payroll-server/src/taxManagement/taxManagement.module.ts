import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { TaxManagementModuleBase } from "./base/taxManagement.module.base";
import { TaxManagementService } from "./taxManagement.service";
import { TaxManagementController } from "./taxManagement.controller";
import { TaxManagementResolver } from "./taxManagement.resolver";

@Module({
  imports: [TaxManagementModuleBase, forwardRef(() => AuthModule)],
  controllers: [TaxManagementController],
  providers: [TaxManagementService, TaxManagementResolver],
  exports: [TaxManagementService],
})
export class TaxManagementModule {}
