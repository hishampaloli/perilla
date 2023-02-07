export interface PayoutData {
  requestedBy: string;
  salary: string;
  requestedAt: Date;
  companyName: string;
}

export class Payout {
  requestedBy: string;
  salary: string;
  requestedAt: Date;
  companyName: string;

  constructor({ requestedBy, salary, requestedAt, companyName }: PayoutData) {
    this.companyName = companyName;
    this.requestedAt = requestedAt;
    this.requestedBy = requestedBy;

    this.salary = salary;
  }
}
