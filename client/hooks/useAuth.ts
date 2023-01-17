import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { AuthState, GetPaidTenantState } from "../models/tenants";
import { useActions } from "./useAction";
import { useTypedSelector } from "./useTypedSelector";

export const useIsLogged = () => {
  const { data }: AuthState = useTypedSelector((state) => state.user);
  const router = useRouter();
  useEffect(() => {
    if (data) {
      router.push("/");
      console.log("isLoggedUseffect");
    }
  }, []);
};

export const useIsPurchased = () => {
  const { data }: AuthState = useTypedSelector((state) => state.user);
  const router = useRouter();

  useEffect(() => {
    if (data?.data?.isPurchased || !data?.data) router.back();
  }, []);
};

export const useIsPaidTenant = () => {
  const router = useRouter();
  const { data }: GetPaidTenantState = useTypedSelector(
    (state) => state.paidTenant
  );
  const { tenant } = router.query;
  const { getPaidTenantData } = useActions();

  useEffect(() => {
    if (router.isReady) {
      getPaidTenantData("", tenant);
    }
  }, [router.isReady]);

  if (router.isReady) {
    if (data?.data?.isPurchased) {
      console.log("show login");
    } else {
      router.push("/");
    }
  }
};
