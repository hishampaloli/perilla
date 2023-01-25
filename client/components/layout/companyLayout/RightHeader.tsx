import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import style from "../../../styles/header.module.scss";

const RightHeader = () => {
  const router = useRouter();
  const { tenant } = router.query;

  

  return (
    <div className={style.notLogged}>
      <Link href={`${tenant}/login/employee`}>
        <li>Employee Login</li>
      </Link>
      <Link href={`${tenant}/jobs`}>
        <li>Jobs</li>
      </Link>
    </div>
  );
};

export default RightHeader;
