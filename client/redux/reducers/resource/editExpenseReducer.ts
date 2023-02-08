import { EditExpenseState } from "../../../models/resources";
import { EditExpenseAction } from "../../action-models";
import { ResourceActionTypes } from "../../constants";

export const editExpenseReducer = (
  state: EditExpenseState = { loading: false, error: null },
  action: EditExpenseAction
): EditExpenseState => {
  switch (action.type) {
    case ResourceActionTypes.EDIT_EXPENSE_REQUEST:
      return {
        loading: true,
        error: null,
      };

    case ResourceActionTypes.GET_ALL_EXPENSES_SUCCESS:
      return {
        loading: false,
        error: null,
      };

    case ResourceActionTypes.EDIT_EXPENSE_FAIL:
      return {
        loading: false,
        error: action.error,
      };

    default:
      return state;
  }
};
