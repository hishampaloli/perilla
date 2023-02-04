import { ProjectData } from "../../../entities/Project";
import { schemas } from "../../database/mongo";
import helperFunction from "./helperFunction";

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
    projectName: string,
    pageNumber: number
  ) => {
    console.log(pageNumber);
    console.log(projectName);
    
    const count = await helperFunction.getAllProjectsCount(
      companyName,
      status,
      createdBy,
      projectName,
      pageNumber
    );
    const pageSize = 1;
    const page = pageNumber ? pageNumber : 1;

    const mongooseObj = createdBy
      ? await Project.find({
          $and: [
            { createdBy },
            { status },
            { companyName },
            {
              projectName: {
                $regex: projectName ? projectName : /^(.+)$/,
                $options: "i",
              },
            },
          ],
        })
          .skip(pageSize * (page - 1))
          .limit(pageSize)
      : await Project.find({
          $and: [
            { status },
            { companyName },
            {
              projectName: {
                $regex: projectName ? projectName : /^(.+)$/,
                $options: "i",
              },
            },
          ],
        })
          .skip(pageSize * (page - 1))
          .limit(pageSize);

    await Project.populate(mongooseObj, { path: "team" });
    await Project.populate(mongooseObj, { path: "createdBy" });

    return {
      mongooseObj: mongooseObj.reverse(),
      page,
      pages: Math.ceil(count / pageSize),
    };
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
