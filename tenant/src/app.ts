import express, { json, Request, Response } from "express";
import cors from "cors";
import "express-async-errors";
import {
  currentUser,
  requireAuth,
  ErrorHandler,
  NotFoundError,
} from "@hr-management/common/build";
import { routes } from "./routes";
import cookieSession from "cookie-session";
import depentencies from "./config/depentencies";

const app = express();

app.set("trust proxy", true);
app.use(
  cors({
    origin: "https://perilla.dev",
  })
);
app.use(json());
app.use(
  cookieSession({
    signed: false,
  })
);
app.use("/api", routes(depentencies));

app.all("*", async (req, res) => {
  throw new NotFoundError();
});

app.use(ErrorHandler);

export { app };
