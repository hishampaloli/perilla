import {
  Publisher,
  Subject,
  EmployeeCreatedEvent,
} from "@hr-management/common";

export class ProductCreatedPublisher extends Publisher<EmployeeCreatedEvent> {
  subject: Subject.EmployeeCreated = Subject.EmployeeCreated;
}
