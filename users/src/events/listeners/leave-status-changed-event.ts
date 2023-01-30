import { Message } from "node-nats-streaming";
import {
  Subject,
  Listener,
  LeaveStatusChangedEvent,
} from "@hr-management/common";
import { queueGroupName } from "./queue-group-name";
import dependencies from "../../config/depentencies";
import { createNotification_UseCase } from "../../usecases";

export class LeaveStatusChangedEventListener extends Listener<LeaveStatusChangedEvent> {
  subject: Subject.LeaveStatusChanged = Subject.LeaveStatusChanged;
  queueGroupName = queueGroupName;

  async onMessage(data: LeaveStatusChangedEvent["data"], msg: Message) {
    console.log(data);
    await createNotification_UseCase(dependencies).execute({
      companyName: data.companyName,
      message: data.message,
      employee: data.employeeId,
    });
    msg.ack();
  }
}
