import { Dispatch } from "react";
import buildClient from "../../../api/buildClient";
import { tenantLoginOtp__API } from "../../../api/tenantAPIs";
import { GetOtpState, LoginData } from "../../../models/tenants";
import { AuthAction, GetOtpAction } from "../../action-models";
import { TenantActionsTypes } from "../../constants";
import { config } from "../../constants/config";

export const tenantLoginOtp =
  (req: any, loginData: LoginData) =>
  async (dispatch: Dispatch<GetOtpAction>): Promise<string> => {
    try {
      dispatch({
        type: TenantActionsTypes.GET_OTP_REQUEST,
      });

      await tenantLoginOtp__API(req, loginData);

      return "success";
    } catch (error: any) {
      dispatch({
        type: TenantActionsTypes.GET_OTP_FAIL,
        error: error?.response?.data?.error?.msg,
      });
      return error?.response?.data?.error?.msg;
    }
  };
