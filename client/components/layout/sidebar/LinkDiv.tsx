import Link from "next/link";
import React from "react";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { EmployeeAuthState } from "../../../models/employee";
import { AuthState } from "../../../models/tenants";
import style from "../../../styles/sideBar.module.scss";

const LinkDiv = ({
  link,
  text,
  icon,
  type,
}: {
  link: string;
  text: string;
  icon: any;
  type: string;
}) => {
  const { data }: AuthState = useTypedSelector((state) => state.user);
  const employeeAuth: EmployeeAuthState = useTypedSelector(
    (state) => state.employee
  );
  return (
    <div className={style.linkTab}>
      {type === "admin" ? (
        <Link href={`/${data?.data.companyName}/admin/${link}`}>
          {icon}
          <p> {text}</p>
        </Link>
      ) : (
        <Link href={`/${employeeAuth.data?.companyName}/${type}/${link}`}>
          {icon}
          <p> {text}</p>
        </Link>
      )}
    </div>
  );
};

export default LinkDiv;
