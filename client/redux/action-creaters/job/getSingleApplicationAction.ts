import { SingleApplicationAction } from "../../action-models";
import { Dispatch } from "react";
import { singleApplication_API } from "../../../api";
import { JobActionsTypes } from "../../constants/jobTypes";

export const getSingleApplication =
  (req: any, appliData: any) =>
  async (dispatch: Dispatch<SingleApplicationAction>) => {
    try {
      dispatch({
        type: JobActionsTypes.GET_SINGLE_APPLICATION_REQUEST,
      });

      const { data } = await singleApplication_API(req, appliData);

      dispatch({
        type: JobActionsTypes.GET_SINGLE_APPLICATION_SUCCESS,
        payload: data,
      });

      return "success";
    } catch (error: any) {
      dispatch({
        type: JobActionsTypes.GET_SINGLE_APPLICATION_FAIL,
        error: error?.response?.data?.error?.msg,
      });

      return error?.response?.data?.error?.msg;
    }
  };
