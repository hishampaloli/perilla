import { Request, Response, NextFunction } from "express";
import { BadRequestError, NotAuthorizedError } from "@hr-management/common";
import { TenantData } from "../../libs/entities";

export = (dependencies: any): any => {
  const {
    useCases: { getOtp_UseCase },
  } = dependencies;

  const createProduct = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const { number } = req.body;



      const recivedOtp = await getOtp_UseCase(dependencies).execute(number);

      if (!recivedOtp) {
        throw new BadRequestError("Otp request failed");
      }

      res.json({ otpRecived: true });
    } catch (error: any) {
      throw new Error(error);
    }
  };
  return createProduct;
};
