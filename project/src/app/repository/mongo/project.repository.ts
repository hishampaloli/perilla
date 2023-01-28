import { ProjectData } from "../../../entities/Project";
import { schemas } from "../../database/mongo";

const { Project } = schemas;

export = {
  createProject: async (data: ProjectData) => {
    const mongooseObj = Project.build(data);
    return mongooseObj.save();
  },
};
