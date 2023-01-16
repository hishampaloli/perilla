import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { AuthState } from "../models/tenants";
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
