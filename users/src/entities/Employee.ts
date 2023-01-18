export interface EmployeeData {
  role: string;
  name: string;
  email: string;
  phone: number;
  employeeId: string;
  image: string;
  joiningDat: string;
  designation: string;
  personalInformation?: string;
  bankDetails?: string;
  emergencyContact?: string;
}

export class Employee {
  role: string;
  name: string;
  email: string;
  phone: number;
  employeeId: string;
  image: string;
  joiningDat: string;
  designation: string;
  personalInformation?: string;
  bankDetails?: string;
  emergencyContact?: string;

  constructor({
    role,
    name,
    email,
    phone,
    employeeId,
    image,
    joiningDat,
    designation,
    personalInformation,
    bankDetails,
    emergencyContact,
  }: EmployeeData) {
    this.role = role;
    this.email = email;
    this.name = name;
    this.phone = phone;
    this.employeeId = employeeId;
    this.image = image;
    this.joiningDat = joiningDat;
    this.designation = designation;
    this.personalInformation = personalInformation;
    this.bankDetails = bankDetails;
    this.emergencyContact = emergencyContact;
  }
}
