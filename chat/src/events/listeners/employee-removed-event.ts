import { Message } from "node-nats-streaming";
import { Subject, Listener, EmployeeRemovedEvent } from "@hr-management/common";
import { queueGroupName } from "./queue-group-name";
import { natsWrapper } from "../../nats-wrapper";
import dependencies from "../../config/depentencies";
import { editEmployees_UseCase } from "../../usecase/index";

export class EmployeeRemovedListener extends Listener<EmployeeRemovedEvent> {
  subject: Subject.EmployeeRemoved = Subject.EmployeeRemoved;
  queueGroupName = queueGroupName;

  async onMessage(data: EmployeeRemovedEvent["data"], msg: Message) {
    const removedProfile = await editEmployees_UseCase(dependencies).execute(
      data.companyName,
      data.id,
      {
        isBlocked: data.isBlocked,
      }
    );

    msg.ack();
  }
}
