import { GetAllExpensesState } from "../../../models/resources";
import { GetAllExpensesAction } from "../../action-models";
import { ResourceActionTypes } from "../../constants";

export const getAlExpensesReducer = (
  state: GetAllExpensesState = { data: null, loading: false, error: null },
  action: GetAllExpensesAction
): GetAllExpensesState => {
  switch (action.type) {
    case ResourceActionTypes.GET_ALL_EXPENSES_REQUEST:
      return {
        loading: true,
        error: null,
        data: null,
      };

    case ResourceActionTypes.GET_ALL_EXPENSES_SUCCESS:
      return {
        loading: false,
        error: null,
        data: action.payload,
      };

    case ResourceActionTypes.GET_ALL_EXPENSES_FAIL:
      return {
        loading: false,
        error: action.error,
        data: null,
      };

    default:
      return state;
  }
};
