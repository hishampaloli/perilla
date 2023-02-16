import express from "express";
import {
  currentTenant,
  requireTenantAuth,
  isHrOrAdmin,
  requireTenantOrUser,
  currentUser,
} from "@hr-management/common";

import { jobController } from "../../controller";

export = (dependencies: any) => {
  const router = express.Router();
  const {
    createJobController,
    editJobController,
    getAllJobController,
    getSingleJobController,
  } = jobController(dependencies);

  router.post(
    "/createJob",
    currentTenant,
    requireTenantAuth,
    createJobController
  );

  router.put(
    "/editJob/:jobId",
    currentTenant,
    requireTenantAuth,
    editJobController
  );

  router.get("/allJobs", getAllJobController);
  router.get("/singleJob/:jobId", getSingleJobController);
  return router;
};
