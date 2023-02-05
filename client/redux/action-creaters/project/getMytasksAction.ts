import { Dispatch } from "react";
import { GetMyTasksAction } from "../../action-models";
import { ProjectActionsTypes } from "../../constants";
import { getMyTasks__API } from "../../../api";

export const getMyTasks =
  (
    req: any,
    status: boolean,
    user: string,
    name: string = "",
    pageNumber: number = 1
  ) =>
  async (dispatch: Dispatch<GetMyTasksAction>): Promise<string> => {
    try {
      dispatch({
        type: ProjectActionsTypes.GET_MY_TASKS_REQUEST,
      });

      const { data } = await getMyTasks__API(
        req,
        status,
        user,
        name,
        pageNumber
      );

      dispatch({
        type: ProjectActionsTypes.GET_MY_TASKS_SUCCESS,
        payload: data,
      });

      return "success";
    } catch (error: any) {
      dispatch({
        type: ProjectActionsTypes.GET_MY_TASKS_FAIL,
        error: error?.response?.data?.error?.msg,
      });

      return error?.response?.data?.error?.msg;
    }
  };
