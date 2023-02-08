import { combineReducers } from "redux";
import { TenantInitalData } from "../../models/tenants";
import {
  getOtpReducer,
  userReducer,
  getPaidTenantReducer,
  getStripeLinkReducer,
  resetPasswordReducer,
  getDashBoardReducer,
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
  createAssetReducer,
  deleteAssetReducer,
  editAssetReducer,
  getAllAssetReducer,
  getSingleAssetReducer,
  createExpenseReducer,
  deleteExpenseReducer,
  editExpenseReducer,
  getAlExpensesReducer,
} from "./resource";
import {
  addTeamToProjectsReducer,
  approveTaskReducer,
  createProjectsReducer,
  editProjectsReducer,
  editTaskReducer,
  getAllProjectsReducer,
  getMyProjectsReducer,
  getMyTasksReducer,
  getSingleProjectsReducer,
  getSingleTaskReducer,
  getTaskUnderProjectsReducer,
  removeTeamFromProjectsReducer,
  reqTaskApprovalReducer,
} from "./project";
import { employeeListLayoutReducer, addTaskFormReducer } from "./custom";
import {
  applyLeaveReducer,
  approveLeaveReducer,
  getLeaveReqReducer,
  getMyLeavesReducer,
  viewSingleLeaveReducer,
} from "./leave";

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
  getDashBoard: getDashBoardReducer,
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
  singleTask: getSingleTaskReducer,
  approveTask: approveTaskReducer,
  requestTaskApproval: reqTaskApprovalReducer,
  getMyTasks: getMyTasksReducer,
  editTask: editTaskReducer,

  getleaveRequests: getLeaveReqReducer,
  getMyleaves: getMyLeavesReducer,
  approveLeaves: approveLeaveReducer,
  applyLeave: applyLeaveReducer,
  singleLeave: viewSingleLeaveReducer,

  createAsset: createAssetReducer,
  editAsset: editAssetReducer,
  deleteAsset: deleteAssetReducer,
  allAssets: getAllAssetReducer,
  singleAsset: getSingleAssetReducer,

  createExpense: createExpenseReducer,
  editExpense: editExpenseReducer,
  deleteExpense: deleteExpenseReducer,
  allExpenses: getAlExpensesReducer,
});

export default reducers;
export type RootState = ReturnType<typeof reducers>;
