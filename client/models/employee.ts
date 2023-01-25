import { ErrorState } from "./tenants";

export interface GetEmployeeOtpState {
  error: ErrorState[] | null;
  loading: boolean;
}

export interface GetEmployeeOtpVerificationState {
  error: ErrorState[] | null;
  loading: boolean;
}
