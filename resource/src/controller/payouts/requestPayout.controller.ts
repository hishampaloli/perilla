import { BadRequestError } from "@hr-management/common";
import { Request, Response, NextFunction } from "express";
import { DepenteniciesData } from "../../entities/interfaces";

export = (dependencies: DepenteniciesData): any => {
  const {
    useCases: {
      requestPayout_usecase,
      getSingleEmployees_UseCase,
      editEmployees_UseCase,
    },
  } = dependencies;

  const requestPayout = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const { reason, leaveDuration, startingDate } = req.body;

      const date = new Date();
      date.setDate(date.getDate() + 30);

      const { companyName, id } = req.currentUser?.id!;
      const employee = await getSingleEmployees_UseCase(dependencies).execute(
        companyName,
        id
      );

      if (employee.lastPayout > new Date())
        throw new BadRequestError(
          "You can only sent request 30 after your previous request "
        );

      const payoutReq = await requestPayout_usecase(dependencies).execute({
        requestedBy: id,
        companyName: companyName,
        requestedAt: new Date(),
        salary: employee.salary,
      });

      const editedEmployee = await editEmployees_UseCase(dependencies).execute(
        companyName,
        id,
        { lastPayout: date }
      );

      if (!payoutReq) {
        throw new BadRequestError("Some thing went wrong");
      }

      res.json({ data: payoutReq });
    } catch (error: any) {
      throw new Error(error);
    }
  };
  return requestPayout;
};
