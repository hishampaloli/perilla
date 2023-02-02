import React from "react";
import SubHeader from "../../../components/layout/CommonSubHeader/SubHeader";
import MainLayout from "../../../components/layout/MainLayout";
import TaskViewComponent from "../../../components/TaskViewComponent/TaskViewComponent";

const Task = () => {
  return (
    <MainLayout title="Task Details">
      <SubHeader text="Task Details" />
      <TaskViewComponent />
    </MainLayout>
  );
};

export default Task;
