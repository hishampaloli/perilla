import express from "express";
import {
  currentTenant,
  requireTenantAuth,
  isHrOrAdmin,
  requireTenantOrUser,
  currentUser,
} from "@hr-management/common";

import { applicationController } from "../../controller";

export = (dependencies: any) => {
  const router = express.Router();
  const {
    createApplicationController,
    changeApplicationStatusController,
    getAllApplicationController,
    getMyApplicationController,
    viewApplicationAdminController,
    viewMyApplicationController,
  } = applicationController(dependencies);

  router.post("/apply", createApplicationController);

  router.get(
    "/allApplications",
    currentTenant,
    requireTenantAuth,
    getAllApplicationController
  );

  router.put("/myApplications", getMyApplicationController);
  router.get(
    "/viewApplication/:applicationId",
    currentTenant,
    requireTenantAuth,
    viewApplicationAdminController
  );

  router.put("/viewMyApplication", viewMyApplicationController);
  router.patch(
    "/applicationStatus",
    currentTenant,
    requireTenantAuth,
    changeApplicationStatusController
  );
  return router;
};
