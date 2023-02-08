import { BadRequestError } from "@hr-management/common";
import { Request, Response, NextFunction } from "express";
import { DepenteniciesData } from "../../entities/interfaces";

export = (dependencies: DepenteniciesData): any => {
  const {
    useCases: { getSinglePayout_usecase },
  } = dependencies;

  const getSinglePayout = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const payoutData = await getSinglePayout_usecase(dependencies).execute(
        req.currentTenant?.id.companyName,
        req.params.payoutId
      );

      if (!payoutData) throw new BadRequestError("no such payout found");
      res.json({ data: payoutData });
    } catch (error: any) {
      throw new Error(error);
    }
  };
  return getSinglePayout;
};
