import React from "react";
import SubHeader from "../../../components/layout/CommonSubHeader/SubHeader";
import MainLayout from "../../../components/layout/MainLayout";
import ProjectViewComp from "../../../components/ProjectVeiwComponent/ProjectViewComponent";

const project = () => {
  return (
    <MainLayout title="Project">
      <SubHeader text="Project" />
      <ProjectViewComp />
    </MainLayout>
  );
};

export default project;
