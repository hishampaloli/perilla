import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { toast } from "react-toastify";
import FixedSpinner from "../../components/layout/FixedSpinner";
import Layout from "../../components/layout/Layout";
import { useActions } from "../../hooks/useAction";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { TenantData, UserDataState } from "../../models/tenants";

const Verification = () => {
  const router = useRouter();
  const { GetStripeVerification } = useActions();
  const { data }: UserDataState = useTypedSelector((state) => state.user);
  const { verification } = router.query;
  async function ho() {
    const datas = await GetStripeVerification("", verification);

    console.log(data?.data.companyName);

    if (`${datas}` === "true") {
      toast.success("payemnt successfull");
      setTimeout(() => {
        router.push(`/${data?.data.companyName}/admin/dashboard`);
      }, 2000);
    }
    if (`${datas}` === "false") {
      console.log(333);
      toast.error("Payment failed");
      setTimeout(() => {
        router.push("/");
      }, 2000);
    }
  }

  useEffect(() => {
    if (router.isReady) {
      ho();
    }
  }, [router.isReady]);

  return (
    <Layout title="payment">
      <div>
        <FixedSpinner />
      </div>
    </Layout>
  );
};

export default Verification;
