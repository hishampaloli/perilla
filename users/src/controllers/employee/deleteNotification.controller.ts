import { Request, Response, NextFunction } from "express";
import { DepenteniciesData } from "../../entities/interfaces";

export = (dependencies: DepenteniciesData): any => {
  const {
    useCases: { deleteMyNotification_UseCase },
  } = dependencies;

  const deleteMyNotification = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const myNotification = await deleteMyNotification_UseCase(
        dependencies
      ).execute(
        req.currentUser?.id.companyName,
        req.currentUser?.id.id,
        req.params.id
      );

      res.json({ data: myNotification });
    } catch (error: any) {
      throw new Error(error);
    }
  };
  return deleteMyNotification;
};
