import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { useTypedSelector } from "../../../../hooks/useTypedSelector";
import { EmployeeAuthState } from "../../../../models/employee";
import { AuthState } from "../../../../models/tenants";
import style from "../../../../styles/sideBar.module.scss";

const LinkDiv = ({
  link,
  text,
  icon,
}: {
  link: string;
  text: string;
  icon: any;
}) => {
  const { data }: EmployeeAuthState = useTypedSelector(
    (state) => state.employee
  );
  const router = useRouter();
  const { tenant } = router.query;
  return (
    <div className={style.linkTab}>
      <Link href={`/${tenant}/employee/${link}`}>
        {icon}
        <p> {text}</p>
      </Link>
    </div>
  );
};

export default LinkDiv;
