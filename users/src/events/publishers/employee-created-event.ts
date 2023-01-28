import {
  Publisher,
  Subject,
  EmployeeCreatedEvent,
} from "@hr-management/common";

export class EmployeeCreatedPublisher extends Publisher<EmployeeCreatedEvent> {
  subject: Subject.EmployeeCreated = Subject.EmployeeCreated;
}
