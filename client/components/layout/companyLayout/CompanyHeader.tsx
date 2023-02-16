import { useRouter } from "next/router";
import React from "react";
import style from "../../../styles/header.module.scss";
import LeftHeader from "../header/LeftHeader";
import RightHeader from "./RightHeader";

const CompanyHeader = () => {
  const router = useRouter();
  const { tenant } = router.query;
  return (
    <div className={style.header}>
      <LeftHeader type={tenant} />

      <RightHeader />
    </div>
  );
};

export default CompanyHeader;
