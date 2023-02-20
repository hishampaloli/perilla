import { DeleteAssetAction } from "../../../action-models";
import { ResourceActionTypes } from "../../../constants";
import { Dispatch } from "react";
import { deleteAsset_API } from "../../../../api";
import { AssetsData } from "../../../../models/resources";

export const deleteAssets =
  (req: any, assetId: string) =>
  async (
    dispatch: Dispatch<DeleteAssetAction>,
    getState: any
  ): Promise<string> => {
    try {
      dispatch({ type: ResourceActionTypes.DELETE_ASSET_REQUEST });

      const { data } = await deleteAsset_API("", assetId);

      getState().allAssets.data.data = getState().allAssets.data.data.filter(
        (el: AssetsData) => {
          return el.id !== assetId;
        }
      );
      dispatch({
        type: ResourceActionTypes.GET_ALL_ASSETS_SUCCESS,
        payload: getState().allAssets.data,
      });

      return "success";
    } catch (error: any) {
      dispatch({
        type: ResourceActionTypes.DELETE_ASSET_FAIL,
        error: error?.response?.data?.error?.msg,
      });

      return error?.response?.data?.error?.msg;
    }
  };
