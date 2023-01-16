import { GetOtpState } from "../../../models/tenants";
import { GetOtpAction } from "../../action-models";
import { TenantActionsTypes } from "../../constants";

export const getOtpReducer = (
  state: GetOtpState = { loading: false, error: null },
  action: GetOtpAction
): GetOtpState => {
  switch (action.type) {
    case TenantActionsTypes.GET_OTP_REQUEST:
      return {
        loading: true,
        error: null,
      };

    case TenantActionsTypes.GET_OTP_FAIL:
      return {
        error: action.error,
        loading: false,
      };

    default:
      return state;
  }
};
