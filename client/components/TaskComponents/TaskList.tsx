import React from "react";
import style from "../../styles/task.module.scss";
import VisibilityIcon from "@mui/icons-material/Visibility";
import Link from "next/link";
import { TaskData } from "../../models/project";
import { AuthState } from "../../models/tenants";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { EmployeeAuthState } from "../../models/employee";

const TaskList = ({ taskData }: { taskData: TaskData }) => {
  const { data }: AuthState = useTypedSelector((state) => state.user);
  const employee: EmployeeAuthState = useTypedSelector(
    (state) => state.employee
  );

  const companyName = data?.data?.companyName || employee?.data?.companyName;
  return (
    <Link
      href={`/${companyName}/task/${taskData.id}`}
      className={style.taskList}
    >
      <div>
        <img src={taskData?.assignedTo?.image} alt="" />
        <h4>{taskData?.taskName}</h4>
      </div>
      <span>
        <VisibilityIcon />
      </span>
    </Link>
  );
};

export default TaskList;
