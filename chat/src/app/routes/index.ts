import express from "express";
import employeeRoutes from "./employee";
import chatRoutes from "./chat";
import roomRoutes from "./room";

export const routes = (dependencies: any) => {
  const routes = express.Router();
  const employee = employeeRoutes(dependencies);
  const chat = chatRoutes(dependencies);
  const room = roomRoutes(dependencies);

  routes.use("/employee", employee);
  routes.use("/chat", chat);
  routes.use("/room", room);

  return routes;
};
