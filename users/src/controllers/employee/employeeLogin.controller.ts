import { BadRequestError } from "@hr-management/common";
import { Request, Response, NextFunction } from "express";
import { DepenteniciesData } from "../../entities/interfaces";

export = (dependencies: DepenteniciesData): any => {
  const {
    useCases: { employeeLogin_UseCase, getTwilioOtp_UseCase },
  } = dependencies;

  const employeeLogin = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const { company, password, phone } = req.body;
      console.log(company, password, phone);

      const userPresent = await employeeLogin_UseCase(dependencies).execute(
        company,
        phone,
        password
      );

      if (!userPresent) throw new BadRequestError("Invalid credentials");

      // const otpSend = await getTwilioOtp_UseCase(dependencies).execute(phone);

      // FIXME:
      // if (!otpSend) throw new BadRequestError("Oops cannot send OTP ");

      res.json({ data: userPresent });
    } catch (error: any) {
      throw new Error(error);
    }
  };
  return employeeLogin;
};
