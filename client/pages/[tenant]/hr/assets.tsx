import React from "react";
import AllEmployeesComponent from "../../../components/AdminSideComponents/EmployeesComponents/AllEmployeesComponentMain";
import AssetsComponent from "../../../components/assetsAndExpense/asset/AssetsComponent";
import SubHeader from "../../../components/layout/CommonSubHeader/SubHeader";
import AdminLayout from "../../../components/layout/MainLayout";

const assets = () => {
  return (
    <AdminLayout title="Assets">
      <SubHeader text="Assets" />
      <AssetsComponent type="hr" />
    </AdminLayout>
  );
};

export default assets;
