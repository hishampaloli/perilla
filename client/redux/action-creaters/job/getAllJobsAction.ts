import { GetAllJobAction } from "../../action-models";
import { Dispatch } from "react";
import { allJob__API } from "../../../api";
import { JobActionsTypes } from "../../constants/jobTypes";

export const getAllJobs =
  (req: any, companyName: any, status: string) =>
  async (dispatch: Dispatch<GetAllJobAction>) => {
    
    try {
      dispatch({
        type: JobActionsTypes.GET_ALL_JOBS_REQUEST,
      });

      const { data } = await allJob__API(req, companyName, status);

      console.log(data );
      console.log('*************************************88');
            

      dispatch({
        type: JobActionsTypes.GET_ALL_JOBS_SUCCESS,
        payload: data,
      });

      return "success";
    } catch (error: any) {
      dispatch({
        type: JobActionsTypes.GET_ALL_JOBS_FAIL,
        error: error.response.data.error.msg,
      });
      console.log(error);

      return error.response.data.error.msg;
    }
  };
