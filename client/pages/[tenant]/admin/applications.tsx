import React from "react";
import AllApplicationListMain from "../../../components/applicationComponent/allApplications/AllApplicationListMainComp";
import SingleJobViewMain from "../../../components/JobComponent/singleJob/SingleJobViewMain";
import SubHeader from "../../../components/layout/CommonSubHeader/SubHeader";
import MainLayout from "../../../components/layout/MainLayout";

const applications = () => {
  return (
    <MainLayout title="All Applications">
      <SubHeader text="All Applications" />
      <AllApplicationListMain />
    </MainLayout>
  );
};

export default applications;
