import express from "express";
import {
  currentTenant,
  requireTenantAuth,
  isHrOrAdmin,
  requireTenantOrUser,
  currentUser,
  requireUserAuth,
} from "@hr-management/common";

import { leaveController } from "../../controller";

export = (dependencies: any) => {
  const router = express.Router();
  const {
    applyLeaveController,
    getMyLeaveReportController,
    viewLeaveApplicationController,
  } = leaveController(dependencies);

  router.post(
    "/applyLeave",
    currentUser,
    requireUserAuth,
    applyLeaveController
  );

  router.get(
    "/getMyLeave",
    currentUser,
    requireUserAuth,
    getMyLeaveReportController
  );

  router.get(
    "/viewLeave/:leaveId",
    currentUser,
    requireUserAuth,
    viewLeaveApplicationController
  );

  return router;
};
