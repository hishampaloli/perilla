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
  const {
    createTaskController,
    getAllProjectTasksController,
    editTaskController,
    getSingleTaskController,
    reqTaskApprovelController,
    getTasksForApprovalController,
  } = taskController(dependencies);

  router.post(
    "/create",
    currentUser,
    isHr,
    requireUserAuth,
    createTaskController
  );

  router.get(
    "/allProjectTask/:projectId",
    currentUser,
    currentTenant,
    requireTenantOrUser,
    getAllProjectTasksController
  );

  router.get(
    "/singleTask/:taskId",
    currentUser,
    currentTenant,
    requireTenantOrUser,
    getSingleTaskController
  );

  router.put(
    "/edit/:taskId",
    currentUser,
    isHr,
    requireUserAuth,
    editTaskController
  );

  router.patch(
    "/isCompleted/:taskId",
    currentUser,
    requireUserAuth,
    reqTaskApprovelController
  );

  router.get(
    "/tasksForApproval/",
    currentUser,
    isHr,
    requireUserAuth,
    getTasksForApprovalController
  );
  return router;
};
