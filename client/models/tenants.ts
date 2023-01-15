export interface TenantData {
  companyName: string;
  adminName: string;
  phone: number;
  email: string;
  country: string;
  city: string;
  postalCode: number;
  address: string;
  paymentId: string;
  paymentDetails: string;
  purchaseDate: Date;
}

export interface LoginData {
  companyName: string;
  phone: string;
  password: string;
  otpNumber?: string
}

export interface ErrorState {
  message: string;
}

export interface AuthState {
  data: TenantData | null;
  error: ErrorState[] | null;
  loading: boolean;
}

export interface GetOtpState {
  data: {} | null;
  error: ErrorState[] | null;
  loading: boolean;
}
