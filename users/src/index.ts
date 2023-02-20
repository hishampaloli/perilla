import { app } from "./app";
import { connectDB } from "./config/db";
import { evnCheckers } from "./config/env-checker";
import { connectNats } from "./config/message-broker";

const start = async () => {
  console.log('786........');

  try {
    evnCheckers();
    connectNats()
    connectDB()
  } catch (err) {
    console.error(err);
  }

  app.listen(3000, () => {
    console.log("Listening on port 3000!!!!!!!!");
  });
};

start();
