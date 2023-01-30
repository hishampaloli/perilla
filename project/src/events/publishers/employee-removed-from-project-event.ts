import {
  Publisher,
  Subject,
  EmployeeRemovedFromProjectEvent,
} from "@hr-management/common";

export class EmployeeRemovedFromProjectPublisher extends Publisher<EmployeeRemovedFromProjectEvent> {
  subject: Subject.EmployeeRemovedFromProject =
    Subject.EmployeeRemovedFromProject;
}
