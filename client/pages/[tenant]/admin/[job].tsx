import React from "react";
import SingleJobViewMain from "../../../components/JobComponent/singleJob/SingleJobViewMain";
import SubHeader from "../../../components/layout/CommonSubHeader/SubHeader";
import MainLayout from "../../../components/layout/MainLayout";

const jo = () => {
  return (
    <MainLayout title="Jobs View">
      <SubHeader text="Job Details" />
      <SingleJobViewMain />
    </MainLayout>
  );
};

export default jo;
