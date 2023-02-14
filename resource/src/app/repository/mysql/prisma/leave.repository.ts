import { LeaveData } from "../../../../entities/Leave";
import { prisma } from "./index";

export = {
  applyLeave: async (user: LeaveData) => {
    // const postgresObj = 
  },

  getMyLeaveReport: async (
    companyName: string,
    employeeId: string,
    isAccepted: boolean
  ) => {
    console.log(isAccepted);

    const mongooseObj = await LeaveDetails.find({
      $and: [{ companyName }, { employeeId }, { isAccepted }],
    });
    await LeaveDetails.populate(mongooseObj, { path: "employeeId" });

    return mongooseObj.reverse();
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
      ? await LeaveDetails.findOne({
          $and: [{ companyName }, { _id: leaveId }, { employeeId }],
        })
      : await LeaveDetails.findOne({
          $and: [{ companyName }, { _id: leaveId }],
        });

    await LeaveDetails.populate(mongooseObj, { path: "employeeId" });
    return mongooseObj;
  },

  approveLeave: async (
    companyName: string,
    leaveId: string,
    isAccepted: string
  ) => {
    console.log(isAccepted + "ssssssssssssssssss");

    const mongooseObj = await LeaveDetails.findOneAndUpdate(
      {
        $and: [{ companyName }, { _id: leaveId }],
      },
      { isAccepted: isAccepted == "true" ? "accepted" : "rejected" },
      { new: true, runValidators: true }
    );

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
