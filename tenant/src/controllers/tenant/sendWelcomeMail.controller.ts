import { Request, Response, NextFunction } from "express";
import nodemailer from "nodemailer";

export = (dependencies: any): any => {
  const sendWelocomeMail = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      let testAccount = await nodemailer.createTestAccount();

      // create reusable transporter object using the default SMTP transport
      let transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
          user: testAccount.user, // generated ethereal user
          pass: testAccount.pass, // generated ethereal password
        },
      });

      let message = await transporter.sendMail({
        from: '"Fred Foo 👻" <foo@example.com>', // sender address
        to: "bar@example.com, baz@example.com", // list of receivers
        subject: "Hello ✔", // Subject line
        text: "Hello world?", // plain text body
        html: "<b>Hello world?</b>", // html body
      });

      transporter
        .sendMail(message)
        .then((info) => {
          return res.status(201).json({ msg: "success", info: info });
        })
        .catch((err) => {
          return res.status(500).json({ err });
        });
    } catch (error: any) {
        console.log(error);
        
      throw new Error(error);
    }
  };

  return sendWelocomeMail;
};
