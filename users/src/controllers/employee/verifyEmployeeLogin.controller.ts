import { BadRequestError } from "@hr-management/common";
import { Request, Response, NextFunction } from "express";
import generateToken from "../../app/externalServices/jsonwebtoken";
import { DepenteniciesData } from "../../entities/interfaces";

export = (dependencies: DepenteniciesData): any => {
  const {
    useCases: { employeeLogin_UseCase, verifyTwilioOtp_UseCase },
  } = dependencies;

  const verifyEmployeeLogin = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const { company, password, phone, otp } = req.body;

      const userPresent = await employeeLogin_UseCase(dependencies).execute(
        company,
        phone,
        password
      );

      if (!userPresent) throw new BadRequestError("Invalid credentials");

      const otpverification = await verifyTwilioOtp_UseCase(
        dependencies
      ).execute(otp, phone);

      if (!otpverification) throw new BadRequestError("Invalid OTP ");

      let token = generateToken(userPresent);

      req.session = {
        userJwt: token,
        userDetails: userPresent,
      };
      res.json({ data: userPresent });
    } catch (error: any) {
      throw new Error(error);
    }
  };
  return verifyEmployeeLogin;
};
