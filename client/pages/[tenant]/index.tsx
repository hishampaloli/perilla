import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useActions } from "../../hooks/useAction";
import { useIsPaidTenant } from "../../hooks/useAuth";
import { useTenantData } from "../../hooks/useTenantData";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { AuthState, GetPaidTenantState } from "../../models/tenants";

const index = () => {
 
  useIsPaidTenant()

  return (
    <div>
      <h1>786</h1>
    </div>
  );
};

export default index;
