import { config } from "../../constants/config";
import buildClient from "../../../api/buildClient";
import { ResetPasswordAction } from "../../action-models";
import { TenantActionsTypes } from "../../constants";
import { Dispatch } from "react";
import { resetPassword__API } from "../../../api/tenantAPIs";

export const resetPassword =
  (req: any, resetData: object) =>
  async (dispatch: Dispatch<ResetPasswordAction>): Promise<string> => {
    try {
      dispatch({ type: TenantActionsTypes.RESET_PASSWORD_REQUEST });

      await resetPassword__API(req, resetData);
      
      return "success";
    } catch (error: any) {
      dispatch({
        type: TenantActionsTypes.RESET_PASSWORD_FAIL,
        error: error?.response?.data?.error?.msg,
      });

      return error?.response?.data?.error?.msg
    }
  };
