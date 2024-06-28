import { AssignedAssets as TAssignedAssets } from "../api/assignedAssets/AssignedAssets";

export const ASSIGNEDASSETS_TITLE_FIELD = "id";

export const AssignedAssetsTitle = (record: TAssignedAssets): string => {
  return record.id?.toString() || String(record.id);
};
