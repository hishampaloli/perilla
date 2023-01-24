import React from "react";
import BankDetailsListComponent from "./BankDetailsListComponent";
import style from "../../styles/bankDetails.module.scss";

const BankDetailsMainComponent = () => {
  return (
    <div className={style.bankDetailsMain}>
      <BankDetailsListComponent />
    </div>
  );
};

export default BankDetailsMainComponent;
