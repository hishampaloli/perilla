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

  constructor({
    companyName,
    address,
    adminName,
    city,
    country,
    email,
    password,
    phone,
    postalCode,
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
  }
}
