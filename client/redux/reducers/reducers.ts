import { combineReducers } from "redux";
import { TenantInitalData } from "../../models/tenants";
import {
  getOtpReducer,
  userReducer,
  getPaidTenantReducer,
  getStripeLinkReducer,
} from "./tenants";

const reducers = combineReducers({
  getOtp: getOtpReducer,
  user: userReducer,
  paidTenant: getPaidTenantReducer,
  stripeLink: getStripeLinkReducer,
});

export default reducers;
export type RootState = ReturnType<typeof reducers>;
