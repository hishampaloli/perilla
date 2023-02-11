import { BadRequestError } from "@hr-management/common";
import { Request, Response, NextFunction } from "express";
import { DepenteniciesData } from "../../entities/interfaces";

export = (dependencies: DepenteniciesData): any => {
  const {
    useCases: { getAllChatsInRoom_UseCase },
  } = dependencies;

  const AllChatsInRoom = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const { roomId, pageNumber } = req.query;
      const AllChats = await getAllChatsInRoom_UseCase(dependencies)
        .execute(roomId, pageNumber)

      if (!AllChats) {
        throw new BadRequestError("No room found found!");
      }

      res.json({ data: AllChats });
    } catch (error: any) {
      throw new Error(error);
    }
  };
  return AllChatsInRoom;
};
