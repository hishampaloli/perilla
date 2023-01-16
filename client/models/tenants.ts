export interface TenantData {
  data: {
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
    isPurchased: boolean;
  };
}

export interface LoginData {
  companyName: string;
  phone: string;
  password: string;
  otpNumber?: string;
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
  error: ErrorState[] | null;
  loading: boolean;
}

export interface TenantInitalData {
  data: {
    adminName: string;
    companyName: string;
    email: string;
    id: string;
    phone: number;
    isPurchased: boolean;
  };
}

export interface UserDataState {
  data: TenantInitalData | null;
  error: ErrorState[] | null;
  loading: boolean;
}
