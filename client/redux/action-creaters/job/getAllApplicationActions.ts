import { GetAllApplicationsAction } from "../../action-models";
import { Dispatch } from "react";
import { allApplication__API } from "../../../api";
import { JobActionsTypes } from "../../constants/jobTypes";

export const getAllApplication =
  (req: any, appliData: any) =>
  async (dispatch: Dispatch<GetAllApplicationsAction>) => {
    try {
      dispatch({
        type: JobActionsTypes.ALL_APPLICATION_REQUEST,
      });

      const { data } = await allApplication__API(req, appliData);

      console.log(data);

      dispatch({
        type: JobActionsTypes.ALL_APPLICATION_SUCCESS,
        payload: data,
      });

      return "success";
    } catch (error: any) {
      dispatch({
        type: JobActionsTypes.ALL_APPLICATION_FAIL,
        error: error?.response?.data?.error?.msg,
      });
      console.log(error);

      return error?.response?.data?.error?.msg;
    }
  };
