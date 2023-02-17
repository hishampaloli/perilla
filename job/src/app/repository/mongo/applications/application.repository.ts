import { ApplicationData } from "../../../../entities/Application";
import { schemas } from "../../../database/mongo";
const { Application } = schemas;

export = {
  createApplication: async (data: ApplicationData) => {
    console.log(data);
    const mongooseObj = Application.build(data);
    return mongooseObj.save();
  },
};
