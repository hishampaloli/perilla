import { Message } from "node-nats-streaming";
import {
  Subject,
  Listener,
  TaskStatusChangedEvent,
} from "@hr-management/common";
import { queueGroupName } from "./queue-group-name";
import { natsWrapper } from "../../nats-wrapper";
import dependencies from "../../config/depentencies";
import { createNotification_UseCase } from "../../usecases";
// import {  } from "../../usecase/index";

export class TaskStatusEventListener extends Listener<TaskStatusChangedEvent> {
  subject: Subject.TaskStatusChanged = Subject.TaskStatusChanged;
  queueGroupName = queueGroupName;

  async onMessage(data: TaskStatusChangedEvent["data"], msg: Message) {
    console.log(data);
    
    await createNotification_UseCase(dependencies).execute({
      companyName: data.companyName,
      message: data.message,
      employee: data.employeeId,
    });
    msg.ack();
  }
}
