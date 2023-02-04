import { Dispatch } from "react";
import buildClient from "../../../api/buildClient";
import { DashBoardDataObj } from "../../../models/tenants";
import { GetDashBoardAction } from "../../action-models";
import { TenantActionsTypes } from "../../constants";
import { config } from "../../constants/config";

export const getDashboard =
  (req: any) => async (dispatch: Dispatch<GetDashBoardAction>) => {
    try {
      dispatch({
        type: TenantActionsTypes.GET_DASHBOARD_REQUEST,
      });

      const { data } = await buildClient(req).get<DashBoardDataObj>(
        "/api/tenant/getDashboard",
        config
      );

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
