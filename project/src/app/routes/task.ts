import express from "express";
import {
  currentTenant,
  requireTenantAuth,
  isHrOrAdmin,
  requireTenantOrUser,
  isHr,
  currentUser,
  requireUserAuth,
} from "@hr-management/common";

import { taskController } from "../../controller";

export = (dependencies: any) => {
  const router = express.Router();
  const { createTaskController } = taskController(dependencies);

  router.post(
    "/create",
    currentUser,
    isHr,
    requireUserAuth,
    createTaskController
  )

  return router;
};
