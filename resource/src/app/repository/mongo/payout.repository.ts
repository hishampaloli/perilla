import { Payout, PayoutData } from "../../../entities/Payout";
import { schemas } from "../../database/mongo/";

const { PayoutDetails } = schemas;

export = {
  requestPayout: async (payout: PayoutData) => {
    const mongooseObj = PayoutDetails.build(payout);
    await PayoutDetails.populate(mongooseObj, { path: "requestedBy" });
    return await mongooseObj.save();
  },

  getAllPayouts: async (
    companyName: string,
    status: boolean
  ) => {
    const mongooseObj = await PayoutDetails.aggregate([
      {
        $match: {
          $or: [{ companyName }, { isPaid: status }],
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

  completePayouts: async (companyName: string, payoutId: string) => {
    console.log(companyName,payoutId);
    const mongooseObj = await PayoutDetails.findOneAndUpdate(
      {
        $and: [{ companyName }, { _id: payoutId }],
      },
      { isPaid: true },
      { new: true, runValidators: true }
    );
    console.log(mongooseObj);
    await PayoutDetails.populate(mongooseObj, { path: "requestedBy" });

    return mongooseObj;
  },

  getMyPayouts: async (companyName: string, requestedBy: string) => {
    const mongooseObj = await PayoutDetails.find({
      $and: [{ companyName }, { requestedBy }],
    });
    await PayoutDetails.populate(mongooseObj, { path: "requestedBy" });
    return mongooseObj.reverse();
  },
};
