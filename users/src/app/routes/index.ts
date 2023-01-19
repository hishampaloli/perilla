import express from "express";
import employeeRoutes from "./employee";
import adminRoutes from "./admin";
import { currentTenant } from "@hr-management/common";

export const routes = (dependencies: any) => {
  const routes = express.Router();

  const employee = employeeRoutes(dependencies);
  const admin = adminRoutes(dependencies);

  routes.use("/employee", employee);
  routes.use("/employee", currentTenant, admin);
  
  return routes;
};
