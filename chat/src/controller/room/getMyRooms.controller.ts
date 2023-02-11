import { BadRequestError } from "@hr-management/common";
import { Request, Response, NextFunction } from "express";
import { DepenteniciesData } from "../../entities/interfaces";

export = (dependencies: DepenteniciesData): any => {
  const {
    useCases: { getMyRooms_UseCase },
  } = dependencies;

  const getMyRooms = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const { companyName, id } = req.currentUser?.id!;
      const AllRooms = await getMyRooms_UseCase(dependencies).execute(
        companyName,
        id
      );
      

      if (!AllRooms) {
        throw new BadRequestError("No room found found!");
      }

      res.json({ data: AllRooms });
    } catch (error: any) {
      throw new Error(error);
    }
  };
  return getMyRooms;
};
