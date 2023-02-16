import express from "express";
import jobRoutes from "./jobs";
export const routes = (dependencies: any) => {
  const routes = express.Router();
  const job = jobRoutes(dependencies);

  routes.use("/", job);
  return routes;
};
