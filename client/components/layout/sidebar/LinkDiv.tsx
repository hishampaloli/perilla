import Link from "next/link";
import { useRouter } from "next/router";
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
  const router = useRouter();
  const { data }: AuthState = useTypedSelector((state) => state.user);
  const employeeAuth: EmployeeAuthState = useTypedSelector(
    (state) => state.employee
  );
  return (
    <div className={style.linkTab}>
      {type === "admin" ? (
        <Link
          href={`/${
            data?.data.companyName || router.query.tenant
          }/admin/${link}`}
        >
          {icon}
          <p> {text}</p>
        </Link>
      ) : (
        <Link
          href={`/${
            employeeAuth.data?.companyName || router.query.tenant
          }/${type}/${link}`}
        >
          {icon}
          <p> {text}</p>
        </Link>
      )}
    </div>
  );
};

export default LinkDiv;
