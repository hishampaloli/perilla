import express from "express";
import clientRoutes from "./clients";

export const routes = (dependencies: any) => {
  const routes = express.Router();
  const client = clientRoutes(dependencies);

  routes.use("/client", client);

  return routes;
};
