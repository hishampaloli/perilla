import express, { Request, Response } from "express";
import { json } from "body-parser";
import cors from "cors";
import "express-async-errors";
import { ErrorHandler, NotFoundError } from "@hr-management/common/build";
import cookieSession from "cookie-session";

const app = express();

app.set("trust proxy", true);
app.use(json());
app.use(
  cookieSession({
    signed: false,
  })
);

app.all("*", async (req, res) => {
  throw new NotFoundError();
});

app.use(ErrorHandler);

export { app };
