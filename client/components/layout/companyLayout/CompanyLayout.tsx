import Head from "next/head";
import React from "react";
import { Toaster } from "react-hot-toast";
import { ToastContainer } from "react-toastify";
import CompanyHeader from "./CompanyHeader";

const CompanyLayout = ({
  children,
  title,
}: {
  children: any;
  title: string;
}) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />{" "}
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <CompanyHeader />
      <ToastContainer position="bottom-right" />
      <Toaster position="bottom-right" reverseOrder={false} />
      <div style={{ display: "flex" }}>{children}</div>
    </div>
  );
};

export default CompanyLayout;
