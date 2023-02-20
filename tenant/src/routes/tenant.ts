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
    stripePaymentController,
    stripePayementVerificationController,
    resetPasswordController,
    getDashBoardController,
    editLandingPageController,
    getLandingPageController,
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
  router.post("/payment", stripePaymentController);
  router.get(
    "/stripeVerification",
    currentTenant,
    requireTenantAuth,
    stripePayementVerificationController
  );

  router.put(
    "/resetPassword",
    currentTenant,
    requireTenantAuth,
    resetPasswordController
  );

  router.get(
    "/getDashboard",
    currentTenant,
    requireTenantAuth,
    getDashBoardController
  );

  router.put(
    "/landingPage",
    currentTenant,
    requireTenantAuth,
    editLandingPageController
  );

  router.get("/landingPage", getLandingPageController);
  return router;
};
