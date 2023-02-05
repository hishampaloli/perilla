import { Dispatch } from "react";
import { addClient__API } from "../../../api/projectAPIs";
import { AddClientAction } from "../../action-models";
import { AdminActionsTypes } from "../../constants";

export const addClient =
  (req: any, clientDetails: object) =>
  async (dispatch: Dispatch<AddClientAction>, getState: any): Promise<string> => {
    try {
      dispatch({
        type: AdminActionsTypes.ADD_CLIENT_REQUEST,
      });

      const { data } = await addClient__API(req, clientDetails);

      getState().allClients.data.data.push(data.data);

      dispatch({
        type: AdminActionsTypes.GET_ALL_CLIENTS_SUCCESS,
        payload: getState().allClients.data,
      });
      return "success";
    } catch (error: any) {
      dispatch({
        type: AdminActionsTypes.ADD_CLIENT_FAIL,
        error: error?.response?.data?.error?.msg,
      });

      return error?.response?.data?.error?.msg;
    }
  };
