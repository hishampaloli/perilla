import React from "react";
import style from "../../../styles/task.module.scss";
import VisibilityIcon from "@mui/icons-material/Visibility";
import Link from "next/link";

import { AuthState } from "../../../models/tenants";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { useRouter } from "next/router";
import { ApplicationData } from "../../../models/job";

const TaskList = ({ appliData }: { appliData: ApplicationData }) => {
  const { data }: AuthState = useTypedSelector((state) => state.user);

  const router = useRouter();

  return (
    <Link
      href={`/${router.query.tenant}/${
        data?.data.adminName ? "admin" : ""
      }/applications/${appliData.id}`}
      className={style.taskList}
    >
      <div>
        <img src={appliData?.image} alt="" />
        <h4>{appliData?.name}</h4>
        <p style={{ marginLeft: "20px" }}>{appliData?.email}</p>
      </div>

      <span>
        <VisibilityIcon />
      </span>
    </Link>
  );
};

export default TaskList;
