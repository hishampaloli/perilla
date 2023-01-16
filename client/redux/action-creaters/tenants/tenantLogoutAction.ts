import { Dispatch } from "react";
import buildClient from "../../../api/buildClient";
import { LogoutAction } from "../../action-models";
import { TenantActionsTypes } from "../../constants";
import { config } from "../../constants/config";

export const tenantLogout =
  (req: any) => async (dispatch: Dispatch<LogoutAction>) => {
    try {
      const { data } = await buildClient(req).post<any>(
        "/api/tenant/tenantLogout",
        config
      );

      localStorage.removeItem("userInfo");

      dispatch({
        type: TenantActionsTypes.LOGOUT_SUCCESS,
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
