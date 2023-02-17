import { Dispatch } from "react";
import buildClient from "../../../api/buildClient";
import { GoogleAuthAction } from "../../action-models";
import { CustomActionsTypes } from "../../constants";
import { config } from "../../constants/config";

export const googleLoginAction =
  (data: any) => async (dispatch: Dispatch<GoogleAuthAction>) => {
    dispatch({
      type: CustomActionsTypes.GOOGLE_LOGIN,
      payload: data,
    });
  };
