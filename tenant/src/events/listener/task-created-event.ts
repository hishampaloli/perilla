import { Message } from "node-nats-streaming";
import { Subject, Listener, TaskAssignedEvent } from "@hr-management/common";
import { queueGroupName } from "./queue-group-name";
import { natsWrapper } from "../../nats-wrapper";
import dependencies from "../../config/depentencies";
import { editDashboard_UseCase } from "../../usecases";

export class TaskCreatedListener extends Listener<TaskAssignedEvent> {
  subject: Subject.TaskAssigned = Subject.TaskAssigned;
  queueGroupName = queueGroupName;

  async onMessage(data: TaskAssignedEvent["data"], msg: Message) {
    const dashBoardEdited = await editDashboard_UseCase(dependencies).execute(
      data.companyName,
      "totalTask"
    );

    console.log(data);
    console.log('task created')
    msg.ack();
  }
}
