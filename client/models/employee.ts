import { ErrorState } from "./tenants";
import { EmployeeProfileDataObj } from "./profile";

export interface GetEmployeeOtpState {
  error: ErrorState[] | null;
  loading: boolean;
}

export interface GetEmployeeOtpVerificationState {
  error: ErrorState[] | null;
  loading: boolean;
}

export interface EmployeeAuthData {
  id: string;
  email: string;
  name: string;
  phone: number;
  image: string;
  role: string;
  employeeId: string;
  isBlocked: boolean;
  companyName: string;
}

export interface EmployeeAuthState {
  data: EmployeeAuthData | null;
  error: ErrorState[] | null;
}

export interface GetMyProfileState {
  data: EmployeeProfileDataObj | null;
  error: ErrorState[] | null;
  loading: boolean;
}

export interface SendbankDetailsForAprovalState {
  error: ErrorState[] | null;
  loading: boolean;
}


