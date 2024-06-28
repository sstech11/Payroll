import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AdvanceTrackingServiceBase } from "./base/advanceTracking.service.base";

@Injectable()
export class AdvanceTrackingService extends AdvanceTrackingServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
