import { Inter } from "@next/font/google";
import Layout from "../components/layout/Layout";
import Script from "next/script";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Layout title={"Perilla"}>
        {" "}
        {/* <Script
          async
          src="https://embed.tawk.to/63bd4f0b47425128790ca5ed/1gmdnpi97"
          charSet="UTF_8"
          crossOrigin="*"
        /> */}
        <div>
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
