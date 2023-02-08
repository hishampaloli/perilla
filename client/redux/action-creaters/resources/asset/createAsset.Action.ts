import { CreateAssetAction } from "../../../action-models";
import { ResourceActionTypes } from "../../../constants";
import { Dispatch } from "react";
import { createAsset_API } from "../../../../api";

export const createAsset =
  (req: any, assetData: object) =>
  async (
    dispatch: Dispatch<CreateAssetAction>,
    getState: any
  ): Promise<string> => {
    try {
      dispatch({ type: ResourceActionTypes.CREATE_ASSET_REQUEST });

      const { data } = await createAsset_API(req, assetData);

      getState().allAssets.data.data.unshift(data.data);
      dispatch({
        type: ResourceActionTypes.GET_ALL_ASSETS_SUCCESS,
        payload: getState().allAssets.data,
      });

      return "success";
    } catch (error: any) {
      dispatch({
        type: ResourceActionTypes.CREATE_ASSET_FAIL,
        error: error.response.data.error.msg,
      });

      return error.response.data.error.msg.message;
    }
  };
