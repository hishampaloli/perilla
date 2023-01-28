import { Request, Response, NextFunction } from "express";
import { BadRequestError, NotAuthorizedError } from "@hpshops/common";
import { natsWrapper } from "../../nats-wrapper";
import { DepenteniciesData } from "../../entities/interfaces";
import { EmployeeCreatedPublisher } from "../../events/publishers/employee-created-event";
import md5 from "md5";

export = (dependencies: DepenteniciesData): any => {
  const {
    useCases: {
      createEmployee_UseCase,
      getEmployee_UseCase,
      createEmployeeData_UseCase,
    },
  } = dependencies;

  const getEmployee = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const { role, name, email, password, phone, employeeId, designation } =
        req.body;

      const userPresent = await getEmployee_UseCase(dependencies).execute({
        company: req.currentTenant?.id?.companyName,
        phone,
        email,
      });

      if (userPresent.length) {
        throw new Error(
          "An employee with the given email or phone number already exists !"
        );
      }
      const avatar = `https://www.gravatar.com/avatar/${md5(
        email.trim().toLowerCase()
      )}?d=retro`;

      const createdUser = await createEmployee_UseCase(dependencies).execute({
        role,
        name,
        email,
        password,
        phone,
        employeeId,
        designation,
        joiningDate: Date(),
        company: req.currentTenant?.id.companyName,
        image: avatar,
      });
      if (!createdUser) {
        throw new BadRequestError("Opps somthing went wrong!");
      }

      const updatedUser = await createEmployeeData_UseCase(
        dependencies
      ).execute(createdUser.id, req.currentTenant?.id.companyName);

        await new EmployeeCreatedPublisher(natsWrapper.client).publish({
          companyName: createdUser.companyName,
          email,
          employeeId,
          phone,
          role,
          name,
          id: createdUser.id,
          image: createdUser.image,
        });
      

      res.json({ data: updatedUser });
    } catch (error: any) {
      throw new Error(error);
    }
  };
  return getEmployee;
};
