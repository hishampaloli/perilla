import { Dispatch } from "react";
import buildClient from "../../../api/buildClient";
import { CLientDataObj } from "../../../models/admin";
import { GetClientProfileAction } from "../../action-models";
import { ProfileActionsTypes } from "../../constants";
import { config } from "../../constants/config";

export const getClientProfileData =
  (req: any, id: any) =>
  async (dispatch: Dispatch<GetClientProfileAction>): Promise<void> => {
    try {
      dispatch({
        type: ProfileActionsTypes.GET_CLIENT_PROFILE_REQUETS,
      });

      const { data } = await buildClient(req).get<CLientDataObj>(
        `/api/project/client/${id}`,
        config
      );

      dispatch({
        type: ProfileActionsTypes.GET_CLIENT_PROFILE_SUCCESS,
        payload: data,
      });
    } catch (error: any) {
      dispatch({
        type: ProfileActionsTypes.GET_CLIENT_PROFILE_FAIL,
        error: error?.response?.data?.error?.msg,
      });
    }
  };
