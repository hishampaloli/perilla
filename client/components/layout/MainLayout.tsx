import Head from "next/head";
import React, { useState } from "react";
import { ToastContainer } from "react-toastify";
import Header from "./header/Header";
import SideBar from "./sidebar/SideBar";
import style from "../../styles/sideBar.module.scss";
import toast, { Toaster } from "react-hot-toast";
import { EmployeeAuthState } from "../../models/employee";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { AuthState } from "../../models/tenants";

const MainLayout = ({ children, title }: { children: any; title: string }) => {
  const [small, setSmall] = useState(false);
  const { data }: EmployeeAuthState = useTypedSelector(
    (state) => state.employee
  );
  const tenant: AuthState = useTypedSelector((state) => state.user);
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />{" "}
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Header />
      <ToastContainer position="bottom-right" />
      <Toaster position="bottom-right" reverseOrder={false} />
      <div style={{ display: "flex" }}>
        <SideBar mainSmall={setSmall} />
        <div className={small ? style.childrens : style.smallChilders}>
          {" "}
          {children}
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
