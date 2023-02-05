import React from "react";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { GetLeaveReqState, GetMyLeavesState } from "../../models/Leave";
import style from "../../styles/leaveRequests.module.scss";
import ApplyLeaveComponent from "./ApplyLeaveComponent";
import LeaveDashBoardComponent from "./LeaveDashBoardComponent";
import LeaveRequestList from "./LeaveRequestList";
import SearchLeaveComponent from "./SearchLeaveComponent";

const LeaveRequestsComponent = ({ type }: { type: string }) => {
  const leaveReqs: GetLeaveReqState = useTypedSelector(
    (state) => state.getleaveRequests
  );

  const myLeaves: GetMyLeavesState = useTypedSelector(
    (state) => state.getMyleaves
  );

  return (
    <div className={style.leaveRequestsMain}>
      {type === "employee" && <LeaveDashBoardComponent />}
      {type === "employee" && <ApplyLeaveComponent />}

      <SearchLeaveComponent type={type} />
      <LeaveRequestList
        data={type === "admin" ? leaveReqs?.data! : myLeaves?.data?.data!}
        loading={type === "admin" ? leaveReqs.loading : myLeaves.loading}
      />
    </div>
  );
};

export default LeaveRequestsComponent;
