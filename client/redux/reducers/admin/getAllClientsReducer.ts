import { AllClientsState } from "../../../models/admin";
import { GetAllClientsAction } from "../../action-models";
import { AdminActionsTypes } from "../../constants";

export const getAllClientsReducer = (
  state: AllClientsState = { data: null, loading: false, error: null },
  action: GetAllClientsAction
): AllClientsState => {
  switch (action.type) {
    case AdminActionsTypes.GET_ALL_CLIENTS_REQUEST:
      return {
        loading: true,
        data: null,
        error: null,
      };

    case AdminActionsTypes.GET_ALL_CLIENTS_SUCCESS:
      return {
        error: null,
        loading: false,
        data: action.payload,
      };

    case AdminActionsTypes.GET_ALL_CLIENTS_FAIL:
      return {
        error: action.error,
        loading: false,
        data: null,
      };

    default:
      return state;
  }
};
