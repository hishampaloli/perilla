import { Publisher, Subject, EmployeeEditedEvent } from "@hr-management/common";

export class EmplyeeEditedPublisher extends Publisher<EmployeeEditedEvent> {
  subject: Subject.EmployeeEdited = Subject.EmployeeEdited;
};
