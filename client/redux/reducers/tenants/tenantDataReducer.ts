import {
  AuthState,
  TenantData,
  TenantInitalData,
  UserDataState,
} from "../../../models/tenants";
import { AuthAction } from "../../action-models";
import { TenantActionsTypes } from "../../constants";

let tenantDatas: TenantData;

if (typeof window !== "undefined") {
  const userInfoFromStorage: TenantData = localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo")!)
    : null;
  tenantDatas = userInfoFromStorage;
}

export const userReducer = (
  state: AuthState = { data: tenantDatas, loading: false, error: null },
  action: any
): any => {
  console.log(action);
  switch (action.type) {
    case TenantActionsTypes.AUTH_REQUETS:
      return {
        error: null,
        loading: false,
        data: null,
      };

    case TenantActionsTypes.AUTH_SUCCESS:
      return {
        error: null,
        loading: false,
        data: action.payload,
      };

    case TenantActionsTypes.LOGOUT_SUCCESS:
      return {
        error: null,
        loading: false,
        data: null,
      };

    case TenantActionsTypes.AUTH_FAIL:
      console.log("&&&&&&&&&&&&&&&&&&77");
      return {
        error: action.error,
        loading: false,
        data: null,
      };

    default:
      return state;
  }
};
