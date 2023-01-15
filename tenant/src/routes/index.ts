import express from "express";
import tenantRoutes from "./tenant";

export const routes = (dependencies: any) => {
  const routes = express.Router();


  routes.use("/tenant", tenantRoutes(dependencies));
  return routes;
};
