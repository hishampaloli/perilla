import { Dispatch } from "react";
import buildClient from "../../../api/buildClient";
import { ClientDataArr } from "../../../models/admin";
import { GetAllClientsAction } from "../../action-models";
import { AdminActionsTypes } from "../../constants";
import { config } from "../../constants/config";

export const getAllClients =
  (
    req: any,
    {
      name = "",
      clientId = "",
      pageNumber = 1,
    }: { name?: string; clientId?: string; pageNumber?: number }
  ) =>
  async (dispatch: Dispatch<GetAllClientsAction>) => {
    console.log(pageNumber);

    try {
      dispatch({
        type: AdminActionsTypes.GET_ALL_CLIENTS_REQUEST,
      });

      const { data } = await buildClient(req).get<ClientDataArr>(
        `/api/project/client/allClients?clientName=${name}&clientId=${clientId}&pageNumber=${pageNumber}`,
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
