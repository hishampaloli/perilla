import createAssetController from "./createAsset.controller";
import getAllAssetsController from "./getAllAssets.controller";
import getSingleAssetController from "./getSingleAsset.controller";
import editAssetsController from "./editAssets.controller";
import deleteAssetController from "./deleteAsset.controller";

export = (dependencies: any) => {
  return {
    createAssetController: createAssetController(dependencies),
    getAllAssetsController: getAllAssetsController(dependencies),
    getSingleAssetController: getSingleAssetController(dependencies),
    editAssetsController: editAssetsController(dependencies),
    deleteAssetController: deleteAssetController(dependencies),
  };
};
