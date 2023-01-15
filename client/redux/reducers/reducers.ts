import { combineReducers } from "redux";
import { TenantRegisReducer, getOtpReducer } from "./tenantReducer";

const reducers = combineReducers({
  buyProduct: TenantRegisReducer,
  getOtp: getOtpReducer,
});

export default reducers;
export type RootState = ReturnType<typeof reducers>;
