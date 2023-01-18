import Mailgen from "mailgen";

export const mailConfig = {
  service: "gmail",
  auth: {
    user: process.env.EMAIL_STR,
    pass: process.env.PASSWORD_STR,
  },
};

export const MailGenerator = new Mailgen({
  theme: "default",
  product: {
    name: "PERILLA",
    link: "https://mailgen.js",
  },
});

export const PurchaseResponse = {
  body: {
    name: "PERILLA",
    intro: "Purchase successful",
    table: {
      data: [{ Item: "PERILLA HR SERVICE", Price: "$200.00" }],
    },
  },
  outro: "Thank you for your trust",
};

export const getMessage = ({
  userEmail,
  subject,
  mail,
}: {
  userEmail: string;
  subject: string;
  mail: any;
}) => {
  let message = {
    from: process.env.EMAIL_STR,
    to: userEmail,
    subject: subject,
    html: mail,
  };
  return message;
};
