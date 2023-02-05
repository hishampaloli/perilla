import mongoose from "mongoose";
import {
  EmployeeAddedToProjectListener,
  EmployeeRemovedFromProjectListener,
  LeaveStatusChangedEventListener,
  TaskAssignedEventListener,
  TaskStatusEventListener,
} from "../events/listeners";

import { natsWrapper } from "../nats-wrapper";

const connectNats = async () => {
  try {
    await natsWrapper.connect("perilla", "123456", "http://nats-srv:4222");

    natsWrapper.client.on("close", () => {
      console.log("NATS connetion closed!");
      process.exit();
    });

    process.on("SIGINT", () => natsWrapper.client.close());
    process.on("SIGTERM", () => natsWrapper.client.close());

    new EmployeeAddedToProjectListener(natsWrapper.client).listen();
    new EmployeeRemovedFromProjectListener(natsWrapper.client).listen();
    new TaskAssignedEventListener(natsWrapper.client).listen();
    new TaskStatusEventListener(natsWrapper.client).listen();
    new LeaveStatusChangedEventListener(natsWrapper.client).listen();
  } catch (error: any) {
    console.log(error.message);
  }
};

export { connectNats };
