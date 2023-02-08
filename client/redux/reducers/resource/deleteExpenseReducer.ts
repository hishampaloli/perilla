import { DeleteExpenseState } from "../../../models/resources";
import { DeleteExpenseAction } from "../../action-models";
import { ResourceActionTypes } from "../../constants";

export const deleteExpenseReducer = (
  state: DeleteExpenseState = { loading: false, error: null },
  action: DeleteExpenseAction
): DeleteExpenseState => {
  switch (action.type) {
    case ResourceActionTypes.DELETE_EXPENSE_REQUEST:
      return {
        loading: true,
        error: null,
      };

    case ResourceActionTypes.GET_ALL_EXPENSES_SUCCESS:
      return {
        loading: false,
        error: null,
      };

    case ResourceActionTypes.DELETE_EXPENSE_FAIL:
      return {
        loading: false,
        error: action.error,
      };

    default:
      return state;
  }
};