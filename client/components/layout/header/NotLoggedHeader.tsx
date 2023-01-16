import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import style from "../../../styles/header.module.scss";

const NotLoggedHeader = () => {
  const router = useRouter();
  return (
    <div className={style.notLogged}>
      <Link href={"/register"}>
        {" "}
        <li>Register</li>
      </Link>
      <Link href={"/login"}>
        {" "}
        <li>Login</li>
      </Link>
    </div>
  );
};

export default NotLoggedHeader;
