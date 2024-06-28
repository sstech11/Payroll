import { ReportTemplates as TReportTemplates } from "../api/reportTemplates/ReportTemplates";

export const REPORTTEMPLATES_TITLE_FIELD = "id";

export const ReportTemplatesTitle = (record: TReportTemplates): string => {
  return record.id?.toString() || String(record.id);
};
