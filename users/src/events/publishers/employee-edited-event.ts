import { Publisher, Subject, EmployeeEditedEvent } from "@hr-management/common";

export class ProductCreatedPublisher extends Publisher<EmployeeEditedEvent> {
  subject: Subject.EmployeeEdited = Subject.EmployeeEdited;
};
