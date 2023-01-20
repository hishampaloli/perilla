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

import { adminController } from "../../controllers";

export = (dependencies: any) => {
  const router = express.Router();
  const {
    createEmployeeController,
    getEmployeeController,
    getAllEmployeeController,
    editEmployeeController,
    removeEmployeeController,
    changeEmployeePasswordController,
    getEmployeeProfileDataController,
    getBankDetailsRequestsController,
    approveOrRejectBankDetails,
    editSalaryDetailsController,
  } = adminController(dependencies);

  router.post("/createEmployee", requireTenantAuth, createEmployeeController);

  router.get(
    "/getEmployee",
    currentUser,
    requireTenantOrUser,
    isHrOrAdmin,
    getEmployeeController
  );

  router.get(
    "/getAllEmployees",
    currentUser,
    requireTenantOrUser,
    isHrOrAdmin,
    getAllEmployeeController
  );

  router.put("/edit/:employeeId", requireTenantAuth, editEmployeeController);

  router.patch(
    "/remove/:employeeId",
    requireTenantAuth,
    removeEmployeeController
  );

  router.patch(
    "/changePassword/:employeeId",
    requireTenantAuth,
    changeEmployeePasswordController
  );

  router.get(
    "/getEmployeeProfileData/:employeeId",
    currentUser,
    requireTenantOrUser,
    isHrOrAdmin,
    getEmployeeProfileDataController
  );

  router.get(
    "/allBankReq",
    requireTenantAuth,
    getBankDetailsRequestsController
  );

  router.patch(
    "/bankStatus/:employeeId",
    requireTenantAuth,
    approveOrRejectBankDetails
  );

  router.put(
    "/salryDetails/:employeeId",
    requireTenantAuth,
    editSalaryDetailsController
  );

  return router;
};
