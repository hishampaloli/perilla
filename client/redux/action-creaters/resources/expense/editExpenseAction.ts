import { EditExpenseAction } from "../../../action-models";
import { ResourceActionTypes } from "../../../constants";
import { Dispatch } from "react";
import { editExpense_API } from "../../../../api";
import { ExpenseData } from "../../../../models/resources";

export const editExpenses =
  (req: any, expenseId: string, expenseData: object) =>
  async (
    dispatch: Dispatch<EditExpenseAction>,
    getState: any
  ): Promise<string> => {
    try {
      dispatch({ type: ResourceActionTypes.EDIT_EXPENSE_REQUEST });

      const { data } = await editExpense_API("", expenseId, expenseData);

      getState().allExpenses.data.data =
        getState().allExpenses.data.data.filter((el: ExpenseData) => {
          return el.id !== expenseId;
        });
      getState().allExpenses.data.data.unshift(data.data);
      dispatch({
        type: ResourceActionTypes.GET_ALL_EXPENSES_SUCCESS,
        payload: getState().allAssets.data,
      });

      return "success";
    } catch (error: any) {
      dispatch({
        type: ResourceActionTypes.EDIT_EXPENSE_FAIL,
        error: error.response.data.error.msg,
      });

      return error.response.data.error.msg;
    }
  };
