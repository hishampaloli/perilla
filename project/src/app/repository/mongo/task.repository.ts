import { TaskData } from "../../../entities/Task";
import { schemas } from "../../database/mongo";

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
    console.log(assignedBy);

    const mongooseObj = await Task.find({
      $and: [{ assignedBy }, { isCompleted: true }, { isApproved: false }],
    });

    return mongooseObj;
  },

  getMyTasksPosts: async (assignedBy: string, isApproved: boolean) => {
    console.log(isApproved);
    const mongooseObj = await Task.find({
      $and: [{ assignedBy }, { isApproved }],
    });

    await Task.populate(mongooseObj, { path: "assignedTo" });
    return mongooseObj;
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
