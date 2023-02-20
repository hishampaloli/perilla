import { CreateJobAction } from "../../action-models";
import { Dispatch } from "react";
import { createJob__API } from "../../../api";
import { JobActionsTypes } from "../../constants/jobTypes";

export const createJob =
  (req: any, jobData: any) =>
  async (dispatch: Dispatch<CreateJobAction>, getState: any) => {
    try {
      dispatch({
        type: JobActionsTypes.CREATE_JOB_REQUEST,
      });

      const { data } = await createJob__API(req, jobData);

      getState().allJobs.data.data.unshift(data.data);
      console.log(getState().allJobs.data);

      dispatch({
        type: JobActionsTypes.GET_ALL_JOBS_SUCCESS,
        payload: getState().allJobs.data,
      });

      return "success";
    } catch (error: any) {
      dispatch({
        type: JobActionsTypes.CREATE_JOB_FAIL,
        error: error?.response?.data?.error?.msg,
      });
      console.log(error);

      return error?.response?.data?.error?.msg;
    }
  };
