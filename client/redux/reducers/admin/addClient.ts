import { AddClientsState } from "../../../models/admin";
import { AddClientAction } from "../../action-models";
import { AdminActionsTypes } from "../../constants";

export const addClientReducer = (
  state: AddClientsState = { data: null, loading: false, error: null },
  action: AddClientAction
): AddClientsState => {
  switch (action.type) {
    case AdminActionsTypes.ADD_CLIENT_REQUEST:
      return {
        loading: true,
        data: null,
        error: null,
      };

    case AdminActionsTypes.ADD_CLIENT_FAIL:
      return {
        error: action.error,
        loading: false,
        data: null,
      };

    default:
      return state;
  }
};
