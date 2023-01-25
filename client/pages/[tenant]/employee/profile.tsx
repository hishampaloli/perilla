import React from "react";
import SubHeader from "../../../components/layout/CommonSubHeader/SubHeader";
import MainLayout from "../../../components/layout/MainLayout";
import ProfileComponent from "../../../components/ProfileComponent/ProfileComponent";

const profile = () => {
  return (
    <MainLayout title="Profile">
      <SubHeader text="Profile" />
      <ProfileComponent />
    </MainLayout>
  );
};

export default profile;
