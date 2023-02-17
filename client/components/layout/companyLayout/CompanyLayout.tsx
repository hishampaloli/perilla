import Head from "next/head";
import React, { useState } from "react";
import { Toaster } from "react-hot-toast";
import { ToastContainer } from "react-toastify";
import CompanyHeader from "./CompanyHeader";
import style from "../../../styles/sideBar.module.scss";
import SideBar from "../sidebar/SideBar";
import { useTypedSelector } from "../../../hooks/useTypedSelector";

const CompanyLayout = ({
  children,
  title,
  loc,
}: {
  children: any;
  title: string;
  loc: string;
}) => {
  const [small, setSmall] = useState<boolean>(false);

  const { data } = useTypedSelector((state) => state.googleData);
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />{" "}
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <CompanyHeader loc={loc} />
      <div style={{ display: "flex" }}>
        {data?.email && <SideBar mainSmall={setSmall} />}
        <div className={small ? style.childrens : style.smallChilders}></div>
      </div>
      <ToastContainer position="bottom-right" />
      <Toaster position="bottom-right" reverseOrder={false} />
      <div style={{ display: "flex" }}>{children}</div>
    </div>
  );
};

export default CompanyLayout;
