import { Message } from "node-nats-streaming";
import { Subject, Listener, ProjectCreatedEvent } from "@hr-management/common";
import { queueGroupName } from "./queue-group-name";
import { natsWrapper } from "../../nats-wrapper";
import dependencies from "../../config/depentencies";
import { editDashboard_UseCase } from "../../usecases";

export class ProjectCreatedListener extends Listener<ProjectCreatedEvent> {
  subject: Subject.ProjectCreated = Subject.ProjectCreated;
  queueGroupName = queueGroupName;

  async onMessage(data: ProjectCreatedEvent["data"], msg: Message) {
    const dashBoardEdited = await editDashboard_UseCase(dependencies).execute(
      data.companyName,
      "totalProject"
    );

    console.log(data);
    console.log('project created')

    msg.ack();
  }
}
