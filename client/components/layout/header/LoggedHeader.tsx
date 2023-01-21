import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { AuthState } from "../../../models/tenants";
import style from "../../../styles/header.module.scss";

const LoggedHeader = ({ logoutHandler }: { logoutHandler: any }) => {
  const userState: AuthState = useTypedSelector((state) => state.user);

  const router = useRouter();
  return (
    <div className={style.notLogged}>
      {!userState.data?.data.isPurchased && (
        <Link href={"/payment"}>
          <li>Buy</li>
        </Link>
      )}

      <Link href={"/"}>
        <li onClick={logoutHandler}>Logout</li>
      </Link>
    </div>
  );
};

export default LoggedHeader;
