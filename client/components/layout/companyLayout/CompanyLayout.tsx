import Head from "next/head";
import React, { useState } from "react";
import { Toaster } from "react-hot-toast";
import { ToastContainer } from "react-toastify";
import CompanyHeader from "./CompanyHeader";
import style from "../../../styles/CompanyLaout.module.scss";
import SideBar from "../sidebar/SideBar";

const CompanyLayout = ({
  children,
  title,
}: {
  children: any;
  title: string;
}) => {
  const [small, setSmall] = useState<boolean>(false);

  return (
    <div className={style.CompanyLayoutMain}>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />{" "}
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <CompanyHeader />
      <div style={{ display: "flex" }}>
        <SideBar mainSmall={setSmall} />
        <div className={small ? style.childrens : style.smallChilders}>
          {" "}
          {children}
        </div>
      </div>
      <ToastContainer position="bottom-right" />
      <Toaster position="bottom-right" reverseOrder={false} />
      <div style={{ display: "flex" }}>{children}</div>
    </div>
  );
};

export default CompanyLayout;
