import { Dispatch } from "react";
import buildClient from "../../../api/buildClient";
import { AuthState, LoginData, TenantData } from "../../../models/tenants";
import { AuthAction } from "../../action-models";
import { TenantActionsTypes } from "../../constants";
import { config } from "../../constants/config";

export const tenantLoginVerification =
  (req: any, loginData: LoginData) =>
  async (dispatch: Dispatch<AuthAction>) => {
    try {
      dispatch({
        type: TenantActionsTypes.AUTH_REQUETS,
      });

      const { data } = await buildClient(req).post<TenantData>(
        "/api/tenant/tenantVerifyLogin",
        loginData,
        config
      );

      console.log(data);
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

      return false;
    }
  };
