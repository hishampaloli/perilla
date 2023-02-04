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

  getMyProjectsCount: async (
    companyName: string,
    status: string,
    userId: string,
    projectName: string
  ) => {
    const mongooseObj = await Project.find({
      $and: [
        { companyName },
        { team: { $in: [userId] } },
        { status },
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
