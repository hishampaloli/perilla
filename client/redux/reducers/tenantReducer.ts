import { AuthState, GetOtpState } from "../../models/tenants";
import {
  AuthAction,
  GetOtpAction,
} from "../action-models/tenant-action-models";
import { TenantActionsTypes } from "../constants/index";

export const TenantRegisReducer = (
  state: AuthState = { data: null, loading: false, error: null },
  action: AuthAction
): AuthState => {
  switch (action.type) {
    case TenantActionsTypes.AUTH_REQUETS:
      return {
        data: null,
        loading: true,
        error: null,
      };

    case TenantActionsTypes.AUTH_SUCCESS:
      return {
        error: null,
        loading: false,
        data: action.payload,
      };

    case TenantActionsTypes.AUTH_FAIL:
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
  state: GetOtpState = { data: null, loading: false, error: null },
  action: GetOtpAction
): GetOtpState => {
  switch (action.type) {
    case TenantActionsTypes.GET_OTP_REQUEST:
      console.log("request");
      return {
        data: null,
        loading: true,
        error: null,
      };

    case TenantActionsTypes.GET_OTP_SUCCESS:
      console.log(action);
      return {
        error: null,
        loading: false,
        data: action.payload,
      };

    case TenantActionsTypes.GET_OTP_FAIL:
      console.log(action);
      return {
        error: action.error,
        loading: false,
        data: null,
      };

    default:
      return state;
  }
};
