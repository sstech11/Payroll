import { NotificationAndEscalation as TNotificationAndEscalation } from "../api/notificationAndEscalation/NotificationAndEscalation";

export const NOTIFICATIONANDESCALATION_TITLE_FIELD = "id";

export const NotificationAndEscalationTitle = (
  record: TNotificationAndEscalation
): string => {
  return record.id?.toString() || String(record.id);
};
