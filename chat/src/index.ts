import { app, httpServer } from "./app";
import { connectDB } from "./config/db";
import { connectNats } from "./config/message-broker";
import { evnCheckers } from "./config/env-checkers";

const start = async () => {
  try {
    evnCheckers();
    connectNats();
    connectDB();
  } catch (err) {
    console.error(err);
  }

  httpServer.listen(3000, () => {
    console.log("Listening on port 3000 @@@@@@@@@@@@@@@@@@");
  });
};

start();
