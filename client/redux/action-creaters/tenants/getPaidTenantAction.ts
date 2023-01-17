import { Dispatch } from "react";
import buildClient from "../../../api/buildClient";
import { GetOtpState, LoginData, TenantData } from "../../../models/tenants";
import {
  AuthAction,
  GetOtpAction,
  GetPaidTenantAction,
} from "../../action-models";
import { TenantActionsTypes } from "../../constants";
import { config } from "../../constants/config";

export const getPaidTenantData =
  (req: any, companyName: any) =>
  async (dispatch: Dispatch<GetPaidTenantAction>) => {
    try {
      const { data } = await buildClient(req).get<TenantData>(
        `/api/tenant/getTenant?companyName=${companyName}`,
        config
      );

      dispatch({
        type: TenantActionsTypes.GET_PAID_TENANT_SUCCESS,
        payload: data,
      });

      return "success";
    } catch (error: any) {
      dispatch({
        type: TenantActionsTypes.GET_PAID_TENANT_FAIL,
        error: error?.response?.data?.error?.msg,
      });
      console.log(error);
    }
  };
