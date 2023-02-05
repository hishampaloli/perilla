import { config } from "../../constants/config";
import { GetOtpAction } from "../../action-models";
import { TenantActionsTypes } from "../../constants";
import { Dispatch } from "react";
import { getRegisterOtp__API } from "../../../api/tenantAPIs";

export const getRegisterOtp =
  (req: any, number: string, companyName: string) =>
  async (dispatch: Dispatch<GetOtpAction>): Promise<any> => {
    try {
      dispatch({ type: TenantActionsTypes.GET_OTP_REQUEST });

      const { data } = await getRegisterOtp__API(req, number, companyName);

      return true;
    } catch (error: any) {
      dispatch({
        type: TenantActionsTypes.GET_OTP_FAIL,
        error: error.response.data.error.msg,
      });

      return error.response.data.error.msg;
    }
  };
