import { Inter } from "@next/font/google";
import Layout from "../components/layout/Layout";
import { wrapper } from "../redux/store";
import { useEffect } from "react";
import Router, { useRouter } from "next/router";
import { useTypedSelector } from "../hooks/useTypedSelector";
import axios from "axios";
import buildClient from "../api/buildClient";
import { useTenantData } from "../hooks/useTenantData";

const inter = Inter({ subsets: ["latin"] });



export default function Home() {
  return (
    <>
      <Layout title={"Shopit"}>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}
        >
          <h1>786</h1>
        </div>
      </Layout>
    </>
  );
}

// Home.getInitialProps = wrapper.getInitialPageProps(
//   (store) => async (context: any) => {
//     const config = {
//       headers: {
//         "Content-Type": "application/json",
//       },
//     };
//     const { data } = await buildClient(context).post<string>(
//       "/api/tenant/getOtp",
//       // number,
//       config
//     );
//     return {};
//   }
// );
