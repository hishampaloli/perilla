import { Dispatch } from "react";
import buildClient from "../../../api/buildClient";
import { GetOtpState, LoginData } from "../../../models/tenants";
import { AuthAction, GetOtpAction } from "../../action-models";
import { TenantActionsTypes } from "../../constants";
import { config } from "../../constants/config";

export const tenantLoginOtp =
  (req: any, loginData: LoginData) =>
  async (dispatch: Dispatch<GetOtpAction>) => {
    try {
      dispatch({
        type: TenantActionsTypes.GET_OTP_REQUEST,
      });

      const { data } = await buildClient(req).post<any>(
        "/api/tenant/tenantLogin",
        loginData,
        config
      );

      return "success";
    } catch (error: any) {
      dispatch({
        type: TenantActionsTypes.GET_OTP_FAIL,
        error: error?.response?.data?.error?.msg,
      });
      console.log(error);
    }
  };
