import { Publisher, Subject, ProjectCreatedEvent } from "@hr-management/common";

export class ProjectCreatedPublisher extends Publisher<ProjectCreatedEvent> {
  subject: Subject.ProjectCreated = Subject.ProjectCreated;
}
