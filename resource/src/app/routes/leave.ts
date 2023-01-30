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
    getLeaveApplicationsController,
    approveLeaveController,
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
    currentTenant,
    currentUser,
    requireTenantOrUser,
    viewLeaveApplicationController
  );

  router.get(
    "/getLeaveRequests",
    currentTenant,
    requireTenantAuth,
    getLeaveApplicationsController
  );

  router.patch(
    "/approveLeave/:leaveId",
    currentTenant,
    requireTenantAuth,
    approveLeaveController
  );
  return router;
};
