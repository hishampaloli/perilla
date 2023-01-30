export interface LeaveData {
  employeeId: string;
  companyName: string;
  reason: string;
  leaveDuration: string;
  startingData: Date;
}

export class Leave {
  employeeId: string;
  companyName: string;
  reason: string;
  leaveDuration: string;
  startingData: Date;

  constructor({
    employeeId,
    companyName,
    reason,
    leaveDuration,
    startingData,
  }: LeaveData) {
    this.companyName = companyName;
    this.reason = reason;
    this.leaveDuration = leaveDuration;
    this.startingData = startingData;
    this.employeeId = employeeId;
  }
}
