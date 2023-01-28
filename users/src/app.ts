import express, { Request, Response } from "express";
import { json } from "body-parser";
import cors from "cors";
import "express-async-errors";
import { ErrorHandler, NotFoundError } from "@hr-management/common/build";
import { routes } from "./app/routes";
import cookieSession from "cookie-session";
import depentencies from "./config/depentencies";
import { schemas } from "./app/database/mongo";

const {
  BankDetails,
  EmergencyContact,
  Employee,
  Notification,
  PersonalInfo,
  SalaryDetails,
} = schemas;

const app = express();

app.set("trust proxy", true);
app.use(json());
app.use(
  cookieSession({
    signed: false,
  })
);

app.use("/api/user", routes(depentencies));

app.get("/api/user/delete", async (req, res) => {
  await BankDetails.remove();
  await EmergencyContact.remove();
  await Employee.remove();
  await Notification.remove();
  await PersonalInfo.remove();
  await SalaryDetails.remove();

  res.json("deleted");
});

app.all("*", async (req, res) => {
  throw new NotFoundError();
});

app.use(ErrorHandler);

export { app };
