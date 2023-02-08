import React from "react";
import style from "../../../styles/assetsAndExpense.module.scss";
import NoDataCopmonent from "../../layout/NoDataCopmonent";
import FixedSpinner from "../../layout/FixedSpinner";
import ItemsList from "../common/itemsList";
import { ExpenseData } from "../../../models/resources";

const AllExpenseList = ({ data, loading }: { data: any; loading: boolean }) => {
  return (
    <div className={style.employeelistDiv}>
      <div>
        <p>Added By</p>
        <p>Expense</p>
        <p>Price</p>
        <p>Added at</p>
      </div>

      {loading && <FixedSpinner />}
      {!loading && !data?.length && (
        <NoDataCopmonent text={`No expense found`} />
      )}
      {data?.length &&
        data?.map((el: ExpenseData) => {
          return <ItemsList type="expense" el={el} />;
        })}
    </div>
  );
};

export default AllExpenseList;
