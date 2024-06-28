import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { NotificationAndEscalationServiceBase } from "./base/notificationAndEscalation.service.base";

@Injectable()
export class NotificationAndEscalationService extends NotificationAndEscalationServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
