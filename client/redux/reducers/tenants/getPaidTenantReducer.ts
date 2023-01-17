import { GetOtpState, GetPaidTenantState } from "../../../models/tenants";
import { GetOtpAction, GetPaidTenantAction } from "../../action-models";
import { TenantActionsTypes } from "../../constants";

export const getPaidTenantReducer = (
  state: GetPaidTenantState = { data: null, error: null },
  action: GetPaidTenantAction
): GetPaidTenantState => {
  switch (action.type) {
    case TenantActionsTypes.GET_PAID_TENANT_SUCCESS:
      return {
        data: action.payload,
        error: null,
      };

    case TenantActionsTypes.GET_PAID_TENANT_FAIL:
      return {
        error: action.error,
        data: null,
      };

    default:
      return state;
  }
};
