import { BadRequestError } from "@hr-management/common";
import { Request, Response, NextFunction } from "express";
import { DepenteniciesData } from "../../entities/interfaces";

export = (dependencies: DepenteniciesData): any => {
  const {
    useCases: { getAllPayout_usecase },
  } = dependencies;

  const getAllPayouts = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const { requestedAt, status } = req.body;

      const allPayouts = await getAllPayout_usecase(dependencies).execute(
        req.currentTenant?.id.companyName,
        2,
        requestedAt,
        status
      );

      if(!allPayouts)
      throw new BadRequestError('No payouts found')

      res.json({ data: allPayouts });
    } catch (error: any) {
      throw new Error(error);
    }
  };
  return getAllPayouts;
};
