import {
  GetOtpState,
  GetPaidTenantState,
  StripeLinkState,
} from "../../../models/tenants";
import {
  GetOtpAction,
  GetPaidTenantAction,
  StripeLinkAction,
} from "../../action-models";
import { TenantActionsTypes } from "../../constants";

export const getStripeLinkReducer = (
  state: StripeLinkState = { data: null, error: null },
  action: StripeLinkAction
): StripeLinkState => {
  switch (action.type) {
    case TenantActionsTypes.SENT_STRIPE_LINK_SUCCESS:
      return {
        data: action.payload,
        error: null,
      };

    case TenantActionsTypes.SENT_STRIPE_LINK_FAIL:
      return {
        error: action.error,
        data: null,
      };

    default:
      return state;
  }
};
