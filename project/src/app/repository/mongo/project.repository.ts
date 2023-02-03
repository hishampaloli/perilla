import { ProjectData } from "../../../entities/Project";
import { schemas } from "../../database/mongo";

const { Project } = schemas;

export = {
  createProject: async (data: ProjectData) => {
    const mongooseObj = Project.build(data);
    await Project.populate(mongooseObj, { path: "createdBy" });
    return mongooseObj.save();
  },

  getAllProjects: async (
    companyName: string,
    status: string,
    createdBy: string,
    projectName: string
  ) => {
    console.log(projectName);

    const mongooseObj = createdBy
      ? await Project.find({
          $and: [
            { createdBy },
            { status },
            { companyName },
            { projectTitle: { $regex: projectName ? projectName : "" } },
          ],
        })
      : await Project.find({
          $and: [
            { status },
            { companyName },
            { projectTitle: { $regex: projectName ? projectName : "" } },
          ],
        });

    await Project.populate(mongooseObj, { path: "team" });
    await Project.populate(mongooseObj, { path: "createdBy" });

    return mongooseObj.reverse();
  },

  getSingleProject: async (id: string) => {
    const mongooseObj = await Project.findById(id);
    await Project.populate(mongooseObj, { path: "createdBy" });
    await Project.populate(mongooseObj, { path: "team" });
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

    await Project.populate(mongooseObj, { path: "team" });
    await Project.populate(mongooseObj, { path: "createdBy" });

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

    await Project.populate(mongooseObj, { path: "team" });
    await Project.populate(mongooseObj, { path: "createdBy" });
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

  getMyProjects: async (
    companyName: string,
    status: string,
    userId: string
  ) => {
    const mongooseObj = await Project.find({
      $and: [{ companyName }, { team: { $in: [userId] } }, { status }],
    });

    await Project.populate(mongooseObj, { path: "team" });
    await Project.populate(mongooseObj, { path: "createdBy" });
    return mongooseObj;
  },

  getProjectUnderUser: async (companyName: string, userId: string) => {
    const mongooseObj = await Project.find({
      $and: [{ companyName }, { team: { $in: [userId] } }],
    });
    await Project.populate(mongooseObj, { path: "team" });
    await Project.populate(mongooseObj, { path: "createdBy" });
    return mongooseObj;
  },

  getProjectUnderClient: async (companyName: string, clientId: string) => {
    console.log(companyName, clientId);

    const mongooseObj = await Project.find({
      $and: [{ companyName }, { client: clientId }],
    });

    await Project.populate(mongooseObj, { path: "team" });
    await Project.populate(mongooseObj, { path: "createdBy" });
    return mongooseObj;
  },
};
