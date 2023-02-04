import mongoose from "mongoose";
import {
  EmployeeCreatedListener,
  ClientCreatedListener,
  ProjectCreatedListener,
  TaskCreatedListener,
} from "../events/listener";
import { natsWrapper } from "../nats-wrapper";

const connectNats = async () => {
  try {
    await natsWrapper.connect("perilla", "1234567", "http://nats-srv:4222");

    natsWrapper.client.on("close", () => {
      console.log("NATS connetion closed!");
      process.exit();
    });

    process.on("SIGINT", () => natsWrapper.client.close());
    process.on("SIGTERM", () => natsWrapper.client.close());

    new EmployeeCreatedListener(natsWrapper.client).listen();
    new ClientCreatedListener(natsWrapper.client).listen();
    new ProjectCreatedListener(natsWrapper.client).listen();
    new TaskCreatedListener(natsWrapper.client).listen();

  } catch (error: any) {
    console.log(error.message);
  }
};

export { connectNats };
