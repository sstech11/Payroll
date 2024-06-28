import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ReportTemplatesServiceBase } from "./base/reportTemplates.service.base";

@Injectable()
export class ReportTemplatesService extends ReportTemplatesServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
