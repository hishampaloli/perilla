import express, { Request, Response } from "express";
import { json } from "body-parser";

import "express-async-errors";
import {
  ErrorHandler,
  NotFoundError,
  protectSocket,
} from "@hr-management/common/build";
import cookieSession from "cookie-session";
import { routes } from "./app/routes";
import depentencies from "./config/depentencies";
import { Websocket } from "./app/socket/webSocket";
import http from "http";

import { sockets } from "./app/routes/socket";

const app = express();
const httpServer = http.createServer(app);

app.set("trust proxy", true);
app.use(json());
app.use(
  cookieSession({
    signed: false,
    secure: false,
  })
);

app.use("/api/chat", routes(depentencies))

export const io = Websocket.getInstance(httpServer);

io.use(protectSocket);
io.on("connection", sockets);

app.all("*", async (req, res) => {
  throw new NotFoundError();
});

app.use(ErrorHandler);

export { app, httpServer };
