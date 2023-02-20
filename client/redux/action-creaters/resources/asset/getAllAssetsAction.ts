import { GetAllAssetsAction } from "../../../action-models";
import { ResourceActionTypes } from "../../../constants";
import { Dispatch } from "react";
import {
  getAllAssets__API,
  getMyAssetPosts_API,
} from "../../../../api";

export const getAllAssets =
  (req: any, type: string) =>
  async (dispatch: Dispatch<GetAllAssetsAction>): Promise<string> => {
    try {
      dispatch({ type: ResourceActionTypes.GET_ALL_ASSETS_REQUEST });

      const { data } =
        type === "admin"
          ? await getAllAssets__API(req)
          : await getMyAssetPosts_API(req);

      dispatch({
        type: ResourceActionTypes.GET_ALL_ASSETS_SUCCESS,
        payload: data,
      });

      return "success";
    } catch (error: any) {
      dispatch({
        type: ResourceActionTypes.GET_ALL_ASSETS_FAIL,
        error: error?.response?.data?.error?.msg,
      });

      return error?.response?.data?.error?.msg;
    }
  };
