import { Dispatch } from "react";
import buildClient from "../../../api/buildClient";
import { getAllClients_API } from "../../../api/projectAPIs";
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
  async (dispatch: Dispatch<GetAllClientsAction>): Promise<string> => {
    try {
      dispatch({
        type: AdminActionsTypes.GET_ALL_CLIENTS_REQUEST,
      });

      const { data } = await getAllClients_API(req, {
        name,
        clientId,
        pageNumber,
      });

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
      return error?.response?.data?.error?.msg;
    }
  };
