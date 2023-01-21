import React from "react";
import SubHeader from "../../../components/layout/CommonSubHeader/SubHeader";
import AdminLayout from "../../../components/layout/MainLayout";

const allEmployee = () => {
  return (
    <AdminLayout title="All Employee">
      {" "}
      <SubHeader text="All Emlpoyees" />
    </AdminLayout>
  );
};

export default allEmployee;
