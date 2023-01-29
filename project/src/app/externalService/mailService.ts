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
    link: "https://www.linkedin.com/in/hisham-paloli-141090231/",
  },
});

export const ProjectAddedResponse = {
  body: {
    name: "CUSTOMER",
    intro: "You were added to a project",
    table: {
      data: [
        {
          Info: "This mail is to remind you that you have been added to a new project.",
        },
      ],
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
