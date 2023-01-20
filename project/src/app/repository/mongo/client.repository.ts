import { ClientData } from "../../../entities/Client";
import { schemas } from "../../database/mongo";

const { ClientDetails } = schemas;

export = {
  createClient: async (data: ClientData) => {
    const mongooseObj = ClientDetails.build(data);
  },

  
getClient: async(companyName: string, clientId: string) => {

}
};

