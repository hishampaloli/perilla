import { combineReducers } from "redux";
import { TenantInitalData } from "../../models/tenants";
import { getOtpReducer, userReducer } from "./tenants";

const reducers = combineReducers({
  getOtp: getOtpReducer,
  user: userReducer,
});

export default reducers;
export type RootState = ReturnType<typeof reducers>;
