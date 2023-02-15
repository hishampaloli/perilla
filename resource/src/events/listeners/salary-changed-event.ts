import { Message } from "node-nats-streaming";
import { Subject, Listener, SalaryChangedEvent } from "@hr-management/common";
import { queueGroupName } from "./queue-group-name";
import { natsWrapper } from "../../nats-wrapper";
import dependencies from "../../config/depentencies";
import { editEmployees_UseCase } from "../../usecase/index";

export class SalaryChangedListener extends Listener<SalaryChangedEvent> {
  subject: Subject.SalaryChanged = Subject.SalaryChanged;
  queueGroupName = queueGroupName;

  async onMessage(data: SalaryChangedEvent["data"], msg: Message) {
    const editedEmployee = await editEmployees_UseCase(dependencies).execute(
      data.companyName,
      data.id,
      {
        salary: data.salary,
      }
    );

    msg.ack();
  }
}
