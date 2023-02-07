export interface ExpenseData {
  createdBy: string;
  companyName: string;
  expenseName: string;
  createdAt: Date;
  price: number;
}

export class Expense {
  createdBy: string;
  companyName: string;
  expenseName: string;
  createdAt: Date;
  price: number;

  constructor({
    createdBy,
    companyName,
    expenseName,
    createdAt,
    price,
  }: ExpenseData) {
    this.companyName = companyName;
    this.createdAt = createdAt;
    this.createdBy = createdBy;
    this.expenseName = expenseName;
    this.price = price;
  }
}
