import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import style from "../../../styles/header.module.scss";

const LoggedHeader = ({ logoutHandler }: { logoutHandler: any }) => {
  const router = useRouter();
  return (
    <div className={style.notLogged}>
      <Link href={"/payment"}>
        <li>Buy</li>
      </Link>
      <Link href={"/"}>
        <li onClick={logoutHandler}>Logout</li>
      </Link>
    </div>
  );
};

export default LoggedHeader;
