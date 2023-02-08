import React, { useEffect } from "react";
import AssetsComponent from "../../../components/assetsAndExpense/asset/AssetsComponent";
import SubHeader from "../../../components/layout/CommonSubHeader/SubHeader";
import AdminLayout from "../../../components/layout/MainLayout";

const assets = () => {
  return (
    <AdminLayout title="Assets">
      <SubHeader text="Assets" />
      <AssetsComponent type="admin" />
    </AdminLayout>
  );
};

export default assets;
