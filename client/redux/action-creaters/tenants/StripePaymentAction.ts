import { Dispatch } from "react";
import buildClient from "../../../api/buildClient";
import { GetOtpState, LoginData } from "../../../models/tenants";
import {
  AuthAction,
  GetOtpAction,
  StripeLinkAction,
} from "../../action-models";
import { TenantActionsTypes } from "../../constants";
import { config } from "../../constants/config";

export const GetStripeLink =
  (req: any) => async (dispatch: Dispatch<StripeLinkAction>) => {
    try {
      const { data } = await buildClient(req).post<{ url: string }>(
        "/api/tenant/payment",
        config
      );

      dispatch({
        type: TenantActionsTypes.SENT_STRIPE_LINK_SUCCESS,
        payload: data,
      });
    } catch (error: any) {
      dispatch({
        type: TenantActionsTypes.SENT_STRIPE_LINK_FAIL,
        error: error?.response?.data?.error?.msg,
      });
      console.log(error);
    }
  };
