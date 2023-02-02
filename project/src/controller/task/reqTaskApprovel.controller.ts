import { BadRequestError, currentUser } from "@hr-management/common";
import { Request, Response, NextFunction } from "express";
import { DepenteniciesData } from "../../entities/interfaces";
import { TaskStatusChangedPublisher } from "../../events/publishers/task-changed-event";
import { natsWrapper } from "../../nats-wrapper";

export = (dependencies: DepenteniciesData): any => {
  const {
    useCases: { reqTaskApprovel_UseCase },
  } = dependencies;

  const reqTaskApprovel = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const reqTaskData = await reqTaskApprovel_UseCase(dependencies).execute(
        req.params.taskId,
        req.currentUser?.id.id
      );

      if (!reqTaskData) throw new BadRequestError("no such task found");

      await new TaskStatusChangedPublisher(natsWrapper.client).publish({
        companyName: req.currentUser?.id?.companyName || "",
        employeeId: reqTaskData.assignedBy,
        message: `You have a new task approval request`,
      });

      res.json({ data: reqTaskData });
    } catch (error: any) {
      throw new Error(error);
    }
  };
  return reqTaskApprovel;
};
