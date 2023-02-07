import { Payout, PayoutData } from "../../../entities/Payout";
import { schemas } from "../../database/mongo/";

const { PayoutDetails } = schemas;

export = {
  requestPayout: async (asset: PayoutData) => {
    const mongooseObj = PayoutDetails.build(asset);
    await PayoutDetails.populate(mongooseObj, { path: "requestedBy" });
    return await mongooseObj.save();
  },

  getAllPayouts: async (
    companyName: string,
    pageNumber: number,
    requestedAt: Date,
    status: boolean
  ) => {
    const mongooseObj = await PayoutDetails.aggregate([
      {
        $match: {
          $and: [{ companyName }, { requestedAt }, { isPaid: status }],
        },
      },
    ]);
    await PayoutDetails.populate(mongooseObj, { path: "requestedBy" });
    return mongooseObj;
  },

  getSinglePayoutDetails: async (companyName: string, payoutId: string) => {
    const mongooseObj = await PayoutDetails.findOne({
      $and: [{ companyName }, { _id: payoutId }],
    });
    return mongooseObj;
  },

  completePayoutDetails: async (companyName: string, payoutId: string) => {
    const mongooseObj = await PayoutDetails.findOneAndUpdate(
      {
        $and: [{ companyName }, { _id: payoutId }],
      },
      { isPaid: true },
      { new: true, runValidators: true }
    );
    return mongooseObj;
  },

  getMyPayouts: async (companyName: string, requestedBy: string) => {
    const mongooseObj = await PayoutDetails.aggregate([
      { $match: { $and: [{ companyName }, { requestedBy }] } },
    ]);
    return mongooseObj;
  },
};
