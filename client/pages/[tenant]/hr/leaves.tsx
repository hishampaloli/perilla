import React from "react";
import SubHeader from "../../../components/layout/CommonSubHeader/SubHeader";
import MainLayout from "../../../components/layout/MainLayout";
import LeaveRequestsComponent from "../../../components/LeaveRequests/LeaveRequestsComponent";

const leaves = () => {
  return (
    <MainLayout title="My Leaves">
      <SubHeader text="My Leaves" />
      <LeaveRequestsComponent type="employee" />
    </MainLayout>
  );
};

export default leaves;
