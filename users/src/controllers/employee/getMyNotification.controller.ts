import { Request, Response, NextFunction } from "express";
import { DepenteniciesData } from "../../entities/interfaces";

export = (dependencies: DepenteniciesData): any => {
  const {
    useCases: { getMyNotification_UseCase },
  } = dependencies;

  const getMyNotification = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const myNotifications = await getMyNotification_UseCase(
        dependencies
      ).execute(req.currentUser?.id.companyName, req.currentUser?.id.id);

      res.json({ data: myNotifications });
    } catch (error: any) {
      throw new Error(error);
    }
  };
  return getMyNotification;
};
