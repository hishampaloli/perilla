export interface TenantData {
  companyName: string;
  adminName: string;
  phone: number;
  email: string;
  country: string;
  city: string;
  postalCode: number;
  address: string;
  password: string;
  paymentId: string;
  paymentDetails: string;
  purchaseDate: Date;
}

export class Tenant {
  companyName: string;
  adminName: string;
  phone: number;
  email: string;
  country: string;
  city: string;
  postalCode: number;
  address: string;
  password: string;
  paymentId: string;
  paymentDetails: string;
  purchaseDate: Date;

  constructor({
    companyName,
    address,
    adminName,
    city,
    country,
    email,
    password,
    paymentDetails,
    paymentId,
    phone,
    postalCode,
    purchaseDate,
  }: TenantData) {
    this.companyName = companyName;
    this.adminName = adminName;
    this.phone = phone;
    this.email = email;
    this.country = country;
    this.city = city;
    this.postalCode = postalCode;
    this.address = address;
    this.password = password;
    this.paymentId = paymentId;
    this.paymentDetails = paymentDetails;
    this.purchaseDate = purchaseDate;
  }
}
