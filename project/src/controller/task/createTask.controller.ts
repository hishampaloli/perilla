import { BadRequestError, currentUser } from "@hr-management/common";
import { Request, Response, NextFunction } from "express";
import { DepenteniciesData } from "../../entities/interfaces";

export = (dependencies: DepenteniciesData): any => {
  const {
    useCases: {
      createTask_UseCase,
      getSingleEmployees_UseCase,
      getSingleProject_UseCase,
    },
  } = dependencies;

  const createTask = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const {
        project,
        taskName,
        taskDescription,
        assignedTo,
        priority,
        deadline,
      } = req.body;

      const projectFound = await getSingleProject_UseCase(dependencies).execute(
        project
      );
      if (!projectFound) throw new BadRequestError("No such project found!");

      const employeeFound = await getSingleEmployees_UseCase(
        dependencies
      ).execute(req.currentUser?.id.companyName, assignedTo);


      if (!employeeFound) throw new BadRequestError("No such Employee found!");

      const taskCreated = await createTask_UseCase(dependencies).execute({
        project,
        taskName,
        taskDescription,
        assignedTo,
        assignedBy: req.currentUser?.id.id,
        priority,
        deadline,
        startDate: Date(),
      });

      if (!taskCreated) throw new BadRequestError("Some thing went wrong");

      res.json({ data: taskCreated });
    } catch (error: any) {
      throw new Error(error);
    }
  };
  return createTask;
};
