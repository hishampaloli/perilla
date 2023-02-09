import React from "react";
import style from "../../styles/assetsAndExpense.module.scss";
import NoDataCopmonent from "../layout/NoDataCopmonent";
import FixedSpinner from "../layout/FixedSpinner";
import { PayoutData } from "../../models/resources";
import PayoutBox from "./PayoutBox";

const AllPayoutsList = ({ data, loading }: { data: any; loading: boolean }) => {
  return (
    <div className={style.employeelistDiv}>
      <div>
        <p>Requested By</p>
        <p>Amount</p>
        <p>Requested At</p>
        <p>Role</p>
      </div>

      {loading && <FixedSpinner />}
      {!loading && !data?.length && (
        <NoDataCopmonent text={`No Payout requests found`} />
      )}
      {data?.length > 0 &&
        data?.map((el: PayoutData) => {
          return <PayoutBox el={el} />;
        })}
    </div>
  );
};

export default AllPayoutsList;
