import { TaskData } from "../../../entities/Task";
import { schemas } from "../../database/mongo";
import helperFunction from "./helperFunction";

const { Task } = schemas;

export = {
  createTask: async (data: TaskData) => {
    const mongooseObj = Task.build(data);
    await Task.populate(mongooseObj, { path: "assignedTo" });
    return mongooseObj.save();
  },

  getAllProjectTask: async (project: string, isApproved: boolean) => {
    const mongooseObj = await Task.find({
      $and: [{ project }, { isApproved }],
    });

    await Task.populate(mongooseObj, { path: "assignedTo" });
    return mongooseObj;
  },

  getAllTasks: async (
    companyName: string,
    isApproved: boolean,
    taskName: string,
    pageNumber: number
  ) => {
    const pageSize = 3;
    const page = pageNumber ? pageNumber : 1;

    const mongooseObj = await Task.find({
      $and: [
        { companyName },
        { isApproved },
        {
          taskName: {
            $regex: taskName ? taskName : /^(.+)$/,
            $options: "i",
          },
        },
      ],
    })
      .skip(pageSize * (page - 1))
      .limit(pageSize);

    const count = await Task.find({
      $and: [{ companyName }, { isApproved }],
    }).count();

    await Task.populate(mongooseObj, { path: "assignedBy" });
    await Task.populate(mongooseObj, { path: "assignedTo" });
    return { mongooseObj, page, pages: Math.ceil(count / pageSize) };
  },

  getSingleTask: async (companyName: string, taskId: string) => {
    const mongooseObj = await Task.findOne({
      $and: [{ companyName }, { _id: taskId }],
    });
    await Task.populate(mongooseObj, { path: "assignedBy" });
    await Task.populate(mongooseObj, { path: "assignedTo" });
    return mongooseObj;
  },

  editTask: async (taskId: string, assignedBy: string, data: object) => {
    const mongooseObj = await Task.findOneAndUpdate(
      {
        $and: [{ _id: taskId }, { assignedBy }],
      },
      data,
      {
        new: true,
        runValidators: true,
      }
    );

    await Task.populate(mongooseObj, { path: "assignedTo" });
    await Task.populate(mongooseObj, { path: "assignedBy" });
    return mongooseObj;
  },

  reqTaskApprovel: async (taskId: string, assignedTo: string) => {
    console.log(assignedTo);

    const mongooseObj = await Task.findOneAndUpdate(
      {
        $and: [{ _id: taskId }, { assignedTo }],
      },
      { isCompleted: true },
      { new: true, runValidators: true }
    );

    return mongooseObj;
  },

  getTaskForApproval: async (assignedBy: string) => {
    const mongooseObj = await Task.find({
      $and: [{ assignedBy }, { isCompleted: true }, { isApproved: false }],
    });

    await Task.populate(mongooseObj, { path: "assignedTo" });
    return mongooseObj;
  },

  getMyTasksPosts: async (
    assignedBy: string,
    isApproved: boolean,
    taskName: string,
    pageNumber: number
  ) => {
    console.log(taskName, pageNumber + '00000000000000');
    const pageSize = 3;
    const page = pageNumber ? pageNumber : 1;

    const count = await helperFunction.getMyTasksPosts(
      assignedBy,
      isApproved,
      taskName
    );
    const mongooseObj = await Task.find({
      $and: [
        { assignedBy },
        { isApproved },
        {
          taskName: {
            $regex: taskName ? taskName : /^(.+)$/,
            $options: "i",
          },
        },
      ],
    })
      .skip(pageSize * (page - 1))
      .limit(pageSize);

    await Task.populate(mongooseObj, { path: "assignedTo" });
    return { mongooseObj, page, pages: Math.ceil(count / pageSize) };
  },

  getMyTasks: async (assignedTo: string, isApproved: boolean) => {
    console.log(isApproved);

    const mongooseObj = await Task.find({
      $and: [{ assignedTo }, { isApproved }],
    });

    await Task.populate(mongooseObj, { path: "assignedBy" });
    return mongooseObj;
  },
};
