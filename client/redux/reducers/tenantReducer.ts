import { BuyProductState, GetOtpState } from "../../models/tenants";
import {
  BuyProductAction,
  GetOtpAction,
} from "../action-models/tenant-action-models";
import { TenantActionsTypes } from "../constants/index";

export const buyProductReducer = (
  state: BuyProductState = { data: {}, loading: false, error: null },
  action: BuyProductAction
): BuyProductState => {
  switch (action.type) {
    case TenantActionsTypes.BUY_PRODUCT_REQUETS:
      return {
        data: null,
        loading: true,
        error: null,
      };

    case TenantActionsTypes.BUY_PRODUCT_SUCCESS:
      return {
        error: null,
        loading: false,
        data: action.payload,
      };

    case TenantActionsTypes.BUY_PRODUCT_FAIL:
      return {
        error: action.error,
        loading: false,
        data: null,
      };

    default:
      return state;
  }
};

export const getOtpReducer = (
  state: GetOtpState = { data: {}, loading: false, error: null },
  action: GetOtpAction
): GetOtpState => {
  switch (action.type) {
    case TenantActionsTypes.GET_OTP_REQUEST:
      return {
        data: null,
        loading: true,
        error: null,
      };

    case TenantActionsTypes.GET_OTP_SUCCESS:
      return {
        error: null,
        loading: false,
        data: action.payload,
      };

    case TenantActionsTypes.GET_OTP_FAIL:
      return {
        error: action.error,
        loading: false,
        data: null,
      };

    default:
      return state;
  }
};
