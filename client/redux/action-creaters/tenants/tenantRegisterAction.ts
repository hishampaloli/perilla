import { Dispatch } from "react";
import buildClient from "../../../api/buildClient";
import { TenantData } from "../../../models/tenants";
import { AuthAction } from "../../action-models";
import { TenantActionsTypes } from "../../constants";
import { config } from "../../constants/config";

export const tenantRegister =
  (req: any, purchaseDate: any) => async (dispatch: Dispatch<AuthAction>) => {
    try {
      dispatch({
        type: TenantActionsTypes.AUTH_REQUETS,
      });

      const { data } = await buildClient(req).post<TenantData>(
        "/api/tenant/createTenant",
        purchaseDate,
        config
      );

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
      console.log(error);
      return false
    }
  };
