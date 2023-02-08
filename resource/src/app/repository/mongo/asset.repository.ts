import { AssetData } from "../../../entities/Asset";
import { schemas } from "../../database/mongo/";

const { AssetDetails } = schemas;

export = {
  createAsset: async (asset: AssetData) => {
    const mongooseObj = AssetDetails.build(asset);
    await AssetDetails.populate(mongooseObj, { path: "createdBy" });
    return await mongooseObj.save();
  },

  getAllAssets: async (companyName: string, pageNumber: number) => {
    const mongooseObj = await AssetDetails.aggregate([
      { $match: { companyName } },
      { $sort: { createdAt: -1 } },
    ]);
    return mongooseObj;
  },

  getMyAssetPosts: async (companyName: string, createdBy: string) => {
    const mongooseObj = await AssetDetails.aggregate([
      { $match: { $and: [{ companyName }, { createdBy }] } },
    ]);
    return mongooseObj;
  },

  getSingleAsset: async (companyName: string, assetId: string) => {
    const mongooseObj = await AssetDetails.findOne({
      $and: [{ companyName }, { _id: assetId }],
    });
    return mongooseObj;
  },

  editAssets: async (
    companyName: string,
    assetId: string,
    createdBy: string,
    data: object
  ) => {
    const mongooseObj = await AssetDetails.findOneAndUpdate(
      {
        $and: [{ companyName }, { _id: assetId }, { createdBy }],
      },
      data,
      { new: true, runValidators: true }
    );

    return mongooseObj;
  },

  deleteAsset: async (
    companyName: string,
    assetId: string,
    createdBy: string
  ) => {
    const mongooseObj = await AssetDetails.findOneAndDelete({
      $and: [{ companyName }, { _id: assetId }, { createdBy }],
    });
    return mongooseObj;
  },
};
