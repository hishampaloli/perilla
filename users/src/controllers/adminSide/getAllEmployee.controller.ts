import { Request, Response, NextFunction } from "express";
import { BadRequestError, NotAuthorizedError } from "@hpshops/common";
import { natsWrapper } from "../../nats-wrapper";
import { DepenteniciesData } from "../../entities/interfaces";

export = (dependencies: DepenteniciesData): any => {
  const {
    useCases: { getAllEmployees_UseCase },
  } = dependencies;

  const getAllEmployees = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const { role, name, employeeId, pageNumber } = req.query;
      const companyName =
        req.currentTenant?.id?.companyName || req.currentUser?.id?.companyName;

      const allEmployees = await getAllEmployees_UseCase(dependencies).execute(
        companyName,
        role,
        name,
        employeeId,
        pageNumber
      );

      res.json({
        data: allEmployees.mongooseObj,
        page: allEmployees.page,
        pages: allEmployees.pages,
      });
    } catch (error: any) {
      throw new Error(error);
    }
  };
  return getAllEmployees;
};
