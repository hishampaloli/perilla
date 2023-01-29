import express from "express";
import {
  currentTenant,
  requireTenantAuth,
  isHrOrAdmin,
  requireTenantOrUser,
  currentUser,
} from "@hr-management/common";

import { employeeController } from "../../controller";

export = (dependencies: any) => {
  const router = express.Router();
  const { getAllEmployeesController } = employeeController(dependencies);

  router.get(
    "/getAllEmployees",
    currentUser,
    currentTenant,
    requireTenantOrUser,
    isHrOrAdmin,
    getAllEmployeesController
  );

  return router;
};
