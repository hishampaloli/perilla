import { ErrorState } from "./tenants";
import { EmployeeProfileDataObj } from "./profile";
import { ChatEmployeeDataArr } from "../redux/action-models";

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

export interface GetAllEmployeesForChatState {
  data: ChatEmployeeDataArr | null;
  error: ErrorState[] | null;
  loading: boolean;
}
