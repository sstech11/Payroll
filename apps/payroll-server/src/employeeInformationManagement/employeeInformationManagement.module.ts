import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { EmployeeInformationManagementModuleBase } from "./base/employeeInformationManagement.module.base";
import { EmployeeInformationManagementService } from "./employeeInformationManagement.service";
import { EmployeeInformationManagementController } from "./employeeInformationManagement.controller";
import { EmployeeInformationManagementResolver } from "./employeeInformationManagement.resolver";

@Module({
  imports: [
    EmployeeInformationManagementModuleBase,
    forwardRef(() => AuthModule),
  ],
  controllers: [EmployeeInformationManagementController],
  providers: [
    EmployeeInformationManagementService,
    EmployeeInformationManagementResolver,
  ],
  exports: [EmployeeInformationManagementService],
})
export class EmployeeInformationManagementModule {}
