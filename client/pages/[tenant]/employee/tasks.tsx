import React from "react";
import AllTasksComponent from "../../../components/AllTasksComponent/AllTasksComponents";
import SubHeader from "../../../components/layout/CommonSubHeader/SubHeader";
import MainLayout from "../../../components/layout/MainLayout";

const tasks = () => {
  return (
    <MainLayout title="My Tasks">
      <SubHeader text="My Tasks" />
      <AllTasksComponent user="employee" />
    </MainLayout>
  );
};

export default tasks;
