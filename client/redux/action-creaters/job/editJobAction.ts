import { EditJobAction } from "../../action-models";
import { Dispatch } from "react";
import { editJob__API } from "../../../api";
import { JobActionsTypes } from "../../constants/jobTypes";

export const editJob =
  (req: any, jobId: string, jobData: any) =>
  async (dispatch: Dispatch<EditJobAction>, getState: any) => {
    try {
      dispatch({
        type: JobActionsTypes.EDIT_JOB_REQUEST,
      });

      const { data } = await editJob__API(req, jobId, jobData);

      getState().singleJob.data.data = data.data;
      console.log(getState().singleJob);

      dispatch({
        type: JobActionsTypes.EDIT_JOB_SUCCESS,
        payload: getState().singleJob.data,
      });

      dispatch({
        type: JobActionsTypes.GET_SINGLE_JOB_SUCCESS,
        payload: getState().singleJob.data,
      });

      return "success";
    } catch (error: any) {
      dispatch({
        type: JobActionsTypes.EDIT_JOB_FAIL,
        error: error.response.data.error.msg,
      });
      console.log(error);

      return error.response.data.error.msg;
    }
  };
