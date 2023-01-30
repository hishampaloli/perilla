import { LeaveData } from "../../../entities/Leave";
import { schemas } from "../../database/mongo/";

const { LeaveDetails } = schemas;

export = {
  applyLeave: async (user: LeaveData) => {
    const mongooseObj = LeaveDetails.build(user);
    return await mongooseObj.save();
  },

  getMyLeaveReport: async (
    companyName: string,
    employeeId: string,
    isAccepted: boolean
  ) => {
    const mongooseObj = await LeaveDetails.find({
      $and: [{ companyName }, { employeeId }, { isAccepted }],
    });

    return mongooseObj;
  },

  getLeaveApplications: async (companyName: string, isAccepted: boolean) => {
    const mongooseObj = LeaveDetails.aggregate([
      { $match: { $and: [{ companyName }, { isAccepted }] } },
    ]);
    return mongooseObj;
  },

  viewLeaveApplication: async (
    companyName: string,
    leaveId: string,
    employeeId: string,
    isAdmin: string
  ) => {
    const mongooseObj = !isAdmin
      ? LeaveDetails.findOne({
          $and: [{ companyName }, { _id: leaveId }, { employeeId }],
        })
      : LeaveDetails.findOne({
          $and: [{ companyName }, { _id: leaveId }],
        });
    return mongooseObj;
  },

  approveLeave: async (
    companyName: string,
    leaveId: string,
    isAccepted: boolean
  ) => {
    const mongooseObj = LeaveDetails.findOneAndUpdate(
      {
        $and: [{ companyName }, { leaveId }],
      },
      { isAccepted },
      { new: true, runValidators: true }
    );

    return mongooseObj;
  },
};
