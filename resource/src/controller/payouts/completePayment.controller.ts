import { BadRequestError } from "@hr-management/common";
import { Request, Response, NextFunction } from "express";
import { DepenteniciesData } from "../../entities/interfaces";

export = (dependencies: DepenteniciesData): any => {
  const {
    useCases: { completePayouts_usecase },
  } = dependencies;

  const completePayout = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const payoutData = await completePayouts_usecase(dependencies).execute(
        req.currentTenant?.id.companyName,
        req.params.payoutId
      );
      
      if (!payoutData) throw new BadRequestError("no such payout found");

      res.json({ data: payoutData });
    } catch (error: any) {
      throw new Error(error);
    }
  };
  return completePayout;
};
