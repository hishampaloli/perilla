import express from "express";
import { json } from "body-parser";
import "express-async-errors";
import { ErrorHandler, NotFoundError } from "@hr-management/common/build";
import { routes } from "./app/routes";
import cookieSession from "cookie-session";
import depentencies from "./config/depentencies";
const app = express();

app.set("trust proxy", true);
app.use(json());
app.use(
  cookieSession({
    signed: false,
    secure: false,
  })
);

app.use("/api/resource", routes(depentencies));

app.all("*", async (req, res) => {
  throw new NotFoundError();
});

app.use(ErrorHandler);

export { app };
