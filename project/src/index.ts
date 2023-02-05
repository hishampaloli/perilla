import mongoose from "mongoose";
import { app } from "./app";
import { natsWrapper } from "./nats-wrapper";
import {
  EmployeeCreatedListener,
  EmployeeEditedListener,
  EmployeeRemovedListener,
} from "./events/listeners";

import { connectDB } from "./config/db";
import { connectNats } from "./config/message-broker";
import { evnCheckers } from "./config/env-checkers";

const start = async () => {
  try {
    connectNats();
    connectDB();
    evnCheckers();
  } catch (err) {
    console.error(err);
  }

  app.listen(3000, () => {
    console.log("Listening on port 3000 =============");
  });
};

start();
