import express from "express";
import { body, validationResult } from "express-validator";
import {
  currentTenant,
  requireTenantAuth,
  currentUser,
  isHrOrAdmin,
  requireTenantOrUser,
  requireUserAuth,
} from "@hr-management/common";

import { employeeController } from "../../controllers";

export = (dependencies: any) => {
  const router = express.Router();
  const {
    getMyProfileController,
    employeeLoginController,
    verifyEmployeeLoginController,
    getMyProfileDataController,
    editPersonalInfoController,
    editEmergancyContactController,
  } = employeeController(dependencies);

  router.get(
    "/myProfile",
    currentUser,
    requireUserAuth,
    getMyProfileController
  );

  router.get(
    "/myProfileData",
    currentUser,
    requireUserAuth,
    getMyProfileDataController
  );

  router.post("/login", employeeLoginController);
  router.post("/verifyOtp", verifyEmployeeLoginController);

  router.patch(
    "/addPersonalInfo",
    currentUser,
    requireUserAuth,
    editPersonalInfoController
  );

  router.patch(
    "/addEmergencyContact",
    currentUser,
    requireUserAuth,
    editEmergancyContactController
  );
  return router;
};
