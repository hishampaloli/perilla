import { Publisher, Subject, TaskCreatedEvent } from "@hr-management/common";

export class TaskCreatedPublisher extends Publisher<TaskCreatedEvent> {
  subject: Subject.TaskCreated = Subject.TaskCreated;
}
