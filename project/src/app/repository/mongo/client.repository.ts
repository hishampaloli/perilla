import { ClientData } from "../../../entities/Client";
import { schemas } from "../../database/mongo";

const { ClientDetails } = schemas;

export = {
  createClient: async (data: ClientData) => {
    const mongooseObj = ClientDetails.build(data);
    return mongooseObj.save();
  },

  getClient: async (companyName: string, clientId: string) => {
    const mongooseObj = ClientDetails.findOne({
      $and: [{ companyName }, { _id: clientId }],
    });
    return mongooseObj;
  },

  editClient: async (companyName: string, clientId: string, data: any) => {
    const check = await ClientDetails.findById(clientId);
    console.log(check);
    
    if (!check) return false;

    const mongooseObj = ClientDetails.findOneAndUpdate(
      { $and: [{ companyName }, { _id: clientId }] },
      data,
      {
        new: true,
        runValidators: true,
        useFindAndModify: false,
      }
    );
    return mongooseObj;
  },

  getAllCLients: async (companyName: string) => {
    const mongooseObj = ClientDetails.aggregate([
      { $match: { $and: [{ companyName }] } },
    ]);
    return mongooseObj;
  },
};
