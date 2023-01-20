import {
  Publisher,
  Subject,
  EmployeeRemovedEvent,
} from "@hr-management/common";

export class ProductCreatedPublisher extends Publisher<EmployeeRemovedEvent> {
  subject: Subject.EmployeeRemoved = Subject.EmployeeRemoved;
}
