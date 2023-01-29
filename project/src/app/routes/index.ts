import express from "express";
import clientRoutes from "./clients";
import employeeRoutes from "./employee";
import projectRoutes from "./projects";
import taskRoutes from "./task";

export const routes = (dependencies: any) => {
  const routes = express.Router();
  const client = clientRoutes(dependencies);
  const employee = employeeRoutes(dependencies);
  const project = projectRoutes(dependencies);
  const task = taskRoutes(dependencies);

  routes.use("/client", client);
  routes.use("/employee", employee);
  routes.use("/project", project);
  routes.use("/task", task);

  return routes;
};
