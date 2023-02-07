import express from "express";
import {
  currentTenant,
  isHrOrAdmin,
  requireTenantOrUser,
  currentUser,
  requireUserAuth,
} from "@hr-management/common";

import { assetController } from "../../controller";

export = (dependencies: any) => {
  const router = express.Router();
  const {
    createAssetController,
    deleteAssetController,
    editAssetsController,
    getAllAssetsController,
    getSingleAssetController,
  } = assetController(dependencies);

  router.post(
    "/createAsset",
    currentUser,
    requireUserAuth,
    createAssetController
  );

  router.get(
    "/allAssets",
    currentUser,
    currentTenant,
    requireTenantOrUser,
    isHrOrAdmin,
    getAllAssetsController
  );

  router.get(
    "/:assetId",
    currentUser,
    currentTenant,
    requireTenantOrUser,
    isHrOrAdmin,
    getSingleAssetController
  );

  router.put("/:assetId", currentUser, requireUserAuth, editAssetsController);

  router.delete(
    "/:assetId",
    currentUser,
    requireUserAuth,
    deleteAssetController
  );
  return router;
};
