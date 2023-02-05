import mongoose from "mongoose";
import { app } from "./app";
import { natsWrapper } from "./nats-wrapper";
import { connectDB } from "./config/db";
import { EmployeeAddedToProjectListener } from "./events/listeners/employee-added-to-project-event";
import { EmployeeRemovedFromProjectListener } from "./events/listeners/employee-removed-from-project-event";
import { TaskAssignedEventListener } from "./events/listeners/task-assigned-event";
import { TaskStatusEventListener } from "./events/listeners/task-status-changed-event";
import { LeaveStatusChangedEventListener } from "./events/listeners/leave-status-changed-event";

const start = async () => {
  if (!process.env.JWT_KEY) {
    throw new Error("JWT_KEY must be defined");
  }
  if (!process.env.MONGO_URL) {
    throw new Error("MONGO_URL must be defined");
  }
  if (!process.env.NATS_CLIENT_ID) {
    throw new Error("MONGO_URI must be defined");
  }

  if (!process.env.TWILIO_ACC_SID) {
    throw new Error("TWILIO_ACC_SID must be defined");
  }

  if (!process.env.TWILIO_TOKEN_AUTH) {
    throw new Error("TWILIO_TOKEN_AUTH must be defined");
  }

  if (!process.env.TWILIO_SERVICE_SID) {
    throw new Error("TWILIO_SERVICE_SID must be defined");
  }

  if (!process.env.EMAIL_STR) {
    throw new Error("EMAIL_STR must be defined");
  }

  if (!process.env.PASSWORD_STR) {
    throw new Error("PASSWORD_STR must be defined");
  }

  try {
    

    connectDB();
  } catch (err) {
    console.error(err);
  }

  app.listen(3000, () => {
    console.log("Listening on port 3000!!!!!!!!");
  });
};

start();
