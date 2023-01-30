import {
  Publisher,
  Subject,
  EmployeeAddedToProjectEvent,
} from "@hr-management/common";

export class EmployeeAddedToProjectPublisher extends Publisher<EmployeeAddedToProjectEvent> {
  subject: Subject.EmployeeAddedToProject = Subject.EmployeeAddedToProject;
}
