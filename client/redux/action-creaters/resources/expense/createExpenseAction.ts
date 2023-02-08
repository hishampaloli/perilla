import { CreateExpenseAction } from "../../../action-models";
import { ResourceActionTypes } from "../../../constants";
import { Dispatch } from "react";
import { createExpense_API } from "../../../../api";

export const createExpense =
  (req: any, expenseData: object) =>
  async (
    dispatch: Dispatch<CreateExpenseAction>,
    getState: any
  ): Promise<string> => {
    try {
      dispatch({ type: ResourceActionTypes.CREATE_EXPENSE_REQUEST });

      const { data } = await createExpense_API(req, expenseData);

      getState().allAssets.data.data.unshift(data.data);
      dispatch({
        type: ResourceActionTypes.GET_ALL_EXPENSES_SUCCESS,
        payload: getState().allAssets.data,
      });

      return "success";
    } catch (error: any) {
      dispatch({
        type: ResourceActionTypes.CREATE_EXPENSE_FAIL,
        error: error.response.data.error.msg,
      });

      return error.response.data.error.msg.message;
    }
  };
