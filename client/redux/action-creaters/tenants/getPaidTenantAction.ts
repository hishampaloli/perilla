import { Dispatch } from "react";
import { getPaidTenantData__API } from "../../../api/tenantAPIs";
import { GetPaidTenantAction } from "../../action-models";
import { TenantActionsTypes } from "../../constants";

export const getPaidTenantData =
  (req: any, companyName: any) =>
  async (dispatch: Dispatch<GetPaidTenantAction>): Promise<string> => {
    try {
      const { data } = await getPaidTenantData__API(req, companyName);

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
      return error?.response?.data?.error?.msg;
    }
  };
