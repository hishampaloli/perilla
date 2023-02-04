import { Publisher, Subject, ClientCreatedEvent } from "@hr-management/common";

export class ClientCreatedPublisher extends Publisher<ClientCreatedEvent> {
  subject: Subject.ClientCreated = Subject.ClientCreated;
}
