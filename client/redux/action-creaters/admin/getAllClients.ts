import { Dispatch } from "react";
import buildClient from "../../../api/buildClient";
import { ClientDataArr } from "../../../models/admin";
import { GetAllClientsAction } from "../../action-models";
import { AdminActionsTypes } from "../../constants";
import { config } from "../../constants/config";

export const getAllClients =
  (req: any) => async (dispatch: Dispatch<GetAllClientsAction>) => {
    try {
      dispatch({
        type: AdminActionsTypes.GET_ALL_CLIENTS_REQUEST,
      });

      const { data } = await buildClient(req).get<ClientDataArr>(
        `/api/project/client/allClients?`,
        config
      );

      dispatch({
        type: AdminActionsTypes.GET_ALL_CLIENTS_SUCCESS,
        payload: data,
      });

      return "success";
    } catch (error: any) {
      dispatch({
        type: AdminActionsTypes.GET_ALL_CLIENTS_FAIL,
        error: error?.response?.data?.error?.msg,
      });
      console.log(error);
    }
  };
