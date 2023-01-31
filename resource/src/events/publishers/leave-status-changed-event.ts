import {
  Publisher,
  Subject,
  LeaveStatusChangedEvent,
} from "@hr-management/common";

export class LeaveStatusChangedPublisher extends Publisher<LeaveStatusChangedEvent> {
  subject: Subject.LeaveStatusChanged = Subject.LeaveStatusChanged;
}
