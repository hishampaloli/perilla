import { EditAssetAction } from "../../../action-models";
import { ResourceActionTypes } from "../../../constants";
import { Dispatch } from "react";
import { editAsset_API } from "../../../../api";
import { AssetsData } from "../../../../models/resources";

export const editAssets =
  (req: any, assetId: string, assetData: object) =>
  async (
    dispatch: Dispatch<EditAssetAction>,
    getState: any
  ): Promise<string> => {
    try {
      dispatch({ type: ResourceActionTypes.EDIT_ASSET_REQUEST });

      const { data } = await editAsset_API("", assetId, assetData);

      getState().allAssets.data.data = getState().allAssets.data.data.filter(
        (el: AssetsData) => {
          return el.id !== assetId;
        }
      );
      getState().allAssets.data.data.unshift(data.data);
      dispatch({
        type: ResourceActionTypes.GET_ALL_ASSETS_SUCCESS,
        payload: getState().allAssets.data,
      });

      return "success";
    } catch (error: any) {
      dispatch({
        type: ResourceActionTypes.EDIT_ASSET_FAIL,
        error: error?.response?.data?.error?.msg,
      });

      return error?.response?.data?.error?.msg;
    }
  };
