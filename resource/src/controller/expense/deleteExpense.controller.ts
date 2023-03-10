import { BadRequestError } from "@hr-management/common";
import { Request, Response, NextFunction } from "express";
import { DepenteniciesData } from "../../entities/interfaces";

export = (dependencies: DepenteniciesData): any => {
  const {
    useCases: { deleteExpense_UseCase },
  } = dependencies;

  const deleteExpense = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const { companyName, id } = req.currentUser?.id!;

      const deleteExpense = await deleteExpense_UseCase(dependencies).execute(
        companyName,
        req.params.expenseId,
        id
      );

      if (!deleteExpense) {
        throw new BadRequestError("No such expense found");
      }

      res.json({ data: deleteExpense });
    } catch (error: any) {
      throw new BadRequestError(error);
    }
  };
  return deleteExpense;
};