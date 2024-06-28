import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { RazorPayXIntegrationServiceBase } from "./base/razorPayXIntegration.service.base";

@Injectable()
export class RazorPayXIntegrationService extends RazorPayXIntegrationServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
