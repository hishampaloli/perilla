import { Dispatch } from "react";
import { tenantLoginVerification__API } from "../../../api/tenantAPIs";
import { LoginData } from "../../../models/tenants";
import { AuthAction } from "../../action-models";
import { TenantActionsTypes } from "../../constants";

export const tenantLoginVerification =
  (req: any, loginData: LoginData) =>
  async (dispatch: Dispatch<AuthAction>): Promise<string | void> => {
    try {
      dispatch({
        type: TenantActionsTypes.AUTH_REQUETS,
      });

      const { data } = await tenantLoginVerification__API(req, loginData);

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

      return error?.response?.data?.error?.msg;
    }
  };
