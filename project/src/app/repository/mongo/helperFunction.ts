import { schemas } from "../../database/mongo";

const { ClientDetails, Employee, Project, Task } = schemas;

export = {
  getAllProjectsCount: async (
    companyName: string,
    status: string,
    createdBy: string,
    projectName: string,
    pageNumber: number
  ) => {
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
        });
    return mongooseObj.length;
  },
};
