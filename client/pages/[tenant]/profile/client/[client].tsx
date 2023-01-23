import { useRouter } from "next/router";
import React from "react";
import ClientComponent from "../../../../components/ClientComponent/ClientComponent";
import SubHeader from "../../../../components/layout/CommonSubHeader/SubHeader";
import AdminLayout from "../../../../components/layout/MainLayout";

const client = () => {
  const router = useRouter();
  const { client } = router.query;

  return (
    <AdminLayout title="Client Profile">
      <SubHeader text="Client Profile" />
      <ClientComponent />
    </AdminLayout>
  );
};

export default client;
