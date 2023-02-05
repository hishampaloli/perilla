import { tenantService_Url } from "./baseURLs";
import buildClient from "./buildClient";
import { config } from "../redux/constants/config";
import { DashBoardDataObj, LoginData, TenantData } from "../models/tenants";

export const getDashboard__API = (req: any) =>
  buildClient(req).get<DashBoardDataObj>(
    `${tenantService_Url}/getDashboard`,
    config
  );

export const tenantLoginOtp__API = (req: any, loginData: LoginData) =>
  buildClient(req).post<any>(
    `${tenantService_Url}/tenantLogin`,
    loginData,
    config
  )

export const getRegisterOtp__API = (
  req: any,
  number: string,
  companyName: string
) =>
  buildClient(req).post<string>(
    `${tenantService_Url}/getOtp`,
    { number, companyName },
    config
  );

export const getPaidTenantData__API = (req: any, companyName: string) =>
  buildClient(req).get<TenantData>(
    `${tenantService_Url}/getTenant?companyName=${companyName}`,
    config
  );

export const resetPassword__API = (req: any, resetData: object) =>
  buildClient(req).put<any>(
    `${tenantService_Url}/resetPassword`,
    resetData,
    config
  );

export const tenantLogout__API = (req: any) =>
  buildClient(req).post<any>(`${tenantService_Url}/tenantLogout`, config);

export const tenantRegister__API = (req: any, purchaseDate: any) =>
  buildClient(req).post<TenantData>(
    `${tenantService_Url}/createTenant`,
    purchaseDate,
    config
  );

export const tenantLoginVerification__API = (req: any, loginData: LoginData) =>
  buildClient(req).post<TenantData>(
    `${tenantService_Url}/tenantVerifyLogin`,
    loginData,
    config
  );
