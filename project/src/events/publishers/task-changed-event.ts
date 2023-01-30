import { Publisher, Subject, TaskStatusChangedEvent } from "@hr-management/common";

export class TaskStatusChangedPublisher extends Publisher<TaskStatusChangedEvent> {
  subject: Subject.TaskStatusChanged = Subject.TaskStatusChanged;
}
