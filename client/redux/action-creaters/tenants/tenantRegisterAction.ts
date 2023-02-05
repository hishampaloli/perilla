import { Dispatch } from "react";
import { tenantRegister__API } from "../../../api/tenantAPIs";
import { AuthAction } from "../../action-models";
import { TenantActionsTypes } from "../../constants";

export const tenantRegister =
  (req: any, purchaseDate: any) =>
  async (dispatch: Dispatch<AuthAction>): Promise<string | boolean> => {
    try {
      dispatch({
        type: TenantActionsTypes.AUTH_REQUETS,
      });

      const { data } = await tenantRegister__API(req, purchaseDate);

      localStorage.setItem("userInfo", JSON.stringify(data));

      dispatch({
        type: TenantActionsTypes.AUTH_SUCCESS,
        payload: data,
      });

      return "success";
    } catch (error: any) {
      dispatch({
        type: TenantActionsTypes.AUTH_FAIL,
        error: error?.response?.data?.error?.msg,
      });
      return false;
    }
  };
