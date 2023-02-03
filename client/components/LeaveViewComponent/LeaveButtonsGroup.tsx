import React from "react";
import { useActions } from "../../hooks/useAction";
import { useApproveLeave } from "../../hooks/useSwal";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { EmployeeAuthState } from "../../models/employee";
import { ViewSingleLeaveState } from "../../models/Leave";
import { AuthState } from "../../models/tenants";
import style from "../../styles/leaveView.module.scss";

const LeaveButtonsGroup = () => {
  const { approveLeave } = useActions();

  const { data }: AuthState = useTypedSelector((state) => state.user);

  const leaveDt: ViewSingleLeaveState = useTypedSelector(
    (state) => state.singleLeave
  );

  return (
    <>
      {data?.data.adminName && (
        <div className={style.leaveBtnGroup}>
          <button
            onClick={() =>
              useApproveLeave(leaveDt.data?.data.id!, true, approveLeave)
            }
            style={{ backgroundColor: "#51d293" }}
          >
            approve
          </button>
          <button
            onClick={() =>
              useApproveLeave(leaveDt.data?.data.id!, false, approveLeave)
            }
            style={{ backgroundColor: "#ec4134" }}
          >
            reject
          </button>
        </div>
      )}
    </>
  );
};

export default LeaveButtonsGroup;
