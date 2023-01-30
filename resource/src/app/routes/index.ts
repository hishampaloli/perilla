import express from "express";
import employeeRoutes from "./employee";
import leaveRoutes from "./leave";

export const routes = (dependencies: any) => {
  const routes = express.Router();
  const employee = employeeRoutes(dependencies);
  const leave = leaveRoutes(dependencies);

  routes.use("/employee", employee);
  routes.use("/leave", leave);
  return routes;
};
