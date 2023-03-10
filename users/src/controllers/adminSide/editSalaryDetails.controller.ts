import { BadRequestError } from "@hr-management/common";
import { Request, Response, NextFunction } from "express";
import { DepenteniciesData } from "../../entities/interfaces";
import { SalaryChangedPublisher } from "../../events/publishers/salary-changed-event";
import { natsWrapper } from "../../nats-wrapper";

export = (dependencies: DepenteniciesData): any => {
  const {
    useCases: { editSalary_UseCase },
  } = dependencies;

  const editSalaryDetails = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const { baseSalary, bonus, HRA, grossSalary, paymentType, PfRate } =
        req.body;

      const companyName = req.currentTenant?.id?.companyName;

      const editedSalaryDetails = await editSalary_UseCase(
        dependencies
      ).execute(companyName, req.params.employeeId, {
        baseSalary,
        bonus,
        HRA,
        grossSalary,
        paymentType,
        PfRate,
      });

      if (!editedSalaryDetails) throw new BadRequestError("No such user found");

      await new SalaryChangedPublisher(natsWrapper.client).publish({
        companyName: companyName!,
        id: req.params.employeeId,
        salary: grossSalary,
      });
      res.json({ data: editedSalaryDetails });
    } catch (error: any) {
      throw new Error(error);
    }
  };
  return editSalaryDetails;
};
