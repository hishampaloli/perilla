import express from "express";
import jobRoutes from "./jobs";
import applicationRoutes from "./application";
export const routes = (dependencies: any) => {
  const routes = express.Router();

  const job = jobRoutes(dependencies);
  const application = applicationRoutes(dependencies);

  routes.use("/", job);
  routes.use("/application", application);
  return routes;
};
