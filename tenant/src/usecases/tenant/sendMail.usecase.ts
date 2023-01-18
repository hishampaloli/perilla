import nodemailer from "nodemailer";
import {
  mailConfig,
  MailGenerator,
  getMessage,
} from "../../libs/utils/mailService";

export const sendMail_UseCase = (dependencies: any) => {
  const {
    repository: { tenantRepository },
  } = dependencies;

  if (!tenantRepository)
    throw new Error("The product repository should be dependencie");

  const execute = ({
    response,
    userEmail,
    subject,
  }: {
    response: any;
    userEmail: string;
    subject: string;
  }) => {
    const transporter = nodemailer.createTransport(mailConfig);
    let mail = MailGenerator.generate(response);
    let message = getMessage({ userEmail, subject, mail });
    
    transporter
      .sendMail(message)
      .then((info) => {
        return info;
      })
      .catch((err) => {
        return err;
      });
  };
  return {
    execute,
  };
};
