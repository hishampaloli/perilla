import { ResetPasswordState } from "../../../models/tenants";
import { ResetPasswordAction } from "../../action-models";
import { TenantActionsTypes } from "../../constants";

export const resetPasswordReducer = (
  state: ResetPasswordState = { loading: false, error: null },
  action: ResetPasswordAction
): ResetPasswordState => {
  switch (action.type) {
    case TenantActionsTypes.RESET_PASSWORD_REQUEST:
      return {
        loading: true,
        error: null,
      };

    case TenantActionsTypes.RESET_PASSWORD_FAIL:
      return {
        error: action.error,
        loading: false,
      };

    default:
      return state;
  }
};
