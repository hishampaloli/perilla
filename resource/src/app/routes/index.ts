import express from "express";
import employeeRoutes from "./employee";
import leaveRoutes from "./leave";
import assetRoutes from "./asset";
import expenseRoute from "./expense";

export const routes = (dependencies: any) => {
  const routes = express.Router();
  const employee = employeeRoutes(dependencies);
  const leave = leaveRoutes(dependencies);
  const asset = assetRoutes(dependencies);
  const expense = expenseRoute(dependencies);

  routes.use("/employee", employee);
  routes.use("/leave", leave);
  routes.use("/asset", asset);
  routes.use("/expense", expense);
  return routes;
};
