import { TaskData } from "../../../entities/Task";
import { schemas } from "../../database/mongo";

const { Task } = schemas;

export = {
  createTask: async (data: TaskData) => {
    const mongooseObj = Task.build(data);
    return mongooseObj.save();
  },

  getAllProjectTask: async (project: string, isApproved: boolean) => {
    console.log(project);

    const mongooseObj = await Task.find({
      $and: [{ project }, { isApproved }],
    });
    return mongooseObj;
  },

  getSingleTask: async (taskId: string) => {
    const mongooseObj = await Task.findById(taskId);
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
    const mongooseObj = await Task.findOneAndUpdate(
      {
        $and: [{ _id: taskId }, { assignedTo }],
      },
      { isCompleted: true },
      { new: true, runValidators: true }
    );
  },
};
