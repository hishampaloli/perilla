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
    approveTaskController,
    getMyTaskPostsController,
    getMyTasksController,
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

  // TEST ME
  TODO: router.patch(
    "/approveTask/:taskId",
    currentUser,
    isHr,
    requireUserAuth,
    approveTaskController
  );

  // TEST ME
  TODO: router.get(
    "/myTaskPosts",
    currentUser,
    isHr,
    requireUserAuth,
    getMyTaskPostsController
  );

  router.get("/myTasks", currentUser, requireUserAuth, getMyTasksController);
  return router;
};
