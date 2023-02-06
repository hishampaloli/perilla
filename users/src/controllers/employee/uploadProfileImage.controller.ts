import { BadRequestError } from "@hr-management/common";
import { Request, Response, NextFunction } from "express";
import { DepenteniciesData } from "../../entities/interfaces";
import { EmplyeeEditedPublisher } from "../../events/publishers/employee-edited-event";
import { natsWrapper } from "../../nats-wrapper";

export = (dependencies: DepenteniciesData): any => {
  const {
    useCases: { uploadProfilePic_UseCase, getEmployee_UseCase },
  } = dependencies;

  const uploadProfileImage = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const employeeData = await getEmployee_UseCase(dependencies).execute({
        company: req.currentUser?.id.companyName,
        phone: req.currentUser?.id.phone,
        email: req.currentUser?.id.email,
      });
      console.log(employeeData[0].bucketKey);
      const uploadImage = await uploadProfilePic_UseCase(dependencies).execute(
        req.currentUser?.id?.companyName,
        req.currentUser?.id?.id,
        req.file,
        employeeData[0].bucketKey
      );

      if (!uploadImage)
        throw new BadRequestError("Unable to upload image, please try again");

      await new EmplyeeEditedPublisher(natsWrapper.client).publish({
        companyName: uploadImage.companyName,
        email: uploadImage.email,
        employeeId: uploadImage.employeeId,
        phone: uploadImage.phone,
        role: uploadImage.role,
        name: uploadImage.name,
        id: uploadImage.id,
        image: uploadImage.image,
      });
      res.json({ data: uploadImage });
    } catch (error: any) {
      throw new Error(error);
    }
  };
  return uploadProfileImage;
};
