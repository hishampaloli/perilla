import { config } from "../../constants/config";
import buildClient from "../../../api/buildClient";
import { ResetPasswordAction } from "../../action-models";
import { TenantActionsTypes } from "../../constants";
import { Dispatch } from "react";

export const resetPassword =
  (req: any, resetData: object) =>
  async (dispatch: Dispatch<ResetPasswordAction>) => {
    try {
      dispatch({ type: TenantActionsTypes.RESET_PASSWORD_REQUEST });

      const { data } = await buildClient(req).put<any>(
        "/api/tenant/resetPassword",
        resetData,
        config
      );

      console.log(data);

      return "success";
    } catch (error: any) {
      dispatch({
        type: TenantActionsTypes.RESET_PASSWORD_FAIL,
        error: error.response.data.error.msg,
      });

      return error.response.data.error.msg;
    }
  };
