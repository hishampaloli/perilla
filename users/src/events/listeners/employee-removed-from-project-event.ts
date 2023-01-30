import { Message } from "node-nats-streaming";
import {
  Subject,
  Listener,
  EmployeeRemovedFromProjectEvent,
} from "@hr-management/common";
import { queueGroupName } from "./queue-group-name";
import { natsWrapper } from "../../nats-wrapper";
import dependencies from "../../config/depentencies";
import { createNotification_UseCase } from "../../usecases";

export class EmployeeRemovedFromProjectListener extends Listener<EmployeeRemovedFromProjectEvent> {
  subject: Subject.EmployeeRemovedFromProject =
    Subject.EmployeeRemovedFromProject;
  queueGroupName = queueGroupName;

  async onMessage(data: EmployeeRemovedFromProjectEvent["data"], msg: Message) {
    await createNotification_UseCase(dependencies).execute({
      companyName: data.companyName,
      message: data.message,
      employee: data.employeeId,
    });
    msg.ack();
  }
}
