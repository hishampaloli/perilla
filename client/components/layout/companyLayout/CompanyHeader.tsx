import React from "react";
import style from "../../../styles/header.module.scss";
import LeftHeader from "../header/LeftHeader";
import RightHeader from "./RightHeader";

const CompanyHeader = () => {
  return <div className={style.header}>
    <LeftHeader />

    <RightHeader />
  </div>;
};

export default CompanyHeader;
