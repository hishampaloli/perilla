import { resourceService_Url } from "./baseURLs";
import buildClient from "./buildClient";
import { config } from "../redux/constants/config";
import { AssetsDataArr, AssetsDataObj } from "../models/resources";

const asset = "asset";

export const getAllAssets__API = (req: any) =>
  buildClient(req).get<AssetsDataArr>(
    `${resourceService_Url}/${asset}/allAssets`,
    config
  );

export const getMyAssetPosts_API = (req: any) =>
  buildClient(req).get<AssetsDataArr>(
    `${resourceService_Url}/${asset}/MyAssets`,
    config
  );

export const createAsset_API = (req: any, assetData: any) =>
  buildClient(req).post<AssetsDataObj>(
    `${resourceService_Url}/${asset}/createAsset`,
    assetData,
    config
  );

export const deleteAsset_API = (req: any, assetId: any) =>
  buildClient(req).delete<AssetsDataObj>(
    `${resourceService_Url}/${asset}/${assetId}`,
    config
  );

export const editAsset_API = (req: any, assetId: any, assetData: object) =>
  buildClient(req).put<AssetsDataObj>(
    `${resourceService_Url}/${asset}/${assetId}`,
    assetData,
    config
  );
