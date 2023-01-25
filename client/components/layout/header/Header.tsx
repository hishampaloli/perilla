import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { useActions } from "../../../hooks/useAction";
import { toast } from "react-toastify";
import style from "../../../styles/header.module.scss";
import LogoImage from "../LogoImage";
import { useTenantData } from "../../../hooks/useTenantData";
import LoggedHeader from "./LoggedHeader";
import NotLoggedHeader from "./NotLoggedHeader";
import LeftHeader from "./LeftHeader";
import { AuthState } from "../../../models/tenants";
import { EmployeeAuthState } from "../../../models/employee";

const Header = () => {
  const { tenantLogout, logoutEmployee } = useActions();
  const logoutHandler = () => {
    tenantLogout("we");
  };

  const employeeLogout = () => {
    logoutEmployee("sd");
  };

  const { data }: EmployeeAuthState = useTypedSelector(
    (state) => state.employee
  );
  const userState: AuthState = useTypedSelector((state) => state.user);

  return (
    <div className={style.header}>
      <LeftHeader />

      {data?.email && (
        <LoggedHeader type="employee" employeelogoutHandler={employeeLogout} />
      )}

      {!data?.email && (
        <>
          {" "}
          {userState?.data ? (
            <LoggedHeader type="tenant" logoutHandler={logoutHandler} />
          ) : (
            <NotLoggedHeader />
          )}
        </>
      )}
    </div>
  );
};

export default Header;
