import { config } from "../../constants/config";
import buildClient from "../../../api/buildClient";
import { GetOtpAction } from "../../action-models";
import { TenantActionsTypes } from "../../constants";
import { Dispatch } from "react";

export const getRegisterOtp =
  (req: any, number: string, companyName: string) =>
  async (dispatch: Dispatch<GetOtpAction>) => {
    try {
      dispatch({ type: TenantActionsTypes.GET_OTP_REQUEST });

      const { data } = await buildClient(req).post<string>(
        "/api/tenant/getOtp",
        { number, companyName },
        config
      );

      return true;
    } catch (error: any) {
      dispatch({
        type: TenantActionsTypes.GET_OTP_FAIL,
        error: error.response.data.error.msg,
      });

      return error.response.data.error.msg;
    }
  };
