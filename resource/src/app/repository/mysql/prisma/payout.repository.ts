import { prisma } from "./index";

import { Payout, PayoutData } from "../../../../entities/Payout";

export = {
  requestPayout: async (payout: PayoutData) => {
    const postgresObj = await prisma.payout.create({
      data: {
        companyName: payout.companyName,
        salary: Number(payout.salary),
        requestedBy: { connect: { id: payout.requestedBy } },
      },
      include: { requestedBy: true },
    });

    return postgresObj;
  },

  getAllPayouts: async (companyName: string, status: boolean) => {
    const postgresObj = await prisma.payout.findMany({
      where: {
        AND: [{ companyName }, { isPaid: status }],
      },
      orderBy: { requestedAt: "asc" },
      include: { requestedBy: true },
    });
    return postgresObj;
  },

  getSinglePayoutDetails: async (companyName: string, payoutId: string) => {
    const postgresObj = await prisma.payout.findFirst({
      where: { AND: [{ companyName }, { id: payoutId }] },
      include: { requestedBy: true },
    });
    return postgresObj;
  },

  completePayouts: async (companyName: string, payoutId: string) => {
    const payout = await prisma.payout.updateMany({
      where: { AND: [{ companyName }, { id: payoutId }] },
      data: { isPaid: true },
    });

    const postgresObj = await prisma.payout.findFirst({
      where: { AND: [{ companyName }, { id: payoutId }] },
      include: { requestedBy: true },
    });

    return postgresObj;
  },

  getMyPayouts: async (companyName: string, requestedBy: string) => {
    const postgresObj = await prisma.payout.findMany({
      where: { AND: [{ companyName }, { employeeId: requestedBy }] },
      orderBy: { requestedAt: "asc" },
      include: { requestedBy: true },
    });
    return postgresObj;
  },
};
