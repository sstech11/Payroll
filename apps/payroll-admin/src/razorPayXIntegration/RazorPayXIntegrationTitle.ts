import { RazorPayXIntegration as TRazorPayXIntegration } from "../api/razorPayXIntegration/RazorPayXIntegration";

export const RAZORPAYXINTEGRATION_TITLE_FIELD = "id";

export const RazorPayXIntegrationTitle = (
  record: TRazorPayXIntegration
): string => {
  return record.id?.toString() || String(record.id);
};
