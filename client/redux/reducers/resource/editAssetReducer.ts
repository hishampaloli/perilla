import { EditAssetState } from "../../../models/resources";
import { EditAssetAction } from "../../action-models";
import { ResourceActionTypes } from "../../constants";

export const editAssetReducer = (
  state: EditAssetState = { loading: false, error: null },
  action: EditAssetAction
): EditAssetState => {
  switch (action.type) {
    case ResourceActionTypes.EDIT_ASSET_REQUEST:
      return {
        loading: true,
        error: null,
      };

    case ResourceActionTypes.GET_ALL_ASSETS_SUCCESS:
      return {
        loading: false,
        error: null,
      };

    case ResourceActionTypes.EDIT_ASSET_FAIL:
      return {
        loading: false,
        error: action.error,
      };

    default:
      return state;
  }
};
