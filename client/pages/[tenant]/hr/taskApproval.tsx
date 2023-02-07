import React from "react";
import AllTasksComponent from "../../../components/AllTasksComponent/AllTasksComponents";
import SubHeader from "../../../components/layout/CommonSubHeader/SubHeader";
import MainLayout from "../../../components/layout/MainLayout";

const tasks = () => {
  return (
    <MainLayout title="Tasks Approval">
      <SubHeader text="Tasks Approval" />
      <AllTasksComponent user="approval" />
    </MainLayout>
  );
};

export default tasks;
