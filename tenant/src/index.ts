import mongoose from "mongoose";
import { app } from "./app";
// import { natsWrapper } from "./nats-wrapper";
// import { ProfileCreatedListener } from "./events/listeners/profile-created-event";
// import { ProfileUpdateListener } from "./events/listeners/profile-updated-event";
import { connectDB } from "./config/db";

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
    // await natsWrapper.connect(
    //   "ticketing",
    //   process.env.NATS_CLIENT_ID,
    //   "http://nats-srv:4222"
    // );

    // natsWrapper.client.on("close", () => {
    //   console.log("NATS connetion closed!");
    //   process.exit();
    // });

    // process.on("SIGINT", () => natsWrapper.client.close());
    // process.on("SIGTERM", () => natsWrapper.client.close());

    // new ProfileCreatedListener(natsWrapper.client).listen();
    // new ProfileUpdateListener(natsWrapper.client).listen();

    connectDB();
  } catch (err) {
    console.error(err);
  }


  app.listen(3000, () => {
    console.log("Listening on port 3000!!!!!!!!");
  });
};

start();
