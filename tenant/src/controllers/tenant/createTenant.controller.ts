import { Request, Response, NextFunction } from "express";
import { BadRequestError, NotAuthorizedError } from "@hr-management/common";
import { TenantData } from "../../libs/entities";
// import { ProductCreatedPublisher } from "../../../events/publisher.ts/product-created-event";
// import { natsWrapper } from "../../../nats-wrapper";

export = (dependencies: any): any => {
  const {
    useCases: { createTenant_UseCase },
  } = dependencies;

  const createProduct = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const {
        companyName,
        address,
        adminName,
        city,
        country,
        email,
        password,
        paymentDetails,
        paymentId,
        phone,
        postalCode,
        purchaseDate,
      }: TenantData = req.body;

      if (typeof phone !== "number")
        throw new BadRequestError("Please provide a valid phone number");
      if (typeof postalCode !== "number")
        throw new BadRequestError("Please provide a valid postal code");

      const addedTenant = await createTenant_UseCase(dependencies).execute(
        req.body
      );

      if (!addedTenant) {
        throw new BadRequestError("Something went wrong");
      }

      res.json({ addedTenant });
    } catch (error: any) {
      throw new Error(error);
    }
  };
  return createProduct;
};
