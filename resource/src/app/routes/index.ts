import express from "express";
import employeeRoutes from "./employee";

export const routes = (dependencies: any) => {
  const routes = express.Router();
  const employee = employeeRoutes(dependencies);

  routes.use("/employee", employee);
  return routes;
};
