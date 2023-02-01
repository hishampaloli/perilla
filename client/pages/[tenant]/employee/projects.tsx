import React from "react";
import SubHeader from "../../../components/layout/CommonSubHeader/SubHeader";
import MainLayout from "../../../components/layout/MainLayout";
import ProjectPageComp from "../../../components/ProjectPage/ProjectPageComp";

const projects = () => {
  return (
    <MainLayout title="My Projects">
      <SubHeader text="My Projects" />

      <ProjectPageComp />
    </MainLayout>
  );
};

export default projects;
