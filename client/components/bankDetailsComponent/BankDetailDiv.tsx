import Link from "next/link";
import React from "react";
import { BankDetails } from "../../models/profile";
import style from "../../styles/bankDetails.module.scss";

const BankDetailDiv = ({ bankData }: { bankData: BankDetails }) => {
  

  return (
    <Link
      href={`/${bankData?.companyName}/profile/employee/${bankData.employee.phone}`}
      className={style.bankDetailDiv}
    >
      <p>
        <img src={bankData.employee.image} alt="" />
        {bankData.employee.name}
      </p>
      <p>{bankData.employee.role}</p>
      <p>{bankData.employee.email}</p>
      <p>{bankData.bankName}</p>
    </Link>
  );
};

export default BankDetailDiv;
