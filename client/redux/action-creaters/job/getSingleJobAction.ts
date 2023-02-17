import { GetSingleJobAction } from "../../action-models";
import { Dispatch } from "react";
import { singleJob__API } from "../../../api";
import { JobActionsTypes } from "../../constants/jobTypes";

export const getSingleJobs =
  (req: any, jobId: any) => async (dispatch: Dispatch<GetSingleJobAction>) => {
    try {
      dispatch({
        type: JobActionsTypes.GET_SINGLE_JOB_REQUEST,
      });

      const { data } = await singleJob__API(req, jobId);

      dispatch({
        type: JobActionsTypes.GET_SINGLE_JOB_SUCCESS,
        payload: data,
      });

      return "success";
    } catch (error: any) {
      dispatch({
        type: JobActionsTypes.GET_SINGLE_JOB_FAIL,
        error: error.response.data.error.msg,
      });
      console.log(error);

      return error.response.data.error.msg;
    }
  };
