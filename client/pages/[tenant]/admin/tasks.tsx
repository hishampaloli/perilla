import React from "react";
import AllTasksComponent from "../../../components/AllTasksComponent/AllTasksComponents";
import SubHeader from "../../../components/layout/CommonSubHeader/SubHeader";
import MainLayout from "../../../components/layout/MainLayout";

const tasks = () => {
  return (
    <MainLayout title="All Tasks">
      <SubHeader text="All Tasks" />
      <AllTasksComponent user="admin" />
    </MainLayout>
  );
};

export default tasks;
