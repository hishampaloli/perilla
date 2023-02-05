import { baseURL, userService_Url } from "./baseURLs";
import buildClient from "./buildClient";
import { config } from "../redux/constants/config";

import { EmployeeDataArray, EmployeeDataObj } from "../models/admin";
import {
  BankDetailsArr,
  EmployeeProfileDataObj,
  NotificationDataArr,
  SalaryDetailsData,
  SalaryDetailsDataObj,
} from "../models/profile";

export const addEmployee__API = (req: any, employeeDetails: object) =>
  buildClient(req).post<EmployeeDataObj>(
    `${userService_Url}/employee/createEmployee`,
    employeeDetails,
    config
  );

export const getAllEmployees__API = (
  req: any,
  {
    role,
    name = "",
    employeeId = "",
    pageNumber = 1,
  }: { role: string; name?: string; employeeId?: string; pageNumber?: number }
) =>
  buildClient(req).get<EmployeeDataArray>(
    `${userService_Url}/employee/getAllEmployees?role=${role}&name=${name}&employeeId=${employeeId}&pageNumber=${pageNumber}`,
    config
  );

export const approveBankDetails__API = (
  req: any,
  employeeId: any,
  status: boolean
) =>
  buildClient(req).patch<any>(
    `${userService_Url}/employee/bankStatus/${employeeId}?status=${status}`,
    config
  );

export const getEmployeeOtp__API = (req: any, loginData: any) =>
  buildClient(req).post<string>(
    `${userService_Url}/employee/login`,
    loginData,
    config
  );

export const getEmployeeOtpVerfication__API = (req: any, loginData: any) =>
  buildClient(req).post<any>(
    `${userService_Url}/employee/verifyOtp`,
    loginData,
    config
  );

export const getMyProfile__API = (req: any) =>
  buildClient(req).get<EmployeeProfileDataObj>(
    `${userService_Url}/employee/myProfile`,
    config
  );

export const logoutEmployee__API = (req: any) =>
  buildClient(req).post<any>(`${userService_Url}/employee/logout`, config);

export const sendBankDetails__API = (req: any) =>
  buildClient(req).patch<any>(
    `${userService_Url}/employee/sendBankDetails`,
    config
  );

export const changeEmployeePassword__API = (
  req: any,
  id: string,
  password: any
) =>
  buildClient(req).patch<any>(
    `${userService_Url}/employee/changePassword/${id}`,
    password,
    config
  );

export const deleteNotification__API = (req: any, id: string) =>
  buildClient(req).delete<any>(
    `${userService_Url}/employee/notifications/${id}`,
    config
  );

export const editBankDetails__API = (req: any, bankData: any) =>
  buildClient(req).put<any>(
    `${userService_Url}/employee/editBankDetails`,
    bankData,
    config
  );

export const editEmergencyContact__API = (req: any, emergencyData: any) =>
  buildClient(req).patch<any>(
    `${userService_Url}/employee/addEmergencyContact`,
    emergencyData,
    config
  );

export const editEmployeeProfile__API = (
  req: any,
  id: string,
  employeeData: {
    name: string;
    email: string;
    phone?: number;
    designation: string;
    role: string;
    employeeId: string;
  }
) =>
  buildClient(req).put<EmployeeProfileDataObj>(
    `${userService_Url}/employee/edit/${id}`,
    employeeData,
    config
  );

export const editPersonalInfo__API = (req: any, personalData: any) =>
  buildClient(req).patch<any>(
    `${userService_Url}/employee/addPersonalInfo`,
    personalData,
    config
  );

export const editSalaryDetails__API = (
  req: any,
  id: string,
  salaryDetails: SalaryDetailsData
) =>
  buildClient(req).put<SalaryDetailsDataObj>(
    `${userService_Url}/employee/salaryDetails/${id}`,
    salaryDetails,
    config
  );

export const editallBankDetailsData__API = (req: any, pageNumber: number) =>
  buildClient(req).get<BankDetailsArr>(
    `${userService_Url}/employee/allBankReq?pageNumber=${pageNumber}`,
    config
  );

export const getEmployeeProfileData__API = (req: any, phone: number) =>
  buildClient(req).get<EmployeeProfileDataObj>(
    `${userService_Url}/employee/getEmployee?phone=${phone}`,
    config
  );

export const GetMyNotifications__API = (req: any) =>
  buildClient(req).get<NotificationDataArr>(
    `${userService_Url}/employee/notifications`,
    config
  );

export const removeEmployee__API = (req: any, id: string) =>
  buildClient(req).patch<any>(
    `${userService_Url}/employee/remove/${id}`,
    config
  );
