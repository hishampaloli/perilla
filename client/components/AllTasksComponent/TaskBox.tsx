import React from "react";
import style from "../../styles/allTaskMain.module.scss";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import { TaskData } from "../../models/project";
import { EmployeeAuthData, EmployeeAuthState } from "../../models/employee";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import Link from "next/link";

const TaskBox = ({ taskData }: { taskData: TaskData }) => {
  const { data }: EmployeeAuthState = useTypedSelector(
    (state) => state.employee
  );
  return (
    <Link
      href={`/${data?.companyName}/task/${taskData.id}`}
      className={style.taskBox}
    >
      <div>
        <img
          src={
            data?.role === "hr"
              ? taskData?.assignedTo?.image
              : taskData?.assignedBy?.image
          }
          alt=""
        />
        <h3>{taskData?.taskName}</h3>
      </div>
      <div>
        <p>{taskData.taskDescription.slice(0, 100)}...</p>
        <p>
          <span
            style={{
              color:
                taskData?.priority === "high"
                  ? "red"
                  : taskData?.priority === "low"
                  ? "green"
                  : "#ff9b44",
              transform: "scale(.7)",
            }}
          >
            <RadioButtonCheckedIcon />
          </span>
          {taskData?.priority}
        </p>
      </div>
    </Link>
  );
};

export default TaskBox;
