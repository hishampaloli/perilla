import { Dispatch } from "react";
import { getDashboard__API } from "../../../api/tenantAPIs";
import { GetDashBoardAction } from "../../action-models";
import { TenantActionsTypes } from "../../constants";

export const getDashboard =
  (req: any) =>
  async (dispatch: Dispatch<GetDashBoardAction>): Promise<string> => {
    try {
      dispatch({
        type: TenantActionsTypes.GET_DASHBOARD_REQUEST,
      });

      const { data } = await getDashboard__API(req);

      dispatch({
        type: TenantActionsTypes.GET_DASHBOARD_SUCCESS,
        payload: data,
      });

      return "success";
    } catch (error: any) {
      dispatch({
        type: TenantActionsTypes.GET_DASHBOARD_FAIL,
        error: error?.response?.data?.error?.msg,
      });
      return error?.response?.data?.error?.msg;
    }
  };
