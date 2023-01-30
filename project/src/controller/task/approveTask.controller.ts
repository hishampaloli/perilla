import { BadRequestError, currentUser } from "@hr-management/common";
import { Request, Response, NextFunction } from "express";
import { DepenteniciesData } from "../../entities/interfaces";
import { TaskStatusChangedPublisher } from "../../events/publishers/task-changed-event";
import { natsWrapper } from "../../nats-wrapper";

export = (dependencies: DepenteniciesData): any => {
  const {
    useCases: { editTask_UseCase },
  } = dependencies;

  const approveTask = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const { status } = req.query;

      const approvedTask = await editTask_UseCase(dependencies).execute(
        req.params.taskId,
        req.currentUser?.id.id,
        { isCompleted: status, isApproved: status }
      );

      if (!approvedTask) throw new BadRequestError("no such task found");

      await new TaskStatusChangedPublisher(natsWrapper.client).publish({
        companyName: req.currentUser?.id?.companyName || "",
        employeeId: approvedTask.assignedTo,
        message: `Your task was ${status === 'true' ? 'accepeted' : 'rejected'} . Please check your task dashboard :)`,
      });

      res.json({ data: approvedTask });
    } catch (error: any) {
      throw new Error(error);
    }
  };
  return approveTask;
};
