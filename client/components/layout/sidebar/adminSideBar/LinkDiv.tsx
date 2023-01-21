import Link from "next/link";
import React from "react";
import { useTypedSelector } from "../../../../hooks/useTypedSelector";
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
  const { data }: AuthState = useTypedSelector((state) => state.user);
  return (
    <div className={style.linkTab}>
      <Link href={`/${data?.data.companyName}/admin/${link}`}>
        {icon}
        <p> {text}</p>
      </Link>
    </div>
  );
};

export default LinkDiv;
