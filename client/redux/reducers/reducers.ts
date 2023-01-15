import { combineReducers } from "redux";
import { buyProductReducer, getOtpReducer } from "./tenantReducer";

const reducers = combineReducers({
  buyProduct: buyProductReducer,
  getOtp: getOtpReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
