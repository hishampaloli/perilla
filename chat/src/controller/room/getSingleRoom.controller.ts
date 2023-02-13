import { BadRequestError } from "@hr-management/common";
import { Request, Response, NextFunction } from "express";
import { DepenteniciesData } from "../../entities/interfaces";

export = (dependencies: DepenteniciesData): any => {
  const {
    useCases: { getSingleRoom_UseCase },
  } = dependencies;

  const getSingleRoom = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const { companyName, id } = req.currentUser?.id!;
      const roomsDetails = await getSingleRoom_UseCase(dependencies).execute(
        companyName,
        req.params.roomId,
        id
      );

      if (!roomsDetails) {
        throw new BadRequestError("No room found found!");
      }

      res.json({ data: roomsDetails });
    } catch (error: any) {
      throw new Error(error);
    }
  };
  return getSingleRoom;
};
