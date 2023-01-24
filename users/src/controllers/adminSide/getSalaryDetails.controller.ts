import { Request, Response, NextFunction } from "express";
import { BadRequestError, NotAuthorizedError } from "@hpshops/common";
import { natsWrapper } from "../../nats-wrapper";
import { DepenteniciesData } from "../../entities/interfaces";

export = (dependencies: DepenteniciesData): any => {
  const {
    useCases: { getSalaryDetails_UseCase },
  } = dependencies;

  const getSalaryDetails = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const { employeeId } = req.params;
      const companyName = req.currentTenant?.id?.companyName;

      const salaryDetails = await getSalaryDetails_UseCase(
        dependencies
      ).execute(companyName, employeeId);

      res.json({ data: salaryDetails });
    } catch (error: any) {
      throw new Error(error);
    }
  };
  return getSalaryDetails;
};
