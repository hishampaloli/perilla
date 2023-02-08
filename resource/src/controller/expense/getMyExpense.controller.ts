import { BadRequestError } from "@hr-management/common";
import { Request, Response, NextFunction } from "express";
import { DepenteniciesData } from "../../entities/interfaces";

export = (dependencies: DepenteniciesData): any => {
  const {
    useCases: { getMyExpensePosts_UseCase },
  } = dependencies;

  const getMyExpenses = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const { companyName, id } = req.currentUser?.id!;

      const allExpense = await getMyExpensePosts_UseCase(dependencies).execute(
        companyName,
        id
      );

      if (!allExpense) {
        throw new BadRequestError("No expense found");
      }

      res.json({ data: allExpense });
    } catch (error: any) {
      throw new BadRequestError(error);
    }
  };
  return getMyExpenses;
};
