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
        deadLine,
      } = req.body;

      const projectFound = await getSingleProject_UseCase(project);
      if (!projectFound) throw new BadRequestError("No such project found!");

      const employeeFound = await getSingleEmployees_UseCase(
        req.currentUser?.id.companyName,
        assignedTo
      );
      if (!employeeFound) throw new BadRequestError("No such Employee found!");

      const taskCreated = await createTask_UseCase({
        project,
        taskName,
        taskDescription,
        assignedTo,
        assignedBy: req.currentUser?.id.id,
        priority,
        deadLine,
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
