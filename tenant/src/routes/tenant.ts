import express from "express";
import {
  currentUser,
  currentTenant,
  requireTenantAuth,
  isAdmin,
} from "@hr-management/common";

import { tenantController } from "../controllers";

export = (dependencies: any) => {
  const router = express.Router();
  const {
    createTenantController,
    getTenantsController,
    getOtpController,
    currentuserController,
    tenantLoginController,
    tenantLogoutController,
    tenantLoginVerificationController,
    getPaidTenantDataConroller,
  } = tenantController(dependencies);

  router.post("/createTenant", createTenantController);
  router.post("/getOtp", getOtpController);
  router.get("/allTenants", getTenantsController);
  router.get(
    "/currentuser",
    currentTenant,
    requireTenantAuth,
    currentuserController
  );
  router.post("/tenantLogin", tenantLoginController);
  router.post("/tenantVerifyLogin", tenantLoginVerificationController);
  router.post("/tenantLogout", tenantLogoutController);
  router.get("/getTenant", getPaidTenantDataConroller);
  return router;
};
