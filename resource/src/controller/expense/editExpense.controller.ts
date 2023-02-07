import { BadRequestError } from "@hr-management/common";
import { Request, Response, NextFunction } from "express";
import { DepenteniciesData } from "../../entities/interfaces";

export = (dependencies: DepenteniciesData): any => {
  const {
    useCases: { editExpense_UseCase },
  } = dependencies;

  const editExpense = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const { companyName, id } = req.currentUser?.id!;
      const { price, expenseName } = req.body;
      const editedAssets = await editExpense_UseCase(dependencies).execute(
        companyName,
        req.params.expenseId,
        id,
        { price, expenseName }
      );

      if (!editedAssets) {
        throw new BadRequestError("No such expence found");
      }

      res.json({ data: editedAssets });
    } catch (error: any) {
      throw new BadRequestError(error);
    }
  };
  return editExpense;
};
