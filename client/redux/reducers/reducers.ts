import { combineReducers } from "redux";
import { TenantInitalData } from "../../models/tenants";
import {
  getOtpReducer,
  userReducer,
  getPaidTenantReducer,
  getStripeLinkReducer,
  resetPasswordReducer,
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
  EditBankDetailsReducer,
  EditPersonalInfoReducer,
  EditEmergencyContactReducer,
  getMyNotificationReducer,
  DeleteNotificationReducer,
} from "./profile";

import {
  employeeReducer,
  getLoginOtpReducer,
  getLoginOtpVerificationReducer,
  getMyProfileReducer,
  sendBankDetailsReducer,
} from "./employee";

import {
  addTeamToProjectsReducer,
  createProjectsReducer,
  editProjectsReducer,
  getAllProjectsReducer,
  getMyProjectsReducer,
  getSingleProjectsReducer,
  getTaskUnderProjectsReducer,
  removeTeamFromProjectsReducer,
} from "./project";
import { employeeListLayoutReducer, addTaskFormReducer } from "./custom";

const reducers = combineReducers({
  getOtp: getOtpReducer,
  user: userReducer,
  employee: employeeReducer,
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
  employeeLoginOtp: getLoginOtpReducer,
  employeeLoginOtpVerification: getLoginOtpVerificationReducer,
  myProfile: getMyProfileReducer,
  sendBankDetails: sendBankDetailsReducer,
  editBankDetails: EditBankDetailsReducer,
  EditPersonalInfo: EditPersonalInfoReducer,
  editEmergencyContact: EditEmergencyContactReducer,
  notification: getMyNotificationReducer,
  deleteNotification: DeleteNotificationReducer,
  resetPassword: resetPasswordReducer,
  employeeListLayout: employeeListLayoutReducer,
  allProjects: getAllProjectsReducer,
  createProject: createProjectsReducer,
  editProject: editProjectsReducer,
  addTeamToProject: addTeamToProjectsReducer,
  removeTeamFromProject: removeTeamFromProjectsReducer,
  singleProject: getSingleProjectsReducer,
  getMyProjects: getMyProjectsReducer,
  getTaskUnderProjects: getTaskUnderProjectsReducer,
  addTaskForm: addTaskFormReducer,
});

export default reducers;
export type RootState = ReturnType<typeof reducers>;
