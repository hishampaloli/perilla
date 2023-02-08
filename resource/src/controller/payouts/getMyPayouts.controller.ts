import { BadRequestError } from "@hr-management/common";
import { Request, Response, NextFunction } from "express";
import { DepenteniciesData } from "../../entities/interfaces";

export = (dependencies: DepenteniciesData): any => {
  const {
    useCases: { getMyPayouts_usecase },
  } = dependencies;

  const getMyPayout = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const { companyName, id } = req.currentUser?.id!;
      const payoutData = await getMyPayouts_usecase(dependencies).execute(
        companyName,
        id
      );

      if (!payoutData) throw new BadRequestError("no such payout found");
      res.json({ data: payoutData });
    } catch (error: any) {
      throw new Error(error);
    }
  };
  return getMyPayout;
};
