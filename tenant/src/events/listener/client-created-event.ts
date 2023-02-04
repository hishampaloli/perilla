import { Message } from "node-nats-streaming";
import { Subject, Listener, ClientCreatedEvent } from "@hr-management/common";
import { queueGroupName } from "./queue-group-name";
import { natsWrapper } from "../../nats-wrapper";
import dependencies from "../../config/depentencies";
import { editDashboard_UseCase } from "../../usecases";

export class ClientCreatedListener extends Listener<ClientCreatedEvent> {
  subject: Subject.ClientCreated = Subject.ClientCreated;
  queueGroupName = queueGroupName;

  async onMessage(data: ClientCreatedEvent["data"], msg: Message) {
    const dashBoardEdited = await editDashboard_UseCase(dependencies).execute(
      data.companyName,
      "clientCount"
    );

    console.log(data);
    console.log("client created");

    msg.ack();
  }
}
