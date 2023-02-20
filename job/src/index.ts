import mongoose from "mongoose";
import { app } from "./app";
import { natsWrapper } from "./nats-wrapper";

import { connectDB } from "./config/db";
import { evnCheckers } from "./config/env-checkers";

const start = async () => {
  console.log("786......");
  try {
    evnCheckers();
    connectDB();
  } catch (err) {
    console.error(err);
  }

  app.listen(3000, () => {
    console.log("Listening on port 3000 )()()()()()()()( ");
  });
};

start();
