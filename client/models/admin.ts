export interface EmployeeData {
  email: string;
  name: string;
  phone: number;
  image: string;
  role: string;
  employeeId: string;
  joiningData: Date;
  designation: string;
  isBlocked: boolean;
  bankDetaild: string;
  emergencyContact: string;
  personalInformation: string;
  salaryDetails: string;
}

export interface EmployeeDataArray {
  data: EmployeeData[];
}

export interface EmployeeDataObj {
  data: EmployeeData;
}

export interface ErrorState {
  message: string;
}

export interface AllEmployeesState {
  data: EmployeeDataArray | null;
  error: ErrorState[] | null;
  loading: boolean;
}

export interface ClientData {
  companyName: string;
  clientCompany: string;
  clientId: string;
  clientName: string;
  phone: number;
  email: string;
  address: object;
  gender: string;
  image: string;
}

export interface ClientDataArr {
  data: ClientData[];
}

export interface CLientDataObj {
  data: ClientData;
}

export interface AllClientsState {
  data: ClientDataArr | null;
  error: ErrorState[] | null;
  loading: boolean;
}

export interface AddEmployeesState {
  data: EmployeeDataObj | null;
  error: ErrorState[] | null;
  loading: boolean;
}

export interface AddClientsState {
  data: CLientDataObj | null;
  error: ErrorState[] | null;
  loading: boolean;
}
