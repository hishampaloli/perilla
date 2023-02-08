import express from "express";
import {
  currentTenant,
  isHrOrAdmin,
  requireTenantOrUser,
  currentUser,
  requireUserAuth,
  requireTenantAuth,
} from "@hr-management/common";

import { payoutController } from "../../controller";

export = (dependencies: any) => {
  const router = express.Router();
  const {
    requestPayoutController,
    getAllPayoutController,
    getSinglePayoutController,
    getMyPayoutsController,
    completePaymentController,
  } = payoutController(dependencies);

  router.post(
    "/requestPayout",
    currentUser,
    requireUserAuth,
    requestPayoutController
  );

  router.post(
    "/allPayouts",
    currentTenant,
    requireTenantAuth,
    getAllPayoutController
  );

  router.get(
    "/myPayouts",
    currentUser,
    requireUserAuth,
    getMyPayoutsController
  );

  router.get(
    "/:payoutId",
    currentTenant,
    requireTenantAuth,
    getSinglePayoutController
  );

  router.put(
    "/:payoutId",
    currentTenant,
    requireTenantAuth,
    completePaymentController
  );

  return router;
};
