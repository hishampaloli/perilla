import nodemailer from "nodemailer";
import {
  mailConfig,
  MailGenerator,
  getMessage,
} from "../../app/externalService/mailService";

export const sendMail_UseCase = (dependencies: any) => {

  const execute = async ({
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
