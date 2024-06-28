import { ReportTemplatesWhereInput } from "./ReportTemplatesWhereInput";
import { ReportTemplatesOrderByInput } from "./ReportTemplatesOrderByInput";

export type ReportTemplatesFindManyArgs = {
  where?: ReportTemplatesWhereInput;
  orderBy?: Array<ReportTemplatesOrderByInput>;
  skip?: number;
  take?: number;
};
