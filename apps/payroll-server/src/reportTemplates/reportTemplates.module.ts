import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ReportTemplatesModuleBase } from "./base/reportTemplates.module.base";
import { ReportTemplatesService } from "./reportTemplates.service";
import { ReportTemplatesController } from "./reportTemplates.controller";
import { ReportTemplatesResolver } from "./reportTemplates.resolver";

@Module({
  imports: [ReportTemplatesModuleBase, forwardRef(() => AuthModule)],
  controllers: [ReportTemplatesController],
  providers: [ReportTemplatesService, ReportTemplatesResolver],
  exports: [ReportTemplatesService],
})
export class ReportTemplatesModule {}
