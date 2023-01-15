import { TenantActionsTypes } from "../constants";
import { Dispatch } from "react";
import buildClient from "../../api/buildClient";
import { AuthAction, GetOtpAction } from "../action-models/index";
import { LoginData, TenantData } from "../../models/tenants";
import { useRouter } from "next/router";

const config = {
  headers: {
    "Content-Type": "application/json",
  },
};

export const getOtp =
  (req: any, number: string, companyName: string) =>
  async (dispatch: Dispatch<GetOtpAction>) => {
    try {
      dispatch({ type: TenantActionsTypes.GET_OTP_REQUEST });

      const { data } = await buildClient(req).post<string>(
        "/api/tenant/getOtp",
        { number, companyName },
        config
      );

      dispatch({
        type: TenantActionsTypes.GET_OTP_SUCCESS,
        payload: data,
      });

      return true;
    } catch (error: any) {
      dispatch({
        type: TenantActionsTypes.GET_OTP_FAIL,
        error: error.response.data.error.msg,
      });

      return false;
    }
  };

export const tenantRegister =
  (req: any, purchaseDate: any) => async (dispatch: Dispatch<AuthAction>) => {
    try {
      dispatch({
        type: TenantActionsTypes.AUTH_REQUETS,
      });

      console.log(purchaseDate);

      const { data } = await buildClient(req).post<TenantData>(
        "/api/tenant/createTenant",
        purchaseDate,
        config
      );

      localStorage.setItem("userInfo", JSON.stringify(data));

      dispatch({
        type: TenantActionsTypes.AUTH_SUCCESS,
        payload: data,
      });

      return "success";
    } catch (error: any) {
      dispatch({
        type: TenantActionsTypes.AUTH_FAIL,
        error: error?.response?.data?.error?.msg,
      });
      console.log(error);
    }
  };

export const tenantLogin =
  (req: any, loginData: LoginData) =>
  async (dispatch: Dispatch<AuthAction>) => {
    try {
      dispatch({
        type: TenantActionsTypes.AUTH_REQUETS,
      });

      const { data } = await buildClient(req).post<TenantData>(
        "/api/tenant/tenantLogin",
        loginData,
        config
      );

      dispatch({
        type: TenantActionsTypes.AUTH_SUCCESS,
        payload: data,
      });

      return "success";
    } catch (error: any) {
      dispatch({
        type: TenantActionsTypes.AUTH_FAIL,
        error: error?.response?.data?.error?.msg,
      });
      console.log(error);
    }
  };

export const tenantLoginVerification =
  (req: any, loginData: LoginData) =>
  async (dispatch: Dispatch<AuthAction>) => {
    try {
      dispatch({
        type: TenantActionsTypes.AUTH_REQUETS,
      });

      // console.log(loginData);

      const { data } = await buildClient(req).post<TenantData>(
        "/api/tenant/tenantVerifyLogin",
        loginData,
        config
      );

      console.log(data + "sfdfssssssssssssssss");

      localStorage.setItem("userInfo", JSON.stringify(data));

      dispatch({
        type: TenantActionsTypes.AUTH_SUCCESS,
        payload: data,
      });
      if (data) return "success";
    } catch (error: any) {
      dispatch({
        type: TenantActionsTypes.AUTH_FAIL,
        error: error?.response?.data?.error?.msg,
      });
      console.log(error);
    }
  };
