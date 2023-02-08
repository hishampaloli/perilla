import { CreateExpenseState } from "../../../models/resources";
import { CreateExpenseAction } from "../../action-models";
import { ResourceActionTypes } from "../../constants";

export const createExpenseReducer = (
  state: CreateExpenseState = { loading: false, error: null },
  action: CreateExpenseAction
): CreateExpenseState => {
  switch (action.type) {
    case ResourceActionTypes.CREATE_EXPENSE_REQUEST:
      return {
        loading: true,
        error: null,
      };

    case ResourceActionTypes.GET_ALL_EXPENSES_SUCCESS:
      return {
        loading: false,
        error: null,
      };

    case ResourceActionTypes.CREATE_EXPENSE_FAIL:
      return {
        loading: false,
        error: action.error,
      };

    default:
      return state;
  }
};
