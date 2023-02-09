import React, { useEffect } from "react";
import SearchComp from "../SegemanticComponents/SearchComp";
import AllPayoutsList from "./payoutLists";
import styles from "../../styles/assetsAndExpense.module.scss";
import RequestPayoutComponent from "./RequestPayoutComponent";
import { useActions } from "../../hooks/useAction";
import { GetAllPayoutsState } from "../../models/resources";
import { useTypedSelector } from "../../hooks/useTypedSelector";

const PayoutComponent = ({ type }: { type: string }) => {
  const { getAllPayouts } = useActions();
  useEffect(() => {
    getAllPayouts("", type, false);
  }, []);
  const { data, loading }: GetAllPayoutsState = useTypedSelector(
    (state) => state.allPayouts
  );
  console.log(data);
  return (
    <div className={styles.assetsMain}>
      <RequestPayoutComponent />
      <SearchComp
        placeholder="Search Payouts by username"
        setClick={""}
        setKeys={""}
      />
      <AllPayoutsList data={data?.data} loading={false} />
    </div>
  );
};

export default PayoutComponent;
