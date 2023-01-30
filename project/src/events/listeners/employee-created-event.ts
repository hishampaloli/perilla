import { Message } from "node-nats-streaming";
import { Subject, Listener, EmployeeCreatedEvent } from "@hr-management/common";
import { queueGroupName } from "./queue-group-name";
import { natsWrapper } from "../../nats-wrapper";
import dependencies from "../../config/depentencies";
import { createEmployee_UseCase } from "../../usecase/index";

export class EmployeeCreatedListener extends Listener<EmployeeCreatedEvent> {
  subject: Subject.EmployeeCreated = Subject.EmployeeCreated;
  queueGroupName = queueGroupName;

  async onMessage(data: EmployeeCreatedEvent["data"], msg: Message) {
    const createdProfile = await createEmployee_UseCase(dependencies).execute(
      data
    );
    msg.ack();
  }
}
