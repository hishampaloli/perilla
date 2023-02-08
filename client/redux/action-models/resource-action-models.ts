import { ErrorState } from "../../models/admin";
import { AssetsDataArr, AssetsDataObj } from "../../models/resources";
import { ResourceActionTypes } from "../constants";

interface GetAllAssetsRequestAction {
  type: ResourceActionTypes.GET_ALL_ASSETS_REQUEST;
}

interface GetAllAssetsSuccessAction {
  type: ResourceActionTypes.GET_ALL_ASSETS_SUCCESS;
  payload: AssetsDataArr;
}
interface GetAllAssetsFailAction {
  type: ResourceActionTypes.GET_ALL_ASSETS_FAIL;
  error: ErrorState[];
}

export type GetAllAssetsAction =
  | GetAllAssetsRequestAction
  | GetAllAssetsFailAction
  | GetAllAssetsSuccessAction;

interface GetSingleAssetRequestAction {
  type: ResourceActionTypes.GET_SINGLE_ASSET_REQUEST;
}

interface GetSingleAssetSuccessAction {
  type: ResourceActionTypes.GET_SINGLE_ASSET_SUCCESS;
  payload: AssetsDataObj;
}
interface GetSingleAssetFailAction {
  type: ResourceActionTypes.GET_SINGLE_ASSET_FAIL;
  error: ErrorState[];
}

export type GetSingleAssetAction =
  | GetSingleAssetRequestAction
  | GetSingleAssetFailAction
  | GetSingleAssetSuccessAction;

interface CreateAssetRequestAction {
  type: ResourceActionTypes.CREATE_ASSET_REQUEST;
}

interface CreateAssetFailAction {
  type: ResourceActionTypes.CREATE_ASSET_FAIL;
  error: ErrorState[];
}

export type CreateAssetAction =
  | CreateAssetRequestAction
  | GetAllAssetsSuccessAction
  | CreateAssetFailAction;

interface EditAssetRequestAction {
  type: ResourceActionTypes.EDIT_ASSET_REQUEST;
}

interface EditAssetFailAction {
  type: ResourceActionTypes.EDIT_ASSET_FAIL;
  error: ErrorState[];
}

export type EditAssetAction =
  | EditAssetRequestAction
  | GetSingleAssetSuccessAction
  | EditAssetFailAction;

interface DeleteAssetRequestAction {
  type: ResourceActionTypes.DELETE_ASSET_REQUEST;
}

interface DeleteAssetSuccessAction {
  type: ResourceActionTypes.DELETE_ASSET_SUCCESS;
}

interface DeleteAssetFailAction {
  type: ResourceActionTypes.DELETE_ASSET_FAIL;
  error: ErrorState[];
}

export type DeleteAssetAction =
  | DeleteAssetRequestAction
  | DeleteAssetSuccessAction
  | DeleteAssetFailAction;
