import { AssignedAssetsWhereInput } from "./AssignedAssetsWhereInput";
import { AssignedAssetsOrderByInput } from "./AssignedAssetsOrderByInput";

export type AssignedAssetsFindManyArgs = {
  where?: AssignedAssetsWhereInput;
  orderBy?: Array<AssignedAssetsOrderByInput>;
  skip?: number;
  take?: number;
};
