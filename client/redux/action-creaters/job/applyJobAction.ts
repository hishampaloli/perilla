import { ApplyJobAction } from "../../action-models";
import { Dispatch } from "react";
import { applyJob__API } from "../../../api";
import { JobActionsTypes } from "../../constants/jobTypes";

export const applyJob =
  (req: any, jobData: any) =>
  async (dispatch: Dispatch<ApplyJobAction>, getState: any) => {
    try {
      dispatch({
        type: JobActionsTypes.APPLY_JOB_REQUEST,
      });

      const { data } = await applyJob__API(req, jobData);

      getState().singleJob.data.data.applications.push(data.data);
      console.log(getState().singleJob.data);

      // dispatch({
      //   type: JobActionsTypes.GET_SINGLE_JOB_SUCCESS,
      //   data: getState().singleJob,
      // });

      return "success";
    } catch (error: any) {
      dispatch({
        type: JobActionsTypes.APPLY_JOB_FAIL,
        error: error?.response?.data?.error?.msg,
      });
      console.log(error);
      return error?.response?.data?.error?.msg;
    }
  };
