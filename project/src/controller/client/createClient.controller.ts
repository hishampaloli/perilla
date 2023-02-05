import { BadRequestError } from "@hr-management/common";
import { Request, Response, NextFunction } from "express";
import { DepenteniciesData } from "../../entities/interfaces";

import md5 from "md5";
import { ClientCreatedPublisher } from "../../events/publishers/client-created-event";
import { natsWrapper } from "../../nats-wrapper";

export = (dependencies: DepenteniciesData): any => {
  const {
    useCases: { createClient_UseCase },
  } = dependencies;

  const createClient = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const {
        clientCompany,
        clientName,
        email,
        phone,
        clientId,
        address,
        gender,
      } = req.body;

      const avatar = `https://www.gravatar.com/avatar/${md5(
        email.trim().toLowerCase()
      )}?d=retro`;


      const createdClient = await createClient_UseCase(dependencies).execute({
        companyName: req.currentTenant?.id?.companyName,
        clientCompany,
        clientName,
        email,
        phone,
        clientId,
        address,
        gender,
        image: avatar,
      });

      if (!createdClient) {
        throw new BadRequestError("Opps somthing went wrong!");
      }

      await new ClientCreatedPublisher(natsWrapper.client).publish({
        companyName: req.currentTenant?.id?.companyName || "",
      });

      res.json({ data: createdClient });
    } catch (error: any) {
      throw new Error(error);
    }
  };
  return createClient;
};
