import { Message } from "node-nats-streaming";
import { Subject, Listener, EmployeeCreatedEvent } from "@hr-management/common";
import { queueGroupName } from "./queue-group-name";
import { natsWrapper } from "../../nats-wrapper";
import dependencies from "../../config/depentencies";
import { editDashboard_UseCase } from "../../usecases";

export class EmployeeCreatedListener extends Listener<EmployeeCreatedEvent> {
  subject: Subject.EmployeeCreated = Subject.EmployeeCreated;
  queueGroupName = queueGroupName;

  async onMessage(data: EmployeeCreatedEvent["data"], msg: Message) {
    const dashBoardEdited = await editDashboard_UseCase(dependencies).execute(
      data.companyName,
      "employeeCount"
    );

    msg.ack();
  }
}
