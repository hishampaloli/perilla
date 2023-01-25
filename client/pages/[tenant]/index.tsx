import { useRouter } from "next/router";
import React, { useEffect } from "react";
import CompanyLayout from "../../components/layout/companyLayout/CompanyLayout";
import { useActions } from "../../hooks/useAction";
import { useIsPaidTenant } from "../../hooks/useAuth";
import { useTenantData } from "../../hooks/useTenantData";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { AuthState, GetPaidTenantState } from "../../models/tenants";

const index = () => {
  useIsPaidTenant();

  return (
    <CompanyLayout title="Company">
      <h1>786</h1>
    </CompanyLayout>
  );
};

export default index;
