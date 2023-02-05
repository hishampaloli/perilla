import { Dispatch } from "react";
import buildClient from "../../../api/buildClient";
import { ClientData, CLientDataObj } from "../../../models/admin";
import { EditClientState } from "../../../models/profile";
import { EditClientAction } from "../../action-models";
import { ProfileActionsTypes } from "../../constants";
import { config } from "../../constants/config";

export const editClientProfile =
  (req: any, id: string, clientData: ClientData) =>
  async (dispatch: Dispatch<EditClientAction>, getState: any): Promise<string> => {
    try {
      dispatch({
        type: ProfileActionsTypes.EDIT_CLIENT_PROFILE_REQUETS,
      });

      const { data } = await buildClient(req).put<CLientDataObj>(
        `/api/project/client/${id}`,
        clientData,
        config
      );

      console.log(data);
      console.log("()()()()()()()()()()()()(");

      dispatch({
        type: ProfileActionsTypes.GET_CLIENT_PROFILE_SUCCESS,
        payload: data,
      });

      return "success";
    } catch (error: any) {
      dispatch({
        type: ProfileActionsTypes.EDIT_CLIENT_PROFILE_FAIL,
        error: error?.response?.data?.error?.msg,
      });
      return error?.response?.data?.error?.msg;
    }
  };
