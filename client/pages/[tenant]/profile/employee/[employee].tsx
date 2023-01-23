import { useRouter } from "next/router";
import React from "react";
import SubHeader from "../../../../components/layout/CommonSubHeader/SubHeader";
import AdminLayout from "../../../../components/layout/MainLayout";
import ProfileComponent from "../../../../components/ProfileComponent/ProfileComponent";

const employee = () => {
  return (
    <AdminLayout title="Profile">
      <SubHeader text="Profile" />
      <ProfileComponent />
    </AdminLayout>
  );
};

export default employee;
