import { TaskData } from "../../../entities/Task";
import { schemas } from "../../database/mongo";

const { Task } = schemas;

export = {
  createTask: async (data: TaskData) => {
    const mongooseObj = Task.build(data);
    return mongooseObj.save();
  },

  
};
