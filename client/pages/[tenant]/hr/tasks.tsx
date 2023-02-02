import React from "react";
import AllTasksComponent from "../../../components/AllTasksComponent/AllTasksComponents";
import SubHeader from "../../../components/layout/CommonSubHeader/SubHeader";
import MainLayout from "../../../components/layout/MainLayout";

const tasks = () => {
  return (
    <MainLayout title="Tasks Posted">
      <SubHeader text="Tasks Posted" />
      <AllTasksComponent user="hr" />
    </MainLayout>
  );
};

export default tasks;
