import { BadRequestError } from "@hr-management/common";
import { Request, Response, NextFunction } from "express";
import { DepenteniciesData } from "../../entities/interfaces";

export = (dependencies: DepenteniciesData): any => {
  const {
    useCases: { createExpense_UseCase },
  } = dependencies;

  const createExpense = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const { expenseName, price } = req.body;

      const createdExpense = await createExpense_UseCase(dependencies).execute({
        expenseName,
        price,
        companyName: req.currentUser?.id.companyName,
        createdBy: req.currentUser?.id.id,
        createdAt: new Date(),
      });

      if (!createdExpense) {
        throw new BadRequestError("Oops something went wrong please try again");
      }

      res.json({ data: createdExpense });
    } catch (error: any) {
      throw new BadRequestError(error);
    }
  };
  return createExpense;
};
