import { BadRequestError } from "@hr-management/common";
import { Request, Response, NextFunction } from "express";
import { DepenteniciesData } from "../../entities/interfaces";
import { EmployeeRemovedPublisher } from "../../events/publishers/employee-removed-event";
import { natsWrapper } from "../../nats-wrapper";

export = (dependencies: DepenteniciesData): any => {
  const {
    useCases: { editEmployees_UseCase },
  } = dependencies;

  const removeEmployee = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const companyName = req.currentTenant?.id?.companyName;

      const removedEmployee = await editEmployees_UseCase(dependencies).execute(
        companyName,
        req.params.employeeId,
        { isBlocked: true }
      );
      if (!removedEmployee) throw new BadRequestError("No such user found");

      await new EmployeeRemovedPublisher(natsWrapper.client).publish({
        companyName: removedEmployee.companyName,
        id: removedEmployee.id,
        isBlocked: true,
      });
      res.json({ data: removedEmployee });
    } catch (error: any) {
      throw new Error(error);
    }
  };
  return removeEmployee;
};
