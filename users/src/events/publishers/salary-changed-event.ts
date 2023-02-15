import { Publisher, Subject, SalaryChangedEvent } from "@hr-management/common";

export class SalaryChangedPublisher extends Publisher<SalaryChangedEvent> {
  subject: Subject.SalaryChanged = Subject.SalaryChanged;
}
