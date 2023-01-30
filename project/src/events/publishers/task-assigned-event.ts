import { Publisher, Subject, TaskAssignedEvent } from "@hr-management/common";

export class TaskAssignedPublisher extends Publisher<TaskAssignedEvent> {
  subject: Subject.TaskAssigned = Subject.TaskAssigned;
}
