import {
  Publisher,
  Subject,
  EmployeeRemovedEvent,
} from "@hr-management/common";

export class EmployeeRemovedPublisher extends Publisher<EmployeeRemovedEvent> {
  subject: Subject.EmployeeRemoved = Subject.EmployeeRemoved;
}
