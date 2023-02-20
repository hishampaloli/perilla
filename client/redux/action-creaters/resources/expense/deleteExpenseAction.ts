import { DeleteExpenseAction } from "../../../action-models";
import { ResourceActionTypes } from "../../../constants";
import { Dispatch } from "react";
import { deleteExpense_API } from "../../../../api";
import { ExpenseData } from "../../../../models/resources";

export const deleteExpense =
  (req: any, expenseId: string) =>
  async (
    dispatch: Dispatch<DeleteExpenseAction>,
    getState: any
  ): Promise<string> => {
    try {
      dispatch({ type: ResourceActionTypes.DELETE_EXPENSE_REQUEST });

      const { data } = await deleteExpense_API("", expenseId);

      getState().allExpenses.data.data =
        getState().allExpenses.data.data.filter((el: ExpenseData) => {
          return el.id !== expenseId;
        });
      dispatch({
        type: ResourceActionTypes.GET_ALL_EXPENSES_SUCCESS,
        payload: getState().allExpenses.data,
      });

      return "success";
    } catch (error: any) {
      dispatch({
        type: ResourceActionTypes.DELETE_EXPENSE_FAIL,
        error: error?.response?.data?.error?.msg,
      });

      return error?.response?.data?.error?.msg;
    }
  };
