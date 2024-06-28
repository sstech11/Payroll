import { Module } from "@nestjs/common";
import { StatutoryComplianceModule } from "./statutoryCompliance/statutoryCompliance.module";
import { TaxManagementModule } from "./taxManagement/taxManagement.module";
import { PayrollProcessingModule } from "./payrollProcessing/payrollProcessing.module";
import { EmployeeInformationManagementModule } from "./employeeInformationManagement/employeeInformationManagement.module";
import { LeaveAndAttendanceManagementModule } from "./leaveAndAttendanceManagement/leaveAndAttendanceManagement.module";
import { RazorPayXIntegrationModule } from "./razorPayXIntegration/razorPayXIntegration.module";
import { ExpenseRequestsModule } from "./expenseRequests/expenseRequests.module";
import { PreventiveMaintenanceModule } from "./preventiveMaintenance/preventiveMaintenance.module";
import { AdvanceTrackingModule } from "./advanceTracking/advanceTracking.module";
import { ReportTemplatesModule } from "./reportTemplates/reportTemplates.module";
import { ExpenseCategoriesModule } from "./expenseCategories/expenseCategories.module";
import { WarrantyPeriodsModule } from "./warrantyPeriods/warrantyPeriods.module";
import { NotificationAndEscalationModule } from "./notificationAndEscalation/notificationAndEscalation.module";
import { ApprovalLevelsAndRulesModule } from "./approvalLevelsAndRules/approvalLevelsAndRules.module";
import { ApprovalHierarchiesModule } from "./approvalHierarchies/approvalHierarchies.module";
import { ApprovalProcessModule } from "./approvalProcess/approvalProcess.module";
import { AssignedAssetsModule } from "./assignedAssets/assignedAssets.module";
import { UserModule } from "./user/user.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";

import { ACLModule } from "./auth/acl.module";
import { AuthModule } from "./auth/auth.module";

@Module({
  controllers: [],
  imports: [
    ACLModule,
    AuthModule,
    StatutoryComplianceModule,
    TaxManagementModule,
    PayrollProcessingModule,
    EmployeeInformationManagementModule,
    LeaveAndAttendanceManagementModule,
    RazorPayXIntegrationModule,
    ExpenseRequestsModule,
    PreventiveMaintenanceModule,
    AdvanceTrackingModule,
    ReportTemplatesModule,
    ExpenseCategoriesModule,
    WarrantyPeriodsModule,
    NotificationAndEscalationModule,
    ApprovalLevelsAndRulesModule,
    ApprovalHierarchiesModule,
    ApprovalProcessModule,
    AssignedAssetsModule,
    UserModule,
    HealthModule,
    PrismaModule,
    SecretsManagerModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: (configService: ConfigService) => {
        const playground = configService.get("GRAPHQL_PLAYGROUND");
        const introspection = configService.get("GRAPHQL_INTROSPECTION");
        return {
          autoSchemaFile: "schema.graphql",
          sortSchema: true,
          playground,
          introspection: playground || introspection,
        };
      },
      inject: [ConfigService],
      imports: [ConfigModule],
    }),
  ],
  providers: [],
})
export class AppModule {}
