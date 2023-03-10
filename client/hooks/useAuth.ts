import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { VerifyMyRoom__API } from "../api";
import { EmployeeAuthState } from "../models/employee";
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
  }, [data, error]);
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

export const useIsEmployee = () => {
  const router = useRouter();
  const { data }: EmployeeAuthState = useTypedSelector(
    (state) => state.employee
  );
  useEffect(() => {
    if (router.isReady) {
      if (data?.email) {
        router.push(`/${data?.companyName}/employee/dashboard`);
      }
    }
  }, [router.isReady]);
};

export const useRequireAdmin = () => {
  const router = useRouter();
  const { data }: AuthState = useTypedSelector((state) => state.user);
  useEffect(() => {
    if (router.isReady) {
      if (!data?.data.adminName) {
        router.push(`/`);
      }
    }
  }, [router.isReady]);
};

export const useRequireEmployee = () => {
  const router = useRouter();
  const { data }: EmployeeAuthState = useTypedSelector(
    (state) => state.employee
  );
  useEffect(() => {
    if (router.isReady) {
      if (!data?.email) {
        router.push(`/`);
      }
    }
  }, [router.isReady]);
};

export const useIsRoomOwner = async (roomId: string) => {
  const router = useRouter();
  const { data }: EmployeeAuthState = useTypedSelector(
    (state) => state.employee
  );

  try {
    const datas = await VerifyMyRoom__API("", roomId, data?.id!);
    console.log(datas);
  } catch (error) {
    console.log(error);

    router.back();
  }
};
