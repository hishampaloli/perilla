import React from "react";
import { useActions } from "../../hooks/useAction";
import { useRequestPauout } from "../../hooks/useToast";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { AuthState } from "../../models/tenants";
import styles from "../../styles/assetsAndExpense.module.scss";

const RequestPayoutComponent = () => {
  const { data }: AuthState = useTypedSelector((state) => state.user);
  const { requestPayout } = useActions();
  const requestHandler = async () => {
    await useRequestPauout(requestPayout);
  };
  return (
    <div
      style={{
        width: "100%",
        position: "relative",
        display: "flex",
        justifyContent: "flex-end",
      }}
    >
      {!data?.data.adminName && (
        <button className={styles.reqtestBtn} onClick={requestHandler}>
          REQUEST PAYOUT
        </button>
      )}
    </div>
  );
};

export default RequestPayoutComponent;
