import React from "react";
import SubHeader from "../../../components/layout/CommonSubHeader/SubHeader";
import MainLayout from "../../../components/layout/MainLayout";
import ProjectPageComponent from "../../../components/ProjectPage/ProjectPageComp";

const projects = () => {
  return (
    <MainLayout title="Project">
      <SubHeader text="Project" />
      <ProjectPageComponent />
    </MainLayout>
  );
};

export default projects;
