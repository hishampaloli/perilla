import { Inter } from "@next/font/google";
import Layout from "../components/layout/Layout";
import Script from "next/script";
import { useEffect, useState } from "react";
import { useIsAdmin, useIsEmployee } from "../hooks/useAuth";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  console.log(3434);

  useIsAdmin();
  useIsEmployee();
  useEffect(() => {
    console.log(3434);
  }, []);

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
