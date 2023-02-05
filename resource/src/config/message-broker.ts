import mongoose from "mongoose";
import {
  EmployeeCreatedListener,
  EmployeeEditedListener,
  EmployeeRemovedListener,
} from "../events/listeners";

import { natsWrapper } from "../nats-wrapper";

const connectNats = async () => {
  try {
    await natsWrapper.connect("perilla", "12345667", "http://nats-srv:4222");

    natsWrapper.client.on("close", () => {
      console.log("NATS connetion closed!");
      process.exit();
    });

    process.on("SIGINT", () => natsWrapper.client.close());
    process.on("SIGTERM", () => natsWrapper.client.close());

    new EmployeeCreatedListener(natsWrapper.client).listen();
    new EmployeeEditedListener(natsWrapper.client).listen();
    new EmployeeRemovedListener(natsWrapper.client).listen();
  } catch (error: any) {
    console.log(error.message);
  }
};

export { connectNats };
