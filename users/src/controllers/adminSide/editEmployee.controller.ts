import { BadRequestError } from "@hr-management/common";
import { Request, Response, NextFunction } from "express";
import { DepenteniciesData } from "../../entities/interfaces";

export = (dependencies: DepenteniciesData): any => {
  const {
    useCases: { editEmployees_UseCase },
  } = dependencies;

  const editEmployees = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const { phone, role, name, email, employeeId } = req.body;
      console.log( phone, role, name, email, employeeId);
      
      const companyName = req.currentTenant?.id?.companyName;

      const editedEmployee = await editEmployees_UseCase(dependencies).execute(
        companyName,
        req.params.employeeId,
        { phone, role, name, email, employeeId }
      );
      

      if (!editedEmployee) throw new BadRequestError("No such user found");

      res.json({ data: editedEmployee });
    } catch (error: any) {
      throw new Error(error);
    }
  };
  return editEmployees;
};
