import { BadRequestError } from "@hr-management/common";
import { Request, Response, NextFunction } from "express";
import { DepenteniciesData } from "../../entities/interfaces";
import { EmplyeeEditedPublisher } from "../../events/publishers/employee-edited-event";
import { natsWrapper } from "../../nats-wrapper";

export = (dependencies: DepenteniciesData): any => {
  const {
    useCases: { editEmployees_UseCase, getEmployee_UseCase },
  } = dependencies;

  const editEmployees = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const { phone, role, name, email, employeeId, designation } = req.body;
      console.log(phone, role, name, email, employeeId, designation);

      const companyName = req.currentTenant?.id?.companyName;

      const editedEmployee = await editEmployees_UseCase(dependencies).execute(
        companyName,
        req.params.employeeId,
        { phone, role, name, email, employeeId, designation }
      );

      if (!editedEmployee) throw new BadRequestError("No such user found");

      await new EmplyeeEditedPublisher(natsWrapper.client).publish({
        companyName: editedEmployee.companyName,
        email: editedEmployee.email,
        employeeId: editedEmployee.employeeId,
        phone: editedEmployee.phone,
        role: editedEmployee.role,
        name: editedEmployee.name,
        id: editedEmployee.id,
        image: editedEmployee.image,
      });

      res.json({ data: editedEmployee });
    } catch (error: any) {
      throw new Error(error);
    }
  };
  return editEmployees;
};
