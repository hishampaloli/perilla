import express from "express";
import { body, validationResult } from "express-validator";
import {
  currentTenant,
  requireTenantAuth,
  currentUser,
  isHrOrAdmin,
  requireTenantOrUser,
} from "@hr-management/common";

import { employeeController } from "../../controllers";

export = (dependencies: any) => {
  const router = express.Router();
  const {
    createEmployeeController,
    getEmployeeController,
    getAllEmployeeController,
    editEmployeeController,
    removeEmployeeController,
    changeEmployeePasswordController,
  } = employeeController(dependencies);

  router.post(
    "/createEmployee",
    currentTenant,
    requireTenantAuth,
    createEmployeeController
  );

  router.get(
    "/getEmployee",
    currentTenant,
    currentUser,
    requireTenantOrUser,
    isHrOrAdmin,
    getEmployeeController
  );

  router.get(
    "/getAllEmployees",
    currentTenant,
    currentUser,
    requireTenantOrUser,
    isHrOrAdmin,
    getAllEmployeeController
  );

  router.put(
    "/edit/:employeeId",
    currentTenant,
    requireTenantAuth,
    editEmployeeController
  );

  router.patch(
    "/remove/:employeeId",
    currentTenant,
    requireTenantAuth,
    removeEmployeeController
  );

  router.patch(
    "/changePassword/:employeeId",
    currentTenant,
    requireTenantAuth,
    changeEmployeePasswordController
  );
  return router;
};
