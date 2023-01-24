import { combineReducers } from "redux";
import { TenantInitalData } from "../../models/tenants";
import {
  getOtpReducer,
  userReducer,
  getPaidTenantReducer,
  getStripeLinkReducer,
} from "./tenants";

import {
  getAllClientsReducer,
  getAllEmployeesReducer,
  addEmployeeReducer,
  getAllBankDetailsReqReducer,
} from "./admin";

import {
  getEmployeeProfileReducer,
  getClientProfileReducer,
  EditEmployeeProfileReducer,
  EditClientReducer,
  ChangeEmployeePasswordReducer,
  EditSalaryDetails,
} from "./profile";

const reducers = combineReducers({
  getOtp: getOtpReducer,
  user: userReducer,
  paidTenant: getPaidTenantReducer,
  stripeLink: getStripeLinkReducer,
  allEmployees: getAllEmployeesReducer,
  allClients: getAllClientsReducer,
  addEmployees: addEmployeeReducer,
  employeeProfile: getEmployeeProfileReducer,
  clientProfile: getClientProfileReducer,
  editEmployeeProfile: EditEmployeeProfileReducer,
  editClient: EditClientReducer,
  changeEmployeePassword: ChangeEmployeePasswordReducer,
  editSalaryDetails: EditSalaryDetails,
  allBankDetails: getAllBankDetailsReqReducer,
});

export default reducers;
export type RootState = ReturnType<typeof reducers>;
