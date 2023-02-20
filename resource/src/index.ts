import { app } from "./app";
import { connectNats } from "./config/message-broker";
import { connectDB } from "./config/db";
import { evnCheckers } from "./config/env-checkers";

const start = async () => {
  console.log("786......");
  try {
    evnCheckers();
    connectNats();
    connectDB();
  } catch (err) {
    console.error(err);
  }

  app.listen(3000, () => {
    console.log("Listening on port 3000 ###################");
  });
};

start();
