import React from "react";
import BankDetailsBox from "./BankDetailsBox";
import BankDetailsListComponent from "./BankDetailsListComponent";
import style from "../../styles/bankDetails.module.scss";

const BankDetailsMainComponent = () => {
  return (
    <div className={style.bankDetailsMain}>
      <BankDetailsListComponent />
      <BankDetailsBox />
    </div>
  );
};

export default BankDetailsMainComponent;
