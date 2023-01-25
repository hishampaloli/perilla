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

export const RequireLogin = () => {
  const { data }: AuthState = useTypedSelector((state) => state.user);
  const router = useRouter();
  useEffect(() => {
    if (!data?.data || !data.data.isPurchased) {
      router.push("/");
    }
  }, []);
};

export const useIsPurchased = () => {
  const { data }: AuthState = useTypedSelector((state) => state.user);
  const router = useRouter();

  useEffect(() => {
    if (data?.data?.isPurchased || !data?.data) router.push("/");
  }, []);
};

export const useIsPaidTenant = () => {
  const router = useRouter();
  const { data, error }: GetPaidTenantState = useTypedSelector(
    (state) => state.paidTenant
  );
  const { tenant } = router.query;
  const { getPaidTenantData } = useActions();

  useEffect(() => {
    if (router.isReady) {
      getPaidTenantData("", tenant);
    }
  }, [router.isReady]);


  useEffect(() => {
    if (data) {
      if (data?.data?.isPurchased) {
        console.log("show login");
      } else {
        // router.push("/");
      }
    }
    if (error) {
      // router.push("/");
    }
  }, [data,error]);
};

export const useIsAdmin = () => {
  const router = useRouter();
  const { data }: AuthState = useTypedSelector((state) => state.user);

  console.log(data?.data.isPurchased);

  useEffect(() => {
    if (router.isReady) {
      if (data?.data.isPurchased) {
        router.push(`/${data.data.companyName}/admin/dashboard`);
      }
    }
  }, [router.isReady]);

  if (router.isReady) {
  }
};
