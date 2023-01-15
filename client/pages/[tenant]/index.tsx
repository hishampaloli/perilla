import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useTenantData } from "../../hooks/useTenantData";

const index = () => {
  const { tenantDatas } = useTenantData();
  const router = useRouter();

  useEffect(() => {
    if (!tenantDatas?.email) {
      router.push("/");
    }
  }, []);
  
  return (
    <div>
      <h1>786</h1>
    </div>
  );
};

export default index;
