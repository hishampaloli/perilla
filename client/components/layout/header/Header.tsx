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

const Header = () => {
  const { tenantLogout } = useActions();
  const logoutHandler = () => {
    tenantLogout("we");
  };

  const userState: AuthState = useTypedSelector((state) => state.user);

  useEffect(() => {
    console.log(userState?.data);
  },[logoutHandler])


  return (
    <div className={style.header}>
      <LeftHeader />

      {userState?.data ? (
        <LoggedHeader logoutHandler={logoutHandler} />
      ) : (
        <NotLoggedHeader />
      )}
    </div>
  );
};

export default Header;
