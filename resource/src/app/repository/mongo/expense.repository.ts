import { ExpenseData } from "../../../entities/Expense";
import { schemas } from "../../database/mongo/";

const { ExpenseDetails } = schemas;

export = {
  createExpense: async (expense: ExpenseData) => {
    const mongooseObj = ExpenseDetails.build(expense);
    await ExpenseDetails.populate(mongooseObj, { path: "createdBy" });
    return await mongooseObj.save();
  },

  getAllExpenses: async (companyName: string, pageNumber: number) => {
    const mongooseObj = await ExpenseDetails.aggregate([
      { $match: { companyName } },
      { $sort: { createdAt: -1 } },
    ]);
    return mongooseObj;
  },

  getSingleExpense: async (companyName: string, expenseId: string) => {
    const mongooseObj = await ExpenseDetails.findOne({
      $and: [{ companyName }, { _id: expenseId }],
    });
    return mongooseObj;
  },

  editExpense: async (
    companyName: string,
    expenseId: string,
    createdBy: string,
    data: object
  ) => {
    const mongooseObj = await ExpenseDetails.findOneAndUpdate(
      {
        $and: [{ companyName }, { _id: expenseId }, { createdBy }],
      },
      data,
      { new: true, runValidators: true }
    );

    return mongooseObj;
  },

  deleteExpense: async (
    companyName: string,
    expenseId: string,
    createdBy: string
  ) => {
    const mongooseObj = await ExpenseDetails.findOneAndDelete({
      $and: [{ companyName }, { _id: expenseId }, { createdBy }],
    });
    return mongooseObj;
  },
};
