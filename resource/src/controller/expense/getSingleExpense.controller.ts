import { BadRequestError } from "@hr-management/common";
import { Request, Response, NextFunction } from "express";
import { DepenteniciesData } from "../../entities/interfaces";

export = (dependencies: DepenteniciesData): any => {
  const {
    useCases: { getSingleExpense_UseCase },
  } = dependencies;

  const getSingleExpense = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const { expenseId } = req.params;
      const companyName =
        req.currentTenant?.id.companyName || req.currentUser?.id.companyName;

      const assetsData = await getSingleExpense_UseCase(dependencies).execute(
        companyName,
        expenseId
      );

      if (!assetsData) {
        throw new BadRequestError("No such expense found");
      }

      res.json({ data: assetsData });
    } catch (error: any) {
      throw new BadRequestError(error);
    }
  };
  return getSingleExpense;
};
