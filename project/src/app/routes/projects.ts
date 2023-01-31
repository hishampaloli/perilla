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

import { projectController } from "../../controller";

export = (dependencies: any) => {
  const router = express.Router();
  const {
    createProjectController,
    getAllprojectsController,
    getSingleProjectController,
    addTeamToProjectController,
    editProjectController,
    removeTeamFromProjectController,
    getMyProjectController,
    completeProjectController,
  } = projectController(dependencies);

  router.post(
    "/create",
    currentUser,
    isHr,
    requireUserAuth,
    createProjectController
  );

  router.get(
    "/allProjects",
    currentUser,
    currentTenant,
    requireTenantOrUser,
    isHrOrAdmin,
    getAllprojectsController
  );

  router.get(
    "/myProjects",
    currentUser,
    requireUserAuth,
    getMyProjectController
  );

  router.get(
    "/:projectId",
    currentUser,
    currentTenant,
    requireTenantOrUser,
    getSingleProjectController
  );

  router.put(
    "/:projectId",
    currentUser,
    isHr,
    requireUserAuth,
    editProjectController
  );

  router.put(
    "/addTeam/:projectId",
    currentUser,
    isHr,
    requireUserAuth,
    addTeamToProjectController
  );

  router.put(
    "/removeTeam/:projectId",
    currentUser,
    isHr,
    requireUserAuth,
    removeTeamFromProjectController
  );

  router.patch(
    "/completeProject/:projectId",
    currentUser,
    isHr,
    requireUserAuth,
    completeProjectController
  );

  return router;
};
