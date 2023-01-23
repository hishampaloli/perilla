import React from "react";
import { BankDetails } from "../../models/profile";
import style from "../../styles/profile.module.scss";

const BankDetailsComponent = ({
  bankDetails,
}: {
  bankDetails: BankDetails;
}) => {
  return (
    <div className={style.bankDetails}>
      <h2>Bank Details</h2>

      <ul className={style.bankUi}>
        <div>
          <strong>Bank Name : </strong>
          <strong>Account Number : </strong>
          <strong>IFSC Code : </strong>
          <strong> Pan Number : </strong>
          <strong> Is Approved : </strong>
        </div>
        <div>
          <span>{bankDetails?.bankName}</span>
          <span>{bankDetails?.accountNumber}</span>
          <span>{bankDetails?.ifcsCode}</span>
          <span>{bankDetails?.panNumber}</span>
          <span>{bankDetails?.isApproved ? "Approved" : "Not Approved"}</span>
        </div>
      </ul>
    </div>
  );
};

export default BankDetailsComponent;
