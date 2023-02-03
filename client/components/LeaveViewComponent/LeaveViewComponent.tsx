import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useActions } from "../../hooks/useAction";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { ViewSingleLeaveState } from "../../models/Leave";
import style from "../../styles/leaveView.module.scss";
import FixedSpinner from "../layout/FixedSpinner";
import NoDataCopmonent from "../layout/NoDataCopmonent";
import LeaveViewLeft from "./LeaveViewLeft";
import LeaveViewRight from "./LeaveViewRight";

const LeaveViewComponent = () => {
  const { viewSingleLeave } = useActions();
  const { data, loading }: ViewSingleLeaveState = useTypedSelector(
    (state) => state.singleLeave
  );
  const router = useRouter();
  const { leave } = router.query;
  useEffect(() => {
    if (router.isReady) {
      viewSingleLeave("f", leave!);
    }
  }, [router.isReady]);

  return (
    <div className={style.leaveViewMain}>
      {loading && <FixedSpinner />}
      {!loading && !data?.data.id ? (
        <NoDataCopmonent text="No such leave requests found" />
      ) : (
        <>
          {" "}
          <LeaveViewLeft leaveData={data?.data} />
          <LeaveViewRight employeeData={data?.data.employeeId} />
        </>
      )}
    </div>
  );
};

export default LeaveViewComponent;
