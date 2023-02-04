import { Dispatch } from "react";
import buildClient from "../../../api/buildClient";
import { projectService_Url } from "../../../api/baseURLs";
import { TaskDataArr } from "../../../models/project";
import { GetMyTasksAction } from "../../action-models";
import { ProjectActionsTypes } from "../../constants";
import { config } from "../../constants/config";

export const getMyTasks =
  (
    req: any,
    status: boolean,
    user: string,
    name: string = "",
    pageNumber: number = 1
  ) =>
  async (dispatch: Dispatch<GetMyTasksAction>, getState: any) => {
    try {
      dispatch({
        type: ProjectActionsTypes.GET_MY_TASKS_REQUEST,
      });

      const { data } = await buildClient(req).get<TaskDataArr>(
        user === "employee"
          ? `${projectService_Url}/task/myTasks?isApproved=${status}`
          : user === "hr"
          ? `${projectService_Url}/task/myTaskPosts?isApproved=${status}`
          : user === "approval"
          ? `${projectService_Url}/task/tasksForApproval`
          : `${projectService_Url}/task/allTasks?isApproved=${status}&taskName=${name}&pageNumber=${pageNumber}`,
        config
      );
      console.log(data);

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
      console.log(error);

      return error?.response?.data?.error?.msg;
    }
  };
