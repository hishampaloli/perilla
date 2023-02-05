import React, { useEffect } from "react";
import { AllBankDetailsRequestState } from "../../models/profile";
import Spinner from "../layout/SpinnerComponent";
import BankDetailDiv from "./BankDetailDiv";
import style from "../../styles/bankDetails.module.scss";
import NoDataCopmonent from "../layout/NoDataCopmonent";

const BankDetailsListComponent = ({
  data,
  loading,
}: AllBankDetailsRequestState) => {
  return (
    <div className={style.bankDetailsList}>
      {loading && <Spinner />}

      <div className={style.bankDetailsListHead}>
        <p>Employee Name</p>
        <p>Employee Type</p>
        <p>Employee Email</p>
        <p>Bank Name</p>
      </div>

      {data?.data.map((el: any) => {
        return <BankDetailDiv bankData={el} />;
      })}
      {!loading && !data?.data.length && (
        <div style={{ marginTop: "30px" }}>
          <NoDataCopmonent text="No Request Found" />
        </div>
      )}
    </div>
  );
};

export default BankDetailsListComponent;
