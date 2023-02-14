import { LeaveData } from "../../../../entities/Leave";
import { prisma } from "./index";

export = {
  applyLeave: async (leave: LeaveData) => {
    const postgresObj = await prisma.leave.create({
      data: {
        companyName: "hp",
        leaveDuration: Number(leave.leaveDuration),
        reason: leave.reason,
        statingDate: new Date(),
        appliedBy: { connect: { id: leave.employeeId } },
      },
      include: {
        appliedBy: true,
      },
    });
    return postgresObj;
  },

  getMyLeaveReport: async (
    companyName: string,
    employeeId: string,
    isAccepted: boolean
  ) => {
    const postgresObj = await prisma.leave.findMany({
      where: {
        AND: [
          { companyName: "hp" },
          { employeeId },
          {
            isApproved:
              isAccepted === true
                ? "peniding"
                : isAccepted === false
                ? "accepted"
                : "rejected",
          },
        ],
      },
      orderBy: {
        statingDate: "asc",
      },
      include: { appliedBy: true },
    });

    return postgresObj;
  },

  getLeaveApplications: async (companyName: string, isAccepted: string) => {
    console.log(companyName, isAccepted);

    const postgresObj = await prisma.leave.findMany({
      where: {
        AND: [
          { companyName },
          {
            isApproved:
              isAccepted === "pending"
                ? "peniding"
                : isAccepted === "accepted"
                ? "accepted"
                : "rejected",
          },
        ],
      },

      include: { appliedBy: true },
    });
    return postgresObj;
  },

  viewLeaveApplication: async (
    companyName: string,
    leaveId: string,
    employeeId: string,
    isAdmin: string
  ) => {
    console.log(companyName, leaveId, employeeId, isAdmin);

    const postgresObj = !isAdmin
      ? await prisma.leave.findFirst({
          where: { AND: [{ companyName }, { id: leaveId }, { employeeId }] },
          include: { appliedBy: true },
        })
      : await prisma.leave.findFirst({
          where: { AND: [{ companyName }, { id: leaveId }] },
          include: { appliedBy: true },
        });

    return postgresObj;
  },

  approveLeave: async (
    companyName: string,
    leaveId: string,
    isAccepted: string
  ) => {
    console.log(isAccepted + "ssssssssssssssssss");

    const postgresObj: any = await prisma.leave.updateMany({
      where: { AND: [{ companyName }, { id: leaveId }] },
      data: {
        isApproved: isAccepted === "true" ? "accepted" : "rejected",
      },
    });

    if (isAccepted) {
      const emp = await prisma.employee.update({
        where: { id: postgresObj.id },
        data: { leavesTaken: { increment: 1 } },
      });

      return postgresObj;
    }
  },
};
