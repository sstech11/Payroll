import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AssignedAssetsServiceBase } from "./base/assignedAssets.service.base";

@Injectable()
export class AssignedAssetsService extends AssignedAssetsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
