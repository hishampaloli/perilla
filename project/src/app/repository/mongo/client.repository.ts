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

  getAllCLients: async (
    companyName: string,
    name: string = "",
    clientId: string = "",
    pageNumber: number
  ) => {
    const pageSize = 3;
    const page = pageNumber ? pageNumber : 1;
 console.log(page)
    const mongooseObj = await ClientDetails.aggregate([
      {
        $match: {
          $and: [
            { companyName },
            {
              clientId: {
                $regex: clientId,
                $options: "i",
              },
            },
            {
              clientName: {
                $regex: name,
                $options: "i",
              },
            },
          ],
        },
      },
    ])
      .skip(pageSize * (page - 1))
      .limit(pageSize);

    const count = await clientCount(companyName, name, clientId);

    return { mongooseObj, page, pages: Math.ceil(count / pageSize) };
  },
};

async function clientCount(
  companyName: string,
  name: string,
  clientId: string
) {
  const mongooseObj = await ClientDetails.aggregate([
    {
      $match: {
        $and: [
          { companyName },
          {
            clientId: {
              $regex: clientId,
              $options: "i",
            },
          },
          {
            clientName: {
              $regex: name,
              $options: "i",
            },
          },
        ],
      },
    },
  ]);
  return mongooseObj.length;
}
