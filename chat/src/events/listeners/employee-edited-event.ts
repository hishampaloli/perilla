import { Message } from "node-nats-streaming";
import { Subject, Listener, EmployeeEditedEvent } from "@hr-management/common";
import { queueGroupName } from "./queue-group-name";
import { natsWrapper } from "../../nats-wrapper";
import dependencies from "../../config/depentencies";
import { editEmployees_UseCase } from "../../usecase/index";

export class EmployeeEditedListener extends Listener<EmployeeEditedEvent> {
  subject: Subject.EmployeeEdited = Subject.EmployeeEdited;
  queueGroupName = queueGroupName;

  async onMessage(data: EmployeeEditedEvent["data"], msg: Message) {
    

    const editedProfile = await editEmployees_UseCase(dependencies).execute(
      data.companyName,
      data.id,
      {
        email: data.email,
        role: data.role,
        name: data.name,
        phone: data.phone,
        employeeId: data.employeeId,
        image: data.image,
      }
    );

    msg.ack();
  }
}
