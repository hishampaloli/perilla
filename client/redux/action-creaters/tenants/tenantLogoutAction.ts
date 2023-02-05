import { Dispatch } from "react";
import { tenantLogout__API } from "../../../api/tenantAPIs";
import { LogoutAction } from "../../action-models";
import { TenantActionsTypes } from "../../constants";

export const tenantLogout =
  (req: any) =>
  async (dispatch: Dispatch<LogoutAction>): Promise<any> => {
    try {
      const { data } = await tenantLogout__API(req);
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
      return error?.response?.data?.error?.msg;
    }
  };
