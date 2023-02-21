import { Router, useRouter } from "next/router";
import React, { useEffect } from "react";
import CompanyLayout from "../../components/layout/companyLayout/CompanyLayout";
import { useActions } from "../../hooks/useAction";
import { useIsPaidTenant } from "../../hooks/useAuth";
import { useTenantData } from "../../hooks/useTenantData";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { AuthState, GetPaidTenantState } from "../../models/tenants";

const index = () => {
  const router = useRouter()
  useIsPaidTenant();
  useEffect(() => {
    router.push(`/${router.query.tenant}/jobs`)
  })

  return (
    <CompanyLayout loc="home" title="Company">
      
    </CompanyLayout>
  );
};

export default index;
