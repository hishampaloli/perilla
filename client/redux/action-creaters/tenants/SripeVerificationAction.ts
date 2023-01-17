import { Dispatch } from "react";
import buildClient from "../../../api/buildClient";
import { GetOtpState, LoginData, TenantData } from "../../../models/tenants";
import {
  AuthAction,
  GetOtpAction,
  StripeLinkAction,
  StripeVerificationAction,
} from "../../action-models";
import { TenantActionsTypes } from "../../constants";
import { config } from "../../constants/config";

export const GetStripeVerification =
  (req: any, session_id: any) =>
  async (dispatch: Dispatch<StripeVerificationAction>) => {
    try {
      const { data } = await buildClient(req).get<TenantData>(
        `/api/tenant/stripeVerification?session_id=${session_id}`,
        config
      );

      

      localStorage.setItem("userInfo", JSON.stringify(data));

      dispatch({
        type: TenantActionsTypes.AUTH_SUCCESS,
        payload: data,
      });

      dispatch({
        type: TenantActionsTypes.SENT_STRIPE_LINK_FAIL,
        error: null,
      });
      return true
    } catch (error: any) {
      dispatch({
        type: TenantActionsTypes.SENT_STRIPE_LINK_FAIL,
        error: null,
      });
      return false;
    }
  };
