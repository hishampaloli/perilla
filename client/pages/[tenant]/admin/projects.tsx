import React from "react";
import SubHeader from "../../../components/layout/CommonSubHeader/SubHeader";
import MainLayout from "../../../components/layout/MainLayout";
import ProjectPageComp from "../../../components/ProjectPage/ProjectPageComp";

const projects = () => {
  return (
    <MainLayout title="Projects">
      <SubHeader text="Projects" />
      <ProjectPageComp />
    </MainLayout>
  );
};

export default projects;
