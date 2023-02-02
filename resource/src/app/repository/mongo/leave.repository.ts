import { LeaveData } from "../../../entities/Leave";
import { schemas } from "../../database/mongo/";

const { LeaveDetails, Employee } = schemas;

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

    await LeaveDetails.populate(mongooseObj, { path: "employeeId" });
    return mongooseObj;
  },

  getLeaveApplications: async (companyName: string, isAccepted: string) => {
    console.log(companyName, isAccepted);

    const mongooseObj = await LeaveDetails.find({
      $and: [{ companyName }, { isAccepted }],
    });

    await LeaveDetails.populate(mongooseObj, { path: "employeeId" });
    return mongooseObj;
  },

  viewLeaveApplication: async (
    companyName: string,
    leaveId: string,
    employeeId: string,
    isAdmin: string
  ) => {
    console.log(companyName, leaveId, employeeId, isAdmin);

    const mongooseObj = !isAdmin
      ? LeaveDetails.findOne({
          $and: [{ companyName }, { _id: leaveId }, { employeeId }],
        })
      : LeaveDetails.findOne({
          $and: [{ companyName }, { _id: leaveId }],
        });

    await LeaveDetails.populate(mongooseObj, { path: "employeeId" });
    return mongooseObj;
  },

  approveLeave: async (
    companyName: string,
    leaveId: string,
    isAccepted: boolean
  ) => {
    const mongooseObj = await LeaveDetails.findOneAndUpdate(
      {
        $and: [{ companyName }, { leaveId }],
      },
      { isAccepted: isAccepted === true ? "accepted" : "rejected" },
      { new: true, runValidators: true }
    );

    console.log(mongooseObj);
    console.log(isAccepted);

    if (isAccepted) {
      const em = await Employee.findByIdAndUpdate(
        mongooseObj?.employeeId,
        {
          $inc: { leavesTaken: 1 },
        },
        { new: true, runValidators: true }
      );
    }

    return mongooseObj;
  },
};
