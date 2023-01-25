import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { AuthState } from "../../../models/tenants";
import style from "../../../styles/header.module.scss";

const NotLoggedHeader = () => {
  const userState: AuthState = useTypedSelector((state) => state.user);
  const router = useRouter();
  return (
    <div className={style.notLogged}>
      <Link href={"/register"}>
   
        <li>Register</li>
      </Link>
      <Link href={"/login"}>
       
        <li>Login</li>
      </Link>
    </div>
  );
};

export default NotLoggedHeader;
