import { AdvanceTracking as TAdvanceTracking } from "../api/advanceTracking/AdvanceTracking";

export const ADVANCETRACKING_TITLE_FIELD = "id";

export const AdvanceTrackingTitle = (record: TAdvanceTracking): string => {
  return record.id?.toString() || String(record.id);
};
