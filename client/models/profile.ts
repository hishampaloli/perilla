import { ErrorState } from "./tenants";

export interface BankDetails {
  employee: string;
  isApproved: boolean;
  bankName: boolean;
  companyName: string;
  approvalReq: boolean;
  accountNumber: number;
  ifcsCode: string;
  panNumber: string;
  id: string;
}

export interface Contact {
  name: string;
  phone: number;
  otherInfo: string;
}

export interface EmergencyContact {
  primary: Contact;
  secondary: Contact;
  id: string;
}

export interface PersonalInformation {
  nationality: string;
  religion: string;
  martialStatus: string;
  employementOfPartner: string;
  passportNumber: number;
  noOfChildren: number;
  employee: string;
  id: string;
}
export interface EmployeeProfileData {
  email: string;
  name: string;
  phone: number;
  image: string;
  role: string;
  employeeId: string;
  joiningDate: Date;
  designation: string;
  isBlocked: boolean;
  bankDetails: BankDetails;
  emergencyContact: EmergencyContact;
  personalInformation: PersonalInformation;
  salaryDetails: string;
  companyName: string;
}

export interface EmployeeProfileDataObj {
  data: EmployeeProfileData;
}

export interface GetEmployeeProfileState {
  data: EmployeeProfileDataObj | null;
  error: ErrorState[] | null;
  loading: boolean;
}
