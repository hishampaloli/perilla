import React from "react";
import SubHeader from "../../../components/layout/CommonSubHeader/SubHeader";
import MainLayout from "../../../components/layout/MainLayout";
import LeaveViewComponent from "../../../components/LeaveViewComponent/LeaveViewComponent";

const leave = () => {
  return (
    <MainLayout title="Leave Application">
      <SubHeader text="Leave Application" />
      <LeaveViewComponent />
    </MainLayout>
  );
};

export default leave;
