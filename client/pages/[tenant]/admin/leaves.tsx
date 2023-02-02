import React from "react";
import SubHeader from "../../../components/layout/CommonSubHeader/SubHeader";
import MainLayout from "../../../components/layout/MainLayout";
import LeaveRequestsComponent from "../../../components/LeaveRequests/LeaveRequestsComponent";

const leaves = () => {
  return (
    <MainLayout title="Leave Requests">
      <SubHeader text="Leave Requests" />
      <LeaveRequestsComponent />
    </MainLayout>
  );
};

export default leaves;
