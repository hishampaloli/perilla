import { BadRequestError } from "@hr-management/common";
import { Request, Response, NextFunction } from "express";
import { DepenteniciesData } from "../../entities/interfaces";

export = (dependencies: DepenteniciesData): any => {
  const {
    useCases: { getAllExpense_UseCase },
  } = dependencies;

  const getAllExpenses = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const { pageNumber } = req.query;
      const companyName =
        req.currentTenant?.id.companyName || req.currentUser?.id.companyName;

      const allExpense = await getAllExpense_UseCase(dependencies).execute(
        companyName,
        pageNumber
      );

      if (!allExpense) {
        throw new BadRequestError("No such expense found");
      }

      res.json({ data: allExpense });
    } catch (error: any) {
      throw new BadRequestError(error);
    }
  };
  return getAllExpenses;
};
