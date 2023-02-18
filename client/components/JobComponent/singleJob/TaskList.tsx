import React from "react";
import style from "../../styles/task.module.scss";
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
      href={`/${router.query.tenant}/application/${taskData.id}`}
      className={style.taskList}
    >
      <div>
        <img src={appliData?.assignedTo?.image} alt="" />
        <h4>{appliData?.taskName}</h4>
      </div>
      <span>
        <VisibilityIcon />
      </span>
    </Link>
  );
};

export default TaskList;
