import { Message } from "node-nats-streaming";
import { Subject, Listener, TaskAssignedEvent } from "@hr-management/common";
import { queueGroupName } from "./queue-group-name";
import dependencies from "../../config/depentencies";
import { createNotification_UseCase } from "../../usecases";

export class TaskAssignedEventListener extends Listener<TaskAssignedEvent> {
  subject: Subject.TaskAssigned = Subject.TaskAssigned;
  queueGroupName = queueGroupName;

  async onMessage(data: TaskAssignedEvent["data"], msg: Message) {
    console.log(data);
    await createNotification_UseCase(dependencies).execute({
      companyName: data.companyName,
      message: data.message,
      employee: data.employeeId,
    });
    msg.ack();
  }
}






