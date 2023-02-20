import { GetAllExpensesAction } from "../../../action-models";
import { ResourceActionTypes } from "../../../constants";
import { Dispatch } from "react";
import { getAllExpenses__API, getMyExpensePosts_API } from "../../../../api";

export const getAllExpenses =
  (req: any, type: string) =>
  async (dispatch: Dispatch<GetAllExpensesAction>): Promise<string> => {
    try {
      dispatch({ type: ResourceActionTypes.GET_ALL_EXPENSES_REQUEST });

      const { data } =
        type === "admin"
          ? await getAllExpenses__API(req)
          : await getMyExpensePosts_API(req);

      dispatch({
        type: ResourceActionTypes.GET_ALL_EXPENSES_SUCCESS,
        payload: data,
      });

      return "success";
    } catch (error: any) {
      dispatch({
        type: ResourceActionTypes.GET_ALL_EXPENSES_FAIL,
        error: error?.response?.data?.error?.msg,
      });

      return error?.response?.data?.error?.msg;
    }
  };
