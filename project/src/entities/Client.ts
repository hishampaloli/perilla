export interface ClientData {
  companyName: string;
  clientCompany: string;
  clientId: string;
  clientName: string;
  phone: string;
  email: string;
  address: object;
  gender: string;
  image: string;
}

export class Client {
  companyName: string;
  clientCompany: string;
  clientId: string;
  clientName: string;
  phone: string;
  email: string;
  address: object;
  gender: string;
  image: string;

  constructor({
    companyName,
    clientCompany,
    clientId,
    clientName,
    phone,
    email,
    address,
    gender,
    image,
  }: ClientData) {
    this.companyName = companyName;
    this.clientCompany = clientCompany;
    this.clientId = clientId;
    this.clientName = clientName;
    this.phone = phone;
    this.email = email;
    this.address = address;
    this.gender = gender;
    this.image = image;
  }
}
