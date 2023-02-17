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
  const { createApplicationController } = applicationController(dependencies);

  router.post("/apply", createApplicationController);
  return router;
};
