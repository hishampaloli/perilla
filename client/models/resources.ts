import { ErrorState } from "./tenants";

export interface ResouseEmployeeData {
  role: string;
  employeeId: string;
  companyName: string;
  email: string;
  name: string;
  image: string;
  phone: string;
  id: string;
  leavesTaken: number;
  salary: number;
  lastPayout: Date;
  isBlocked: boolean;
}
export interface AssetsData {
  createdBy: ResouseEmployeeData;
  companyName: string;
  itemName: string;
  price: number;
  createdAt: Date;
  version: number;
  id: string;
}

export interface AssetsDataArr {
  data: AssetsData[];
}

export interface AssetsDataObj {
  data: AssetsData;
}

export interface CreateAssetState {
  loading: boolean;
  error: ErrorState[] | null;
}

export interface EditAssetState {
  loading: boolean;
  error: ErrorState[] | null;
}

export interface DeleteAssetState {
  loading: boolean;
  error: ErrorState[] | null;
}

export interface GetAllAssetsState {
  loading: boolean;
  error: ErrorState[] | null;
  data: AssetsDataArr | null;
}

export interface GetSingleAssetState {
  loading: boolean;
  error: ErrorState[] | null;
  data: AssetsDataObj | null;
}

export interface ExpenseData {
  companyName: string;
  itemName: string;
  createdBy: ResouseEmployeeData;
  createdAt: Date;
  price: number;
  id: string;
}

export interface ExpenseDataArr {
  data: ExpenseData[];
}

export interface ExpenseDataObj {
  data: ExpenseData;
}

export interface CreateExpenseState {
  loading: boolean;
  error: ErrorState[] | null;
}

export interface EditExpenseState {
  loading: boolean;
  error: ErrorState[] | null;
}

export interface DeleteExpenseState {
  loading: boolean;
  error: ErrorState[] | null;
}

export interface GetAllExpensesState {
  loading: boolean;
  error: ErrorState[] | null;
  data: ExpenseDataArr | null;
}

export interface GetSingleExpenseState {
  loading: boolean;
  error: ErrorState[] | null;
  data: ExpenseDataObj | null;
}
