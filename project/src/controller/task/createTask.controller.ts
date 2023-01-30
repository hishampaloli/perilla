import { BadRequestError, currentUser } from "@hr-management/common";
import { Request, Response, NextFunction } from "express";
import { TaskAddedResponse } from "../../app/externalService/mailService";
import { DepenteniciesData } from "../../entities/interfaces";
import { TaskAssignedPublisher } from "../../events/publishers/task-assigned-event";
import { natsWrapper } from "../../nats-wrapper";

export = (dependencies: DepenteniciesData): any => {
  const {
    useCases: {
      createTask_UseCase,
      getSingleEmployees_UseCase,
      getSingleProject_UseCase,
      sendMail_UseCase,
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

      // TODO:  EMAIL
      // const Resemail = await sendMail_UseCase(dependencies).execute({
      //   userEmail: employeeFound.email,
      //   subject: "New Task assigned",
      //   response: TaskAddedResponse,
      // });

      if (!taskCreated) throw new BadRequestError("Some thing went wrong");

      await new TaskAssignedPublisher(natsWrapper.client).publish({
        companyName: req.currentUser?.id?.companyName || "",
        employeeId: assignedTo,
        message: `You were assigned to a new task. Please check your task dashboard :)`,
      });

      res.json({ data: taskCreated });
    } catch (error: any) {
      throw new Error(error);
    }
  };
  return createTask;
};
