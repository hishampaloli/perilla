import { ChangeApplicationStatusAction } from "../../action-models";
import { Dispatch } from "react";
import { changeApplicationStatus_API } from "../../../api";
import { JobActionsTypes } from "../../constants/jobTypes";

export const changeApplicationStatus =
  (req: any, jobId: string, jobData: any) =>
  async (dispatch: Dispatch<ChangeApplicationStatusAction>, getState: any) => {
    try {
      dispatch({
        type: JobActionsTypes.CHANGE_APPLICATION_STATUS_REQUEST,
      });

      const { data } = await changeApplicationStatus_API(req, jobId, jobData);

      getState().singleApplication.data.data = data.data;
      console.log(getState().singleApplication);

      dispatch({
        type: JobActionsTypes.CHANGE_APPLICATION_STATUS_SUCCESS,
        payload: getState().singleApplication.data,
      });

      return "success";
    } catch (error: any) {
      dispatch({
        type: JobActionsTypes.CHANGE_APPLICATION_STATUS_FAIL,
        error: error.response.data.error.msg,
      });
      console.log(error);

      return error.response.data.error.msg;
    }
  };
