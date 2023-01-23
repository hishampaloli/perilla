import { Dispatch } from "react";
import buildClient from "../../../api/buildClient";
import { CLientDataObj } from "../../../models/admin";
import { AddClientAction } from "../../action-models";
import { AdminActionsTypes } from "../../constants";
import { config } from "../../constants/config";

export const addClient =
  (req: any, clientDetails: object) =>
  async (dispatch: Dispatch<AddClientAction>, getState: any) => {
    try {
      dispatch({
        type: AdminActionsTypes.ADD_CLIENT_REQUEST,
      });

      const { data } = await buildClient(req).post<CLientDataObj>(
        `/api/project/client/addClient`,
        clientDetails,
        config
      );

      getState().allClients.data.data.push(data.data);

      dispatch({
        type: AdminActionsTypes.GET_ALL_CLIENTS_SUCCESS,
        payload: getState().allClients.data,
      });

      console.log(data);

      console.log(getState().allEmployees.data);

      return "success";
    } catch (error: any) {
      dispatch({
        type: AdminActionsTypes.ADD_CLIENT_FAIL,
        error: error?.response?.data?.error?.msg,
      });

      return error?.response?.data?.error?.msg;
    }
  };
