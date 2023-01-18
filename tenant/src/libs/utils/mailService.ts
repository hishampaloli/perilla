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

export const LoginResponse = {
  body: {
    name: "CUSTOMER",
    intro: "Login successful",
    table: {
      data: [
        {
          Info: "You have successfully Logged in, if your are not the one , then please contact our support team",
        },
      ],
    },
  },
  outro: "Thank you for your trust",
};

export const SignUpResponse = ({
  companyName,
  address,
  adminName,
  email,
  phone,
}: {
  companyName: string;
  address: string;
  adminName: string;
  email: string;
  phone: number;
}) => {
  const data = {
    body: {
      name: "CUSTOMER",
      intro: "Your company have been registered successfully",
      table: {
        data: [
          {
            companyName,
            address,
            adminName,
            email,
            phone,
          },
        ],
      },
    },
    outro: "Thank you for your trust",
  };

  return data;
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
