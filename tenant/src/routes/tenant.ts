import express from "express";
import { currentUser, requireAuth, isAdmin } from "@hr-management/common";

import { tenantController } from "../controllers";

export = (dependencies: any) => {
  const router = express.Router();
  const { createTenantController, getTenantsController, getOtpController } =
    tenantController(dependencies);

  router.post("/createTenant", createTenantController);
  router.post("/getOtp", getOtpController);
  router.get("/allTenants", getTenantsController);

  return router;
};
