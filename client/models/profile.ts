import { CLientDataObj, EmployeeData } from "./admin";
import { ErrorState } from "./tenants";

export interface BankDetails {
  employee: EmployeeData;
  isApproved: boolean;
  bankName: string;
  companyName: string;
  approvalReq: boolean;
  accountNumber: string;
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

export interface BankDetailsArr {
  data: BankDetails[];
}
export interface EmployeeProfileData {
  _id: string;
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
  salaryDetails: SalaryDetailsData;
  companyName: string;
}

export interface SalaryDetailsData {
  grossSalary?: number;
  HRA?: number;
  paymentType?: string;
  PfRate?: number;
  baseSalary?: number;
  bonus?: number;
  employee?: string;
}

export interface SalaryDetailsDataObj {
  data: SalaryDetailsData;
}

export interface EmployeeProfileDataObj {
  data: EmployeeProfileData;
}

export interface GetEmployeeProfileState {
  data: EmployeeProfileDataObj | null;
  error: ErrorState[] | null;
  loading: boolean;
}

export interface GetClientProfileState {
  data: CLientDataObj | null;
  error: ErrorState[] | null;
  loading: boolean;
}

export interface EditEmployeeProfileState {
  error: ErrorState[] | null;
  loading: boolean;
}

export interface EditClientState {
  error: ErrorState[] | null;
  loading: boolean;
}

export interface RemoveEmployeeState {
  error: ErrorState[] | null;
  loading: boolean;
}

export interface ChangeEmployeePasswordState {
  error: ErrorState[] | null;
  loading: boolean;
}

export interface EditSalaryDetailsState {
  error: ErrorState[] | null;
  loading: boolean;
}

export interface AllBankDetailsRequestState {
  error: ErrorState[] | null;
  loading: boolean;
  data: BankDetailsArr | null;
}

export interface EditBankDetailsState {
  error: ErrorState[] | null;
  loading: boolean;
}

export interface EditPersonalInfoState {
  error: ErrorState[] | null;
  loading: boolean;
}

export interface EditEmergencyContactState {
  error: ErrorState[] | null;
  loading: boolean;
}
