import React from "react";
import style from "../../styles/leaveRequests.module.scss";
import SearchComp from "../SegemanticComponents/SearchComp";
import LeaveRequestList from "./LeaveRequestList";
import SearchLeaveComponent from "./SearchLeaveComponent";

const LeaveRequestsComponent = () => {
  return (
    <div className={style.leaveRequestsMain}>
      <SearchLeaveComponent />
      <LeaveRequestList />
    </div>
  );
};

export default LeaveRequestsComponent;
