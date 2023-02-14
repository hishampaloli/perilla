import { ExpenseData } from "../../../../entities/Expense";
import { prisma } from "./index";

export = {
  createExpense: async (expense: ExpenseData) => {
    const postgresObj = await prisma.expense.create({
      data: {
        expenseName: expense.expenseName,
        companyName: expense.companyName,
        price: expense.price,
        createdBy: { connect: { id: expense.createdBy } },
      },
    });

    return postgresObj;
  },

  getAllExpenses: async (companyName: string, pageNumber: number) => {
    const postgresObj = await prisma.expense.findMany({
      where: { companyName },
      orderBy: {
        createdAt: "desc",
      },
      include: { createdBy: true },
    });

    return postgresObj;
  },

  getMyExpenses: async (companyName: string, createdBy: string) => {
    const postgresObj = await prisma.expense.findMany({
      where: {
        AND: [{ companyName }, { employeeId: createdBy }],
      },

      include: { createdBy: true },
    });
    return postgresObj;
  },

  getSingleExpense: async (companyName: string, expenseId: string) => {
    const postgresObj = await prisma.expense.findFirst({
      where: {
        AND: [{ companyName }, { id: expenseId }],
      },
      include: { createdBy: true },
    });

    return postgresObj;
  },

  editExpense: async (
    companyName: string,
    expenseId: string,
    createdBy: string,
    data: any
  ) => {
    const postgresObj = await prisma.expense.updateMany({
      where: {
        AND: [{ companyName }, { id: expenseId }, { employeeId: createdBy }],
      },
      data: {
        price: data.price,
        expenseName: data.expenseName,
      },
    });

    const updatedItem = await prisma.expense.findFirst({
      where: {
        AND: [{ companyName }, { id: expenseId }, { employeeId: createdBy }],
      },
    });
    return updatedItem;
  },

  deleteExpense: async (
    companyName: string,
    expenseId: string,
    createdBy: string
  ) => {
    const postgresObj = await prisma.expense.deleteMany({
      where: {
        AND: [
          { companyName },
          { id: expenseId },
          { employeeId: { equals: createdBy } },
        ],
      },
    });
    return postgresObj;
  },
};
