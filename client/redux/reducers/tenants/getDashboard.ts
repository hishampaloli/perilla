import { GetDashBoardState } from "../../../models/tenants";
import { GetOtpAction, GetDashBoardAction } from "../../action-models";
import { TenantActionsTypes } from "../../constants";

export const getDashBoardReducer = (
  state: GetDashBoardState = { data: null, error: null, loading: false },
  action: GetDashBoardAction
): GetDashBoardState => {
  switch (action.type) {
    case TenantActionsTypes.GET_DASHBOARD_REQUEST:
      return {
        data: null,
        error: null,
        loading: true,
      };

    case TenantActionsTypes.GET_DASHBOARD_SUCCESS:
      return {
        data: action.payload,
        error: null,
        loading: false,
      };

      
    case TenantActionsTypes.GET_DASHBOARD_FAIL:
        return {
          data: null,
          error: action.error,
          loading: false,
        };
  
    default:
      return state;
  }
};
