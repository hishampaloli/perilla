import { ProjectData } from "../../../entities/Project";
import { schemas } from "../../database/mongo";

const { Project } = schemas;

export = {
  createProject: async (data: ProjectData) => {
    const mongooseObj = Project.build(data);
    return mongooseObj.save();
  },

  getAllProjects: async (
    companyName: string,
    status: string,
    createdBy: string
  ) => {
    const mongooseObj = createdBy
      ? await Project.find({
          $and: [{ createdBy }, { status }, { companyName }],
        })
      : await Project.find({
          $and: [{ status }, { companyName }],
        });

    return mongooseObj;
  },

  getSingleProject: async (id: string) => {
    const mongooseObj = await Project.findById(id);
    await Project.populate(mongooseObj, { path: "createdBy" });
    await Project.populate(mongooseObj, { path: "team"});
    return mongooseObj;
  },

  editProject: async (projectId: string, createdBy: string, data: object) => {
    const mongooseObj = await Project.findOneAndUpdate(
      { $and: [{ _id: projectId }, { createdBy }] },
      data,
      {
        new: true,
        runValidators: true,
      }
    );

    return mongooseObj;
  },

  addTeamToProject: async (
    projectId: string,
    employeeId: string,
    createdBy: string
  ) => {
    const mongooseObj = await Project.findOneAndUpdate(
      { $and: [{ _id: projectId }, { createdBy }] },
      {
        $addToSet: { team: employeeId },
      },
      {
        new: true,
        runValidators: true,
      }
    );
    return mongooseObj;
  },

  removeTeamFromProject: async (
    projectId: string,
    employeeId: string,
    createdBy: string
  ) => {
    const mongooseObj = await Project.findOneAndUpdate(
      { $and: [{ _id: projectId }, { createdBy }] },
      {
        $pull: { team: employeeId },
      },
      {
        new: true,
        runValidators: true,
      }
    );
    return mongooseObj;
  },
};
