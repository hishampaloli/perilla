import { TenantActionsTypes } from "../constants";
import { Dispatch } from "react";
import buildClient from "../../api/buildClient";
import { BuyProductAction, GetOtpAction } from "../action-models/index";
import { TenantData } from "../../models/tenants";

const config = {
  headers: {
    "Content-Type": "application/json",
  },
};

export const getOtp =
  (req: any, number: string) => async (dispatch: Dispatch<GetOtpAction>) => {
    try {
      dispatch({ type: TenantActionsTypes.GET_OTP_REQUEST });
console.log(number)
      const { data } = await buildClient(req).post<string>(
        "/api/tenant/getOtp",
        number,
        config
      );

      console.log(data)
      console.log('sfdfsdds')

      dispatch({
        type: TenantActionsTypes.GET_OTP_SUCCESS,
        payload: data,
      });
    } catch (error: any) {
      dispatch({
        type: TenantActionsTypes.GET_OTP_FAIL,
        error: error.response.data,
      });
    }
  };

export const buyProduct =
  (req: any, purchaseDate: any) =>
  async (dispatch: Dispatch<BuyProductAction>) => {
    try {
      dispatch({
        type: TenantActionsTypes.BUY_PRODUCT_REQUETS,
      });

      const { data } = await buildClient(req).post<TenantData>(
        "/api/tenant/createTenant",
        purchaseDate,
        config
      );

      dispatch({
        type: TenantActionsTypes.BUY_PRODUCT_SUCCESS,
        payload: data,
      });
    } catch (error: any) {
      dispatch({
        type: TenantActionsTypes.BUY_PRODUCT_FAIL,
        error: error.response.data,
      });
    }
  };
