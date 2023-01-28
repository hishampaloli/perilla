import express from "express";
import {
  currentTenant,
  requireTenantAuth,
  isHrOrAdmin,
  requireTenantOrUser,
  currentUser,
} from "@hr-management/common";

import { projectController } from "../../controller";

export = (dependencies: any) => {
  const router = express.Router();
  const { createProjectController } = projectController(dependencies);

  router.post(
    "/create",
    isHrOrAdmin,
    requireTenantOrUser,
    createProjectController
  );

  return router;
};
