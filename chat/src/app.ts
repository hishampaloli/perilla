import express, { Request, Response } from "express";
import { json } from "body-parser";
import cors from "cors";
import "express-async-errors";
import {
  ErrorHandler,
  NotFoundError,
  requireUserAuth,
  protectSocket,
  NotAuthorizedError,
} from "@hr-management/common/build";
import cookieSession from "cookie-session";
import { routes } from "./app/routes";
import depentencies from "./config/depentencies";
import { Websocket } from "./app/socket/webSocket";
import http from "http";
import { Server, Socket } from "socket.io";
import jwt from "jsonwebtoken";

const app = express();
const httpServer = http.createServer(app);

app.set("trust proxy", true);
app.use(json());
app.use(
  cookieSession({
    signed: false,
  })
);

app.use("/api/chat", routes(depentencies));

const io = Websocket.getInstance(httpServer);

io.use(protectSocket)

io.on("connection", async (socket: Socket) => {
  console.log(2323)
  console.log(socket.data.user);
});

app.all("*", async (req, res) => {
  throw new NotFoundError();
});

app.use(ErrorHandler);

export { app, httpServer };
