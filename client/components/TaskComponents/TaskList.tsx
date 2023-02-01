import React from "react";
import style from "../../styles/task.module.scss";
import VisibilityIcon from "@mui/icons-material/Visibility";
import Link from "next/link";
import { TaskData } from "../../models/project";

const TaskList = ({ taskData }: { taskData: TaskData }) => {
  return (
    <Link href={""} className={style.taskList}>
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
